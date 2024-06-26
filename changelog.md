# Changelog

## [1.1.14](https://github.com/mhetrics/app-usage-events-react/compare/v1.1.13...v1.1.14) (2024-04-20)


### Bug Fixes

* **emit:** re-attempt emission tasks in attempted state ([0dcf206](https://github.com/mhetrics/app-usage-events-react/commit/0dcf206a971218a89718d597efcbe62cdb9a01da))

## [1.1.13](https://github.com/mhetrics/app-usage-events-react/compare/v1.1.12...v1.1.13) (2024-04-20)


### Bug Fixes

* **dao:** json.parse instead of deserialize to support minification ([0944e7f](https://github.com/mhetrics/app-usage-events-react/commit/0944e7f391d72bdd10c6b7bd0f7fa788e2a47b60))

## [1.1.12](https://github.com/mhetrics/app-usage-events-react/compare/v1.1.11...v1.1.12) (2024-03-27)


### Bug Fixes

* **autocap:** skip autocapture of motion events ([42bdecb](https://github.com/mhetrics/app-usage-events-react/commit/42bdecb29f044ec248b6666d9e624a004a3a028f))

## [1.1.11](https://github.com/mhetrics/app-usage-events-react/compare/v1.1.10...v1.1.11) (2023-09-23)


### Bug Fixes

* **typedef:** resolve tsc issue after returntype update ([fd0df51](https://github.com/mhetrics/app-usage-events-react/commit/fd0df5110352e4e96a0dd8d9a2fe827a3563467f))

## [1.1.10](https://github.com/mhetrics/app-usage-events-react/compare/v1.1.9...v1.1.10) (2023-09-23)


### Bug Fixes

* **typedef:** change returntype of provider ([de3dc61](https://github.com/mhetrics/app-usage-events-react/commit/de3dc61274083ab6e5a64b0818cf3d9ee1eec08b))

## [1.1.9](https://github.com/mhetrics/app-usage-events-react/compare/v1.1.8...v1.1.9) (2023-09-22)


### Bug Fixes

* **deps:** resolve event-stream pubsub contract change per update ([d349620](https://github.com/mhetrics/app-usage-events-react/commit/d349620edd493c6dc9e0bf1797f205fd50c52e9d))

## [1.1.8](https://github.com/mhetrics/app-usage-events-react/compare/v1.1.7...v1.1.8) (2023-09-22)


### Bug Fixes

* **deps:** bump event-stream-pubsub to latest ([5a2532e](https://github.com/mhetrics/app-usage-events-react/commit/5a2532eaf208f6e659490b469b48b4448c56eec5))

## [1.1.7](https://github.com/mhetrics/app-usage-events-react/compare/v1.1.6...v1.1.7) (2023-09-07)


### Bug Fixes

* **observation:** warn without error on observations without sessions ([a4cac62](https://github.com/mhetrics/app-usage-events-react/commit/a4cac62e9c41b24c4010f36a97446283acd74fa7))
* **practs:** bump to latest best practs ([ab32680](https://github.com/mhetrics/app-usage-events-react/commit/ab32680fa18d92a6e9f49e98ddbf4f3e51aea14a))

## [1.1.6](https://github.com/mhetrics/app-usage-events-react/compare/v1.1.5...v1.1.6) (2023-07-28)


### Bug Fixes

* **dao:** json.parse instead of deserialize to support minification ([57f4731](https://github.com/mhetrics/app-usage-events-react/commit/57f47311a829e88eb2b1f453e62c1ff8f0a888b6))

## [1.1.5](https://github.com/mhetrics/app-usage-events-react/compare/v1.1.4...v1.1.5) (2023-07-25)


### Bug Fixes

* **perf:** wait for application session instead of queuing to resilient queue ([92405eb](https://github.com/mhetrics/app-usage-events-react/commit/92405eb4eca7b0c7f00b7ef0a5588c5fac15b564))

## [1.1.4](https://github.com/mhetrics/app-usage-events-react/compare/v1.1.3...v1.1.4) (2023-07-25)


### Bug Fixes

* **logs:** dont log to console unless asked to ([675938f](https://github.com/mhetrics/app-usage-events-react/commit/675938fad3a02f30964cc1ebeec17956bb1f4236))

## [1.1.3](https://github.com/mhetrics/app-usage-events-react/compare/v1.1.2...v1.1.3) (2023-07-25)


### Bug Fixes

* **pkg:** add back the registry-url parameter to package-publish ([28e8ad9](https://github.com/mhetrics/app-usage-events-react/commit/28e8ad958a32773979955235f65af14400f1595d))

## [1.1.2](https://github.com/mhetrics/app-usage-events-react/compare/v1.1.1...v1.1.2) (2023-07-25)


### Bug Fixes

* **publish:** ensure build before publish ([8162852](https://github.com/mhetrics/app-usage-events-react/commit/8162852fa7e9f7a1c36376979fb23843f9cb17ff))

## [1.1.1](https://github.com/mhetrics/app-usage-events-react/compare/v1.1.0...v1.1.1) (2023-07-25)


### Bug Fixes

* **practs:** bump best practs for faster cicd ([b9a26fe](https://github.com/mhetrics/app-usage-events-react/commit/b9a26fe8c1152a4c42e082788beae7807c895323))

## [1.1.0](https://github.com/mhetrics/app-usage-events-emitter-react/compare/v1.0.1...v1.1.0) (2023-07-25)


### Features

* **observation:** add capture observation event method ([9b820e6](https://github.com/mhetrics/app-usage-events-emitter-react/commit/9b820e63b703811fe1446110db6a56fa592f9bad))


### Bug Fixes

* **name:** rename package to drop emitter suffix ([0666dbb](https://github.com/mhetrics/app-usage-events-emitter-react/commit/0666dbbaa3558011a8ed26ba8e39cd39132d37ab))

## [1.0.1](https://github.com/mhetrics/app-usage-events-emitter-react/compare/v1.0.0...v1.0.1) (2023-07-16)


### Bug Fixes

* **pkg:** export domain objects ([c89b41c](https://github.com/mhetrics/app-usage-events-emitter-react/commit/c89b41c1daed103c4f8fdb6ef3fc91fcc3b6114c))

## 1.0.0 (2023-07-16)


### Features

* **init:** initialize based on simple-async-tasks ([946e575](https://github.com/mhetrics/app-usage-events-react/commit/946e575874cdcdb3deee4b11c662a0a5e133814a))
