# Changelog

## 2.1.2 (2026-05-08)

Full Changelog: [v2.1.1...v2.1.2](https://github.com/CeramicTeam/ceramic-typescript/compare/v2.1.1...v2.1.2)

### Chores

* redact api-key headers in debug logs ([c03c1ef](https://github.com/CeramicTeam/ceramic-typescript/commit/c03c1efe01817e371f5a7362945eb0f108797551))

## 2.1.1 (2026-05-06)

Full Changelog: [v2.1.0...v2.1.1](https://github.com/CeramicTeam/ceramic-typescript/compare/v2.1.0...v2.1.1)

### Chores

* **format:** run eslint and prettier separately ([659db5b](https://github.com/CeramicTeam/ceramic-typescript/commit/659db5b6c38e505f907ca35ff839615e7472c6f5))

## 2.1.0 (2026-04-28)

Full Changelog: [v2.0.1...v2.1.0](https://github.com/CeramicTeam/ceramic-typescript/compare/v2.0.1...v2.1.0)

### Features

* support setting headers via env ([eb06f21](https://github.com/CeramicTeam/ceramic-typescript/commit/eb06f21973f035f4c14ae6a456694aebb4c9dd6e))


### Chores

* **internal:** codegen related update ([8ecce89](https://github.com/CeramicTeam/ceramic-typescript/commit/8ecce8985a4de4f16036c68028dc38626e1e6e24))

## 2.0.1 (2026-04-23)

Full Changelog: [v2.0.0...v2.0.1](https://github.com/CeramicTeam/ceramic-typescript/compare/v2.0.0...v2.0.1)

### Chores

* **internal:** more robust bootstrap script ([90cc394](https://github.com/CeramicTeam/ceramic-typescript/commit/90cc394bcce6613a7c9ae1e814fcf81d70e12b52))

## 2.0.0 (2026-04-17)

Full Changelog: [v1.2.1...v2.0.0](https://github.com/CeramicTeam/ceramic-typescript/compare/v1.2.1...v2.0.0)

### Features

* Updating main with staging ([f63f2c3](https://github.com/CeramicTeam/ceramic-typescript/commit/f63f2c3c4fbdd141d6a9ecd235e2f43afcd40d25))


### Chores

* **ci:** remove release-doctor workflow ([5bf176e](https://github.com/CeramicTeam/ceramic-typescript/commit/5bf176e3a80987c37aeb581a0d8f4b411f13a37f))
* **internal:** codegen related update ([b0ecf81](https://github.com/CeramicTeam/ceramic-typescript/commit/b0ecf8140149421a7573de12922d5758ccb5e6ee))

## 1.2.1 (2026-04-07)

Full Changelog: [v1.2.0...v1.2.1](https://github.com/CeramicTeam/ceramic-typescript/compare/v1.2.0...v1.2.1)

### Features

* Update main with staging ([7a54314](https://github.com/CeramicTeam/ceramic-typescript/commit/7a5431457c4477baadf420a3cc52b87cf3354827))


### Bug Fixes

* **internal:** gitignore generated `oidc` dir ([57d079d](https://github.com/CeramicTeam/ceramic-typescript/commit/57d079da7189c420d4db86d24e59cc7a363112eb))

## 1.2.0 (2026-03-30)

Full Changelog: [v1.1.0...v1.2.0](https://github.com/CeramicTeam/ceramic-typescript/compare/v1.1.0...v1.2.0)

### Features

* **ts-sdk:** add client-side validation for search query word count ([84ef3ce](https://github.com/CeramicTeam/ceramic-typescript/commit/84ef3cebee739204f055cc78c925744e63e6ea5c))
* Update main with staging ([0b93089](https://github.com/CeramicTeam/ceramic-typescript/commit/0b93089480824a2a65bd53d70b8a3d3e3f27bb32))


### Bug Fixes

* run eslint --fix to resolve prettier formatting errors ([7136115](https://github.com/CeramicTeam/ceramic-typescript/commit/713611565c2c64be6aca0f6f402716aaf319618d))

## 1.1.0 (2026-03-27)

Full Changelog: [v1.0.0...v1.1.0](https://github.com/CeramicTeam/ceramic-typescript/compare/v1.0.0...v1.1.0)

### Features

* Update main with staging ([83b415e](https://github.com/CeramicTeam/ceramic-typescript/commit/83b415e2a911b7f9fbf765ffe8bc40b81aa48228))

## 1.0.0 (2026-03-26)

Full Changelog: [v0.0.1...v1.0.0](https://github.com/CeramicTeam/ceramic-typescript/compare/v0.0.1...v1.0.0)

### ⚠ BREAKING CHANGES

* change API base path to /search

### Bug Fixes

* change API base path to /search ([6e4c35b](https://github.com/CeramicTeam/ceramic-typescript/commit/6e4c35bd9c702e5f081badb27b27bc4ab9cfe4cf))
* **client:** preserve URL params already embedded in path ([287978f](https://github.com/CeramicTeam/ceramic-typescript/commit/287978f3daf3786c8880b8a42a7ae7f13661f385))
* **docs/contributing:** correct pnpm link command ([712bb9d](https://github.com/CeramicTeam/ceramic-typescript/commit/712bb9da7f8251bec614462ee4ed24792fb69522))
* **smoke-tests:** import SDK from installed package instead of local dist build ([1595f1d](https://github.com/CeramicTeam/ceramic-typescript/commit/1595f1d782b14bca8a129607497c5aeb08cb39db))
* update smoke test base_url to root ([a467bf2](https://github.com/CeramicTeam/ceramic-typescript/commit/a467bf22ad5b9c7019acb9aadbb68a05e21ddca8))


### Chores

* **ci:** skip lint on metadata-only changes ([91a7a32](https://github.com/CeramicTeam/ceramic-typescript/commit/91a7a326c0cc216c6278ab8389125e444a74d612))
* **ci:** skip uploading artifacts on stainless-internal branches ([74a9cfa](https://github.com/CeramicTeam/ceramic-typescript/commit/74a9cfac382af00736345f4fcfae140c5cb0ecc4))
* format TypeScript smoke test ([2790ccb](https://github.com/CeramicTeam/ceramic-typescript/commit/2790ccb3dca08c1faa9666148df59a2eca836db9))
* **internal/client:** fix form-urlencoded requests ([88ab12d](https://github.com/CeramicTeam/ceramic-typescript/commit/88ab12d01f80100b9276cd344619fbe552234eb1))
* **internal:** codegen related update ([3939fea](https://github.com/CeramicTeam/ceramic-typescript/commit/3939fea0bff603cc56f997d52be2c1c4ccb23096))
* **internal:** move stringifyQuery implementation to internal function ([9725da3](https://github.com/CeramicTeam/ceramic-typescript/commit/9725da33fd835dfd362f2125e997553450a96f9a))
* **internal:** remove mock server code ([969e50e](https://github.com/CeramicTeam/ceramic-typescript/commit/969e50e0b413c9c6721ce6249bad70ba8a4443af))
* **internal:** tweak CI branches ([ae41a85](https://github.com/CeramicTeam/ceramic-typescript/commit/ae41a85bb3601b404dfe415327606a5e6ba8730a))
* **internal:** update dependencies to address dependabot vulnerabilities ([7f55156](https://github.com/CeramicTeam/ceramic-typescript/commit/7f551567ebf6c396f6555bdf0a3278cb3fe0a554))
* **internal:** update gitignore ([69c622f](https://github.com/CeramicTeam/ceramic-typescript/commit/69c622fb943057fd30fb393f8f86bfe45e7705cd))
* **internal:** upgrade pnpm version ([7e43c44](https://github.com/CeramicTeam/ceramic-typescript/commit/7e43c44b71484b040ac23f30c39e5e79ada878bc))
* update mock server docs ([c75b9e6](https://github.com/CeramicTeam/ceramic-typescript/commit/c75b9e64bef322a3a2d65cb5e5b09a07dfc1b455))
* update pnpm lockfile ([1e41d14](https://github.com/CeramicTeam/ceramic-typescript/commit/1e41d14aeabe10117c1f1e7a5ccfb6dad051cfd7))


### Documentation

* add query param to README example request and include docs/support links in Stainless config ([cc6f3bf](https://github.com/CeramicTeam/ceramic-typescript/commit/cc6f3bf5ad77ec01f637db6cb944a558fd9cd3b6))
* staging branch version of OpenAPI spec ([86983d8](https://github.com/CeramicTeam/ceramic-typescript/commit/86983d878d0dc0b3f6f70d486690c961d69dbc22))
* update production repo ([07001ee](https://github.com/CeramicTeam/ceramic-typescript/commit/07001eedeb08548e073e90e077b9ed6943d1e695))
* update README REST API documentation link to api-reference/search ([a1303b5](https://github.com/CeramicTeam/ceramic-typescript/commit/a1303b5ed60e7f39501df066944e572d8088afcc))
* updated error response ([e9efe37](https://github.com/CeramicTeam/ceramic-typescript/commit/e9efe37afe779166048f8bb7dcb713aa74c38614))


### Styles

* fix trailing comma in smoke test ([52f3f8e](https://github.com/CeramicTeam/ceramic-typescript/commit/52f3f8ed6377b85cd689b928c871f105911a3539))
