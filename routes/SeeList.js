//숨활동소개
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Realm= require('./items');
router.use(bodyParser.urlencoded({extended: true}));

router.post('/', function(req, res, next) {
  let item = Realm.objects('item');
  res.json(item);
  res.end();
});
module.exports = router;
