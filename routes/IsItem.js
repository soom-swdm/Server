//아이템 존재여부
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Realm= require('./items');
router.use(bodyParser.urlencoded({extended: true}));

router.post('/', function(req, res, next) {
  let item = IRealm.objects('item').filtered(
    'name= "'+req.body['item']+'"');
  if(item.length==0){
    res.writeHead(204, {'Content-Type': 'text/plain'});
    res.write("fail");
  }else{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("success");
  }
  res.end();
});
module.exports = router;
