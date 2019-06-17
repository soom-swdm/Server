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
  for(var i=0;i<history.length;i++){
    let item = IRealm.objects('item').filtered(
      'ID= "'+history[i].item+'"');
    history[i].item=item[0].name;
  }
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.json(history);
  res.end();
});
module.exports = router;
