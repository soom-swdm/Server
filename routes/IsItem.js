//아이템 존재여부
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Realm= require('./items');
router.use(bodyParser.urlencoded({extended: true}));

router.post('/', function(req, res, next) {
  let item = IRealm.objects('item').filtered(
    'name= "'+req.body['item']+'"');
  let info = new Object();
  if(item.length==0){
    info.message= "fail";
  }else{
    info.message= "success";
  }
  var json = JSON.stringify(info);
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.json(json);
  res.end();
});
module.exports = router;
