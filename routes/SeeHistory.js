//숨활동내역
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var HRealm= require('./history');
var IRealm= require('./items');
router.use(bodyParser.urlencoded({extended: true}));

router.post('/', function(req, res, next) {
  let history = HRealm.objects('history').filtered(
    'user= "'+req.body['user']+'"');
  let H = new Object();
  let arr = new Array();
  for(var i=0;i<history.length;i++){
    let item = IRealm.objects('item').filtered(
      'ID= "'+history[i].item+'"');
    let info = new Object();
    info.user = history[i].user;
    info.item = item[0].name;
    info.amount = history[i].amount;
    info.flag = history[i].flag;
    info.date = history[i].date;
    arr.push(info);
  }
  H.history = arr;
  res.json(H);
  res.end();
});
module.exports = router;
