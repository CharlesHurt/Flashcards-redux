var express = require('express');
var path = require('path')

var router = express.Router();
var INDEX_HTML = path.join(__dirname, 'index.html')
path.resolve(__dirname, 'public', 'index.html')

console.log(INDEX_HTML);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(INDEX_HTML)
  //res.render('index', { title: 'Express' });
});

module.exports = router;
