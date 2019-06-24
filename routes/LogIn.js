//로그인
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Realm= require('./users');
router.use(bodyParser.urlencoded({extended: true}));

router.post('/', function(req, res, next) {
  let user=Realm.objects('user').filtered(
    'ID= "'+req.body['ID']+'"');
  let info = new Object();
  if(user.length==0){
    info.message= "wrong ID";
  }else{
    user.filtered('password= "'+req.body['password']+'"');
    if(user.length==0){
      info.message= "wrong password";
    }else{
      info.message= "success";
    }
  }
  res.json(info);
  res.end();
});
module.exports = router;
