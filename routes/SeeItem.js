//숨활동소개
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Realm= require('./items');
router.use(bodyParser.urlencoded({extended: true}));

router.post('/', function(req, res, next) {
  let item = Realm.objects('item').filtered(
    'ID= "'+req.body['ID']+'"');
  if(item.length==0){
    let info = new Object();
    info.message= "dosen't exist";
    var json = JSON.stringify(info);
    res.json(info);
  }else{
    res.json(item[0]);
  }
  res.end();
});
module.exports = router;
