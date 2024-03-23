# icloud-photos-share

[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-downloads-url]
[![MIT License][license-image]][license-url]
[![Coverage Status][coveralls-image]][coveralls-url]

icloud-photos-share it make for retrieve information of share album of icloud photos that use for display on your website.

## Using

Install

```bash
npm install icloud-photos-share
```

For CommonJS (require)

```javascript
const { icloudPhotosShare } = require("icloud-photos-share");

(async () => {
  const album = await icloudPhotosShare("B1AG6XBub2QnCol");
  console.log(album);
})();
```

For ES modules (import)

```javascript
import { icloudPhotosShare } from "icloud-photos-share";

(async () => {
  const album = await icloudPhotosShare("B1AG6XBub2QnCol");
  console.log(album);
})();
```

For TypeScript

```TypeScript
import { icloudPhotosShare, type IcloudPhotosShareResponse } from 'icloud-photos-share';

(async () => {
    const album:IcloudPhotosShareResponse   = await icloudPhotosShare("B1AG6XBub2QnCol");
    console.log(album);
})()
```

## License

icloud-photos-share is freely distributable under the terms of the [MIT license][license-url].

[npm-url]: https://www.npmjs.com/package/icloud-photos-share
[npm-version-image]: https://img.shields.io/npm/v/icloud-photos-share.svg?style=flat
[npm-downloads-image]: https://img.shields.io/npm/dm/icloud-photos-share.svg?style=flat
[npm-downloads-url]: https://npmcharts.com/compare/icloud-photos-share?minimal=true
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE
[coveralls-image]: https://coveralls.io/repos/mrthiti/icloud-photos-share/badge.svg?branch=main
[coveralls-url]: https://coveralls.io/r/mrthiti/icloud-photos-share?branch=main
