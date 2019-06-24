//로그아웃
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');


router.post('/', function(req, res, next) {
  let info = new Object();
  info.message= "success";
  res.json(info);
  res.end();
});
module.exports = router;
