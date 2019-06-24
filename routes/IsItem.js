//아이템 존재여부
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Realm= require('./items');
router.use(bodyParser.urlencoded({extended: true}));

router.post('/', function(req, res, next) {
  let item = Realm.objects('item').filtered(
    'ID= "'+req.body['ID']+'"');
  let info = new Object();
  if(item.length==0){
    info.message= "fail";
  }else{
    info.message= "success";
  }
  res.json(info);
  res.end();
});
module.exports = router;
