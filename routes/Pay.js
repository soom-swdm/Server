//결제
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var URealm= require('./users');
var HRealm= require('./history');
var IRealm= require('./items');
var TRealm= require('./tiers');
router.use(bodyParser.urlencoded({extended: true}));
//ID item Date flag amount number
router.post('/', function(req, res, next) {
  let user = Realm.objects('user').filtered(
    'ID= "'+req.body['user']+'"');
  let item = IRealm.objects('item').filtered(
    'ID= "'+req.body['item']+'"');
  let tier = TRealm.objects('tier').filtered(
    'ID= "'+user[0].tier+'"');
  if(parseInt(req.body['flag'])==0){
    //적립
    URealm.write(() => {
      URealm.create('user', {
        ID: req.body['user'],
        point: user[0].point+(parseInt(req.body['amount'])*parseInt(req.body['number'])*(item[0].persent+tier[0].persent)/100),
        accumulate: user[0].accumulate+(parseInt(req.body['amount'])*parseInt(req.body['number'])*(item[0].persent+tier[0].persent)/100)
      },true);
    });
    //티어 승급 추가
    if(user[0].accumulate>10000&&parseInt(user[0].tier)==0){
      URealm.write(() => {
        URealm.create('user', {
          ID: req.body['user'],
          tier: (parseInt(user[0].tier)+1).toString()
        },true);
      });
    }
    if(user[0].accumulate>50000&&parseInt(user[0].tier)==1){
      URealm.write(() => {
        URealm.create('user', {
          ID: req.body['user'],
          tier: (parseInt(user[0].tier)+1).toString()
        },true);
      });
    }
    if(user[0].accumulate>100000&&parseInt(user[0].tier)==2){
      URealm.write(() => {
        URealm.create('user', {
          ID: req.body['user'],
          tier: (parseInt(user[0].tier)+1).toString()
        },true);
      });
    }
  }else{
    //소모
    URealm.write(() => {
      URealm.create('user', {
        ID: req.body['user'],
        point: user[0].point-(parseInt(req.body['amount'])*parseInt(req.body['number'])),
      },true);
    });
  }
  //히스토리 추가
  let point=parseInt(req.body['amount'])*parseInt(req.body['number']);
  point=(parseInt(req.body['flag'])==0)?point*(item[0].persent+tier[0].persent)/100:point;
  HRealm.write(() => {
    HRealm.create('history', {
      user: req.body['user'],
      item: item[0].ID,
      amount: point,
      flag: parseInt(req.body['flag']),
      date: new Date(req.body['date'])
    });
  });
  let info = new Object();
  info.message= "success";
  var json = JSON.stringify(info);
  res.json(json);
  res.end();
});
module.exports = router;
