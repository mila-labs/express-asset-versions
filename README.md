# express-asset-versions [![NPM version][npm-image]][npm-url]

An [express.js](http://expressjs.com/) middleware and helper to
prepend your static assets with a version string.

## Usage

### Setup

```bash
$ npm install express-asset-versions
```

```javascript
var express = require('express')
  , assets = require('express-asset-versions')
  , app = express();

var assetPath = path.join(__dirname, 'public');
app.use('/public', express.static(assetPath));
app.use(assets('/public', assetPath));

app.listen(3000);
```

### Templates

```
// EJS
<link rel="stylesheet" href="<%= asset('css/stylesheet.css') %>" />
// Jade
link(rel='stylesheet', href=asset('css/stylesheet.css'))
// Swig
<link rel="stylesheet" href="{{ asset('css/stylesheet.css') }}" />

// Result:
<link rel="stylesheet" href="/public/css/stylesheet.css?1f05a21474" />
```

The `asset()` helper takes an optional second parameter to define a file used in
production (`NODE_ENV=production`):

```
<link rel="stylesheet" href="<%= asset('css/stylesheet.css', 'css/stylesheet.min.css') %>" />

// Result:
<link rel="stylesheet" href="/public/css/stylesheet.css?1f05a21474" />     // NODE_ENV=development
<link rel="stylesheet" href="/public/css/stylesheet.min.css?73d57ce89a" /> // NODE_ENV=production
```

[npm-url]: https://npmjs.org/package/express-asset-versions
[npm-image]: https://badge.fury.io/js/express-asset-versions.png
