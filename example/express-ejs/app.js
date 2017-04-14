const expresss = require('express');
const app = expresss();
const port = 3000;

app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('index'))

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
  console.log('To down the server: ctrl + c')
})
