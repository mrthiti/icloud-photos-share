# icloud-photos-share

[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-downloads-url]
[![MIT License][license-image]][license-url]
[![Coverage Status][coveralls-image]][coveralls-url]

icloud-photos-share it make for retrieve information of share album of icloud photos that use for display on your website.

*Support only nodejs

## How it work

Use `Token` from Photos Share Album.

![](docs/images/how-it-work1.jpeg)

Then retrieve information of share album of icloud photos to display on your website.

![](docs/images/how-it-work2.jpeg)

## Using

Install

```bash
npm install icloud-photos-share
```

For CommonJS (require)

```javascript
const { icloudPhotosShare } = require("icloud-photos-share");

(async () => {
  const album = await icloudPhotosShare("B1AG6XBub2QnCol"); // B1AG6XBub2QnCol is Token from Photos Share Album you wont to get information
  console.log(album);
})();
```

For ES modules (import)

```javascript
import { icloudPhotosShare } from "icloud-photos-share";

(async () => {
  const album = await icloudPhotosShare("B1AG6XBub2QnCol"); // B1AG6XBub2QnCol is Token from Photos Share Album you wont to get information
  console.log(album);
})();
```

For TypeScript

```TypeScript
import { icloudPhotosShare, type IcloudPhotosShareResponse } from 'icloud-photos-share';

(async () => {
    const album:IcloudPhotosShareResponse   = await icloudPhotosShare("B1AG6XBub2QnCol"); // B1AG6XBub2QnCol is Token from Photos Share Album you wont to get information
    console.log(album);
})()
```

## Example response data

