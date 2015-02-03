var fs = require('fs')
  , path = require('path')
  , cs = require('checksum');

module.exports = function(urlPrefix, rootPath) {
  var cache = [];
  var env = process.env.NODE_ENV;

  var checksumify = function(file) {
    if(cache[file]) {
      return cache[file];
    }

    var filePath = path.join(rootPath, file)
      , fileUrl = path.join(urlPrefix, file).replace(/\\/g, '/');

    if(!fs.existsSync(filePath)) {
      return fileUrl;
    }

    var data = fs.readFileSync(filePath);

    cache[file] = fileUrl + '?' + cs(data).substr(0, 10);
    return cache[file];
  };

  return function(req, res, next) {
    res.locals.asset = function(file, prodFile) {
      return checksumify((prodFile && env === 'production') ? prodFile : file);
    };
    next();
  };
};