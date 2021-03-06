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
    //user create
    Realm.write(() => {
      Realm.create('user', {
        ID: req.body['ID'],
        name: req.body['name'],
        password: req.body['password'],
        tier: '0',
        point: 0,
        accumulate: 0
      });
    });
    info.message= "success";
  }else{
    info.message= "already exist";
  }
  res.json(info);
  res.end();
});
module.exports = router;
