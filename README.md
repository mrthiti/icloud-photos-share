# icloud-photos-share

icloud-photos-share it make for retrieve information of share album of icloud photos that use for display on your website.

# Using

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

# Example