```json
{
  "error": false,
  "data": {
    "photos": [
      {
        "derivatives": {
          "342": {
            "fileSize": "71512",
            "checksum": "010155a3b2d3e6b43c5f41eb2d5f2f7f1a7ff8dbc3",
            "width": "342",
            "height": "257",
            "mediaUrl": "https://cvws.icloud-content.com/S/AQFVo7LT5rQ8X0HrLV8vfxp_-NvD/IMG_5998.JPG?o=AvhKt81kgjTyZLnsyQ-y_KbFmZXh2okUE5k70qGdBh7J&v=1&z=https%3A%2F%2Fp72-content.icloud.com%3A443&x=1&a=CAognilHykAdaxQk0p6ydZh7KLm1weQT0XK0UTu1DyOzWFgSaRDLvLTM6TEYy9PH0ekxIgEAUgR_-NvDaidFKs1OkdNIMh0ul9DADwX7nRwIit2DMcbdeGhByIWcELQlv5TdDCpyJ9ezRWGFvJcb3PUZfmxbNq-Ef1tofYO8aKEGMX-Gsa65VgsBCOSjuQ&e=1711983946&r=710d163b-d664-486a-b914-e038783b68ac-6&s=SyW9QMZ_CnD-_OLZ40y7Aga4wOg"
          },
          "2049": {
            "fileSize": "841843",
            "checksum": "01af80f3a0d16df5dc075e3a6cd8944bb60124ef26",
            "width": "2049",
            "height": "1537",
            "mediaUrl": "https://cvws.icloud-content.com/S/Aa-A86DRbfXcB146bNiUS7YBJO8m/IMG_5998.JPG?o=AoS_P39ZwptYSDz3zwubYCSfA-m-6fURFmgxMH7rLmh9&v=1&z=https%3A%2F%2Fp72-content.icloud.com%3A443&x=1&a=CAog2jnZyJZy8gbqZGwwQgATZfelNwzztmD8bg2pth9xrwYSaRDKvLTM6TEYytPH0ekxIgEAUgQBJO8maiejjtHiXZI7yyoHTUPuQENWV1BsbQWZC62eYOPKz3TX8XdUeAUJb5JyJ8qrc4jWawS7L4YVA8BOfx6QypYkttlfxtG2CQGuoHFw0OMbJT1afA&e=1711983946&r=710d163b-d664-486a-b914-e038783b68ac-1&s=kXgC0kP3uxxv5P5VfAFWvJvSyr4"
          }
        }
      },
      {
        "derivatives": {
          "342": {
            "fileSize": "61439",
            "checksum": "013f022c1e666124c5248aa77009399e557e7838a6",
            "width": "257",
            "height": "342",
            "mediaUrl": "https://cvws.icloud-content.com/S/AT8CLB5mYSTFJIqncAk5nlV-eDim/IMG_6065.JPG?o=AjvGWaCNHUMrsuAzuwwxcXmRqNEgrBRK3n9Dwxo8e3wX&v=1&z=https%3A%2F%2Fp72-content.icloud.com%3A443&x=1&a=CAogEDZvIT1H4D76f7tvs48S2vgdhLcyZmIFoJ-4vZR1fw8SaRDLvLTM6TEYy9PH0ekxIgEAUgR-eDimaicUyuJ1KZ0StLM7t9xTVrS7X5pFNKdSsTzd82EFBpS8sh9cts26dDVyJz_WwxpppSsczIYFN4_PkzolB9juL1nQqwLnx_lbUvkdnWP2lvx-WA&e=1711983946&r=710d163b-d664-486a-b914-e038783b68ac-4&s=VqbCwZEsUNfbajWu_6Uc5veMd8Y"
          },
          "2049": {
            "fileSize": "511195",
            "checksum": "0100e02b73a2a16fb83b128d362517c8ccfccfbb7e",
            "width": "1537",
            "height": "2049",
            "mediaUrl": "https://cvws.icloud-content.com/S/AQDgK3OioW-4OxKNNiUXyMz8z7t-/IMG_6065.JPG?o=AvvXM-4cDPiy80xA2wT8CWWjLPBG_ltPtvPjCdma6hZ7&v=1&z=https%3A%2F%2Fp72-content.icloud.com%3A443&x=1&a=CAoguw--6XZ7AsncLkoXT26Z2RY4XMUaJ-JoEMymUZED3OoSaRDLvLTM6TEYy9PH0ekxIgEAUgT8z7t-aif3GomNMs0W0hyJBeWh3RR2_vVY9T2rMi-biMyGFiodc84gfE45FPJyJ7STchsAyKdH3NyJnk1FnBZIK11UWqmLAMRKPcSAAo1GrI3KP3y2Lg&e=1711983946&r=710d163b-d664-486a-b914-e038783b68ac-2&s=ZxhoEzl2b-XxsSVPhg4E9iV54cw"
          }
        }
      },
      {
        "derivatives": {
          "342": {
            "fileSize": "72134",
            "checksum": "010c836eb0185807668402fd48a32a3d0e740fe35a",
            "width": "342",
            "height": "257",
            "mediaUrl": "https://cvws.icloud-content.com/S/AQyDbrAYWAdmhAL9SKMqPQ50D-Na/IMG_6067.JPG?o=AtY8cLBEK_yoqlKLTY_uC5LN38kFWhg-Mfl8rTJqesiF&v=1&z=https%3A%2F%2Fp72-content.icloud.com%3A443&x=1&a=CAogGsDUyWteoqWpSdHzV_PhIQTbxC0QSG8pEs-DycKR-woSaRDLvLTM6TEYy9PH0ekxIgEAUgR0D-Naaic_wex6Sybx-fofUX34lcQxLSAofWc3UODuudrO-YtZBKX_WEKAPlxyJyrpwqAl8-tsaR2Dvyw-7jGgoOHTL9_swklCpKAoWH23AtSuTPTs9g&e=1711983946&r=710d163b-d664-486a-b914-e038783b68ac-3&s=xEgoqvSX64aT4jsha4VtKQVYg3w"
          },
          "2049": {
            "fileSize": "1047754",
            "checksum": "0193e35d2b601f9cdac8c54673ce55e86e0fd38e05",
            "width": "2049",
            "height": "1537",
            "mediaUrl": "https://cvws.icloud-content.com/S/AZPjXStgH5zayMVGc85V6G4P044F/IMG_6067.JPG?o=At9tR40AWpgyBBZ3QCl8jZf1go4mlr4ONT5Kakb6mTcn&v=1&z=https%3A%2F%2Fp72-content.icloud.com%3A443&x=1&a=CAogLTG3D0bauZTjfhAiJLgRGqKQk2QdHkjRa6HwSCRRrlgSaRDLvLTM6TEYy9PH0ekxIgEAUgQP044Faicq6xD4laEHW3PDjtVlK3lOWv_sJGDwTk8cVXoblJwqBwdk8xuI1WVyJ0a6zmB5TIQJldToWppN4kHLtVEHk_IRmYPJmO6drE2Xm4OFBXvs2Q&e=1711983946&r=710d163b-d664-486a-b914-e038783b68ac-5&s=CpJsvJI4V1kQ9vi7yRAfX6JL04k"
          }
        }
      }
    ]
  }
}
```

## License

icloud-photos-share is freely distributable under the terms of the [MIT license][license-url].

[npm-url]: https://www.npmjs.com/package/icloud-photos-share
[npm-version-image]: https://img.shields.io/npm/v/icloud-photos-share.svg?style=flat
[npm-downloads-image]: https://img.shields.io/npm/dm/icloud-photos-share.svg?style=flat
[npm-downloads-url]: https://npmcharts.com/compare/icloud-photos-share?minimal=true
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE
[coveralls-image]: https://coveralls.io/repos/mrthiti/icloud-photos-share/badge.svg
[coveralls-url]: https://coveralls.io/r/mrthiti/icloud-photos-share
