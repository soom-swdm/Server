var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Realm= require('./users');
router.use(bodyParser.urlencoded({extended: true}));

router.post('/', function(req, res, next) {
  let user=Realm.objects('user').filtered(
    'ID= "'+req.body['ID']+'"');
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
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("success");
  }else{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("already exist");
  }
  res.end();
});
module.exports = router;
