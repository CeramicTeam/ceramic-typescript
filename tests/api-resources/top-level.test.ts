// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Ceramic from 'ceramic-ai';

const client = new Ceramic({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('top level methods', () => {
  // Mock server tests are disabled
  test.skip('search: only required params', async () => {
    const responsePromise = client.search({ query: 'California rental laws' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('search: required and optional params', async () => {
    const response = await client.search({ query: 'California rental laws', maxDescriptionLength: 1000 });
  });
});
