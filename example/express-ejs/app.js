'use strict';

const path = require('path')
    , express = require('express')
    , app = express()
    , port = 3000
    , assets = require('../../index')
    , assetPath = path.join(__dirname, 'public');

app.use('/public', express.static(assetPath));
app.use(assets('/public', assetPath));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index'));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log('To down the server: ctrl + c');
});
