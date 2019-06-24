//로그아웃
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');


router.post('/', function(req, res, next) {
  let info = new Object();
  info.message= "success";
  var json = JSON.stringify(info);
  res.json(json);
  res.end();
});
module.exports = router;
