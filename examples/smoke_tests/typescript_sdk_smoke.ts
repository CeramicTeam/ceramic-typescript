import Ceramic from 'ceramic-ai';

// ---------------------------
// Helpers
// ---------------------------

let PASSED = 0;
let FAILED = 0;

function ok(label: string) {
  PASSED += 1;
  console.log(`✅ ${label}`);
}

function bad(label: string, msg?: string) {
  FAILED += 1;
  console.log(`❌ ${label}`);
  if (msg) console.log(`   ${msg}`);
}

function makeClient(apiKey?: string): Ceramic {
  const key = apiKey ?? process.env['CERAMIC_API_KEY'];
  if (!key) throw new Error('CERAMIC_API_KEY is not set');
  return new Ceramic({ apiKey: key, baseURL: 'https://api.ceramic.ai/' });
}

function assertRFCErrorShape(err: any): void {
  const e = err?.error;
  if (!e || typeof e !== 'object') {
    throw new Error(`Expected err.error to be an object; got: ${String(e)}`);
  }
  for (const k of ['title', 'status', 'detail', 'requestId', 'code'] as const) {
    if (!(k in e)) {
      throw new Error(`Missing RFC field "${k}" in err.error: ${JSON.stringify(e)}`);
    }
  }
}

function getStatus(err: any): number | undefined {
  return err?.status ?? err?.error?.status;
}

function getCode(err: any): string | undefined {
  return err?.error?.code;
}

async function expectOk(label: string, fn: () => Promise<any>) {
  try {
    await fn();
    ok(label);
  } catch (err: any) {
    bad(label, `got ${err?.constructor?.name ?? typeof err}: ${err?.message ?? String(err)}`);
    // optional: print body
    // console.log('   status:', getStatus(err), 'code:', getCode(err), 'error:', err?.error ?? err);
  }
}

async function expectValidationError(label: string, fn: () => Promise<any>) {
  try {
    await fn();
    bad(label, 'unexpected success (expected a validation error)');
  } catch (err: any) {
    if (err instanceof Ceramic.APIError) {
      bad(label, `hit the API instead of failing client-side: ${err?.message}`);
    } else {
      ok(label);
    }
  }
}

async function expectApiError(
  label: string,
  fn: () => Promise<any>,
  opts: { exc?: any; status?: number; code?: string } = {},
) {
  const exc = opts.exc ?? Ceramic.APIError;

  try {
    await fn();
    bad(label, 'unexpected success (expected an error)');
    return;
  } catch (err: any) {
    if (!(err instanceof exc)) {
      bad(
        label,
        `wrong error type: expected ${exc?.name ?? 'Error'}, got ${err?.constructor?.name ?? typeof err}`,
      );
      return;
    }

    const status = getStatus(err);
    const code = getCode(err);

    if (opts.status != null && status !== opts.status) {
      bad(label, `wrong status: expected ${opts.status}, got ${status} (code=${code ?? 'n/a'})`);
      return;
    }
    if (opts.code != null && code !== opts.code) {
      bad(label, `wrong code: expected ${opts.code}, got ${code ?? 'n/a'} (status=${status ?? 'n/a'})`);
      return;
    }

    // Validate RFC body shape (only if it exists)
    try {
      assertRFCErrorShape(err);
    } catch (shapeErr: any) {
      bad(label, `RFC error shape invalid: ${shapeErr?.message ?? String(shapeErr)}`);
      return;
    }

    ok(label);
  }
}

// ---------------------------
// Tests
// ---------------------------

async function testBasicQuery(): Promise<void> {
  const client = makeClient();
  await expectOk('basic query', () => client.search({ query: 'California rental laws' }));
}

async function testInvalidApiKey(): Promise<void> {
  const client = makeClient('invalid_api_key');
  await expectApiError('invalid api key', () => client.search({ query: 'test invalid key' }), {
    exc: Ceramic.AuthenticationError,
    status: 401,
    code: 'invalid_api_key',
  });
}

async function testQueryValidation(): Promise<void> {
  const client = makeClient();
  await expectValidationError('query: too many words', () =>
    client.search({ query: Array(51).fill('word').join(' ') }),
  );
  await expectValidationError('query: blank', () => client.search({ query: '   ' }));
}

async function testMaxResultsValidations(): Promise<void> {
  const client = makeClient();

  const cases: Array<{ name: string; value: number; shouldSucceed: boolean }> = [
    { name: 'zero', value: 0, shouldSucceed: false },
    { name: 'negative', value: -1, shouldSucceed: false },
    { name: 'valid_min', value: 1, shouldSucceed: true },
    { name: 'valid_default', value: 10, shouldSucceed: true },
    { name: 'valid_max', value: 20, shouldSucceed: true },
    { name: 'above_max', value: 21, shouldSucceed: false },
  ];

  for (const c of cases) {
    const label = `maxResults: ${c.name} (maxResults=${c.value})`;
    if (c.shouldSucceed) {
      await expectOk(label, () => client.search({ query: 'rate limits and retries', maxResults: c.value }));
    } else {
      await expectApiError(
        label,
        () => client.search({ query: 'rate limits and retries', maxResults: c.value }),
        {
          exc: Ceramic.UnprocessableEntityError,
          status: 422,
          code: 'invalid_parameter',
        },
      );
    }
  }
}

async function testMaxDescriptionLengthValidations(): Promise<void> {
  const client = makeClient();

  const cases: Array<{ name: string; value: number; shouldSucceed: boolean }> = [
    { name: 'zero', value: 0, shouldSucceed: false },
    { name: 'below_min', value: 900, shouldSucceed: false },
    { name: 'valid_min', value: 1000, shouldSucceed: true },
    { name: 'valid_default', value: 3000, shouldSucceed: true },
    { name: 'above_max', value: 9000, shouldSucceed: false },
  ];

  for (const c of cases) {
    const label = `maxDescriptionLength: ${c.name} (maxDescriptionLength=${c.value})`;
    if (c.shouldSucceed) {
      await expectOk(label, () =>
        client.search({ query: 'tenant rights guide', maxDescriptionLength: c.value }),
      );
    } else {
      await expectApiError(
        label,
        () => client.search({ query: 'tenant rights guide', maxDescriptionLength: c.value }),
        {
          exc: Ceramic.UnprocessableEntityError,
          status: 422,
          code: 'invalid_parameter',
        },
      );
    }
  }
}

async function main(): Promise<void> {
  try {
    await testBasicQuery();
    await testInvalidApiKey();
    await testQueryValidation();
    await testMaxResultsValidations();
    await testMaxDescriptionLengthValidations();
  } finally {
    const total = PASSED + FAILED;
    console.log(`\nSummary: ✅ ${PASSED} passed, ❌ ${FAILED} failed (total ${total})`);
  }

  if (FAILED > 0) process.exit(1);
}

main().catch((err) => {
  console.error('\nTest runner crashed:', err);
  process.exit(1);
});
