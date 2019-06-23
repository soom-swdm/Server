//로그인
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Realm= require('./users');
router.use(bodyParser.urlencoded({extended: true}));

router.post('/', function(req, res, next) {
  let user=Realm.objects('user').filtered(
    'ID= "'+req.body['ID']+'"');
  if(user.length==0){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("wrong ID");
  }else{
    user.filtered('password= "'+req.body['password']+'"');
    if(user.length==0){
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write("wrong password");
    }else{
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write("success");
    }
  }
  res.end();
});
module.exports = router;
