//로그아웃
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');


router.post('/', function(req, res, next) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write("success");
  res.end();
});
module.exports = router;
