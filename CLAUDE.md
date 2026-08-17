# CLAUDE.md — ceramic-typescript SDK maintenance

This file is read by the Claude Code agent in `agent-sdk-sync.yml` whenever the Ceramic Search API's
OpenAPI spec changes. Follow these rules exactly — this is the only thing enforcing version/changelog/
test discipline for this repo.

## Your scope

You have Read/Write/Edit/Glob/Grep tools only — no Bash, no git. You cannot run tests, commit, push,
or open a PR; the surrounding workflow does all of that after you finish. Your job is limited to:
editing source files, adding tests where warranted, and updating the version + changelog.

## Editing discipline

- This SDK was originally Stainless-generated but is now maintained by hand — there is no
  regeneration step. Edit existing files in place, matching the existing style exactly (see
  `src/resources/top-level.ts` and `src/client.ts` for conventions).
- Never rewrite a file wholesale to accommodate a spec change. Make the smallest diff that correctly
  reflects the new spec.
- `src/lib/` and `examples/` are hand-maintained and never touched by any generator — free to add to
  if the spec change calls for new example code.
- The one endpoint is `POST /search`. Relevant files: `src/resources/top-level.ts` (`search()` method,
  request/response types, docstrings), `src/client.ts` (`validateSearchQuery` and the client's public
  surface).

## Test expectations

- Do not run the test suite yourself — a separate CI step runs `./scripts/test` after you finish.
- `tests/api-resources/top-level.test.ts`'s tests are permanently skipped (no mock server) — do not
  add tests there and do not remove the `test.skip(...)` markers.
- Instead, add new coverage for changed behavior to `examples/smoke_tests/typescript_sdk_smoke.ts` —
  it runs against the live API in CI and is the real endpoint-level gate. Only add cases for
  parameters/fields that actually changed; don't touch unrelated coverage.
- Leave the generic `tests/` suite (base64, header building, path handling, query stringification,
  uploads) alone unless your change genuinely touches that shared framework code, which should be rare.

## Version bump rules

This package is already past 1.0 (currently in the `2.x` series) — use standard semver:

- **Patch** (`x.y.Z`): wording/description clarification, bug fix, no request/response field changes.
- **Minor** (`x.Y.0`): new optional request parameter, new response field, new endpoint — additive.
- **Major** (`X.0.0`): removed/renamed field, changed type, changed required-ness, or any other
  breaking change.

Update the version in **both** files (they must always match):

- `package.json` — `"version": "X.Y.Z"`
- `src/version.ts` — `export const VERSION = 'X.Y.Z';` (drop the trailing
  `// x-release-please-version` comment — release-please no longer manages this file)

## Changelog format

Add a new entry at the top of `CHANGELOG.md`, matching the existing format:

```
## <new-version> (<YYYY-MM-DD>)

Full Changelog: [v<old-version>...v<new-version>](https://github.com/CeramicTeam/ceramic-typescript/compare/v<old-version>...v<new-version>)

### <Section>

* **<scope>:** <one-line description>
```

- Use today's date, `YYYY-MM-DD`.
- `<Section>` is one of `Features` / `Bug Fixes` / `Performance Improvements` / `Chores`, matching the
  version-bump classification above.
- `<scope>` is a short lowercase tag for the area changed (e.g. `search`, `client`, `types`) — check
  recent `CHANGELOG.md` entries for examples already in use.
- Always include the "Full Changelog" comparison line — it only references version tags (both known
  in advance), never omit it.
- Omit only the trailing commit-link parenthetical that appears after each bullet in older entries —
  you don't have git access and can't know the commit SHA that will contain this entry. This is an
  intentional deviation from the historical format, not an error.
