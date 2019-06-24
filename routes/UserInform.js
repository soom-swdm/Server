//유저 정보 갱신
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var URealm= require('./users');
var TRealm= require('./tiers');
let Schema = {
  name: 'user',
  primaryKey: 'ID',
  properties: {
    ID: 'string',
    name: 'string',
    password: 'string',
    tier: 'string',
    point: 'int',
    accumulate: 'int'
  }
};
router.use(bodyParser.urlencoded({extended: true}));

router.post('/', function(req, res, next) {
  let user = URealm.objects('user').filtered(
    'ID= "'+req.body['ID']+'"');
  let tier = TRealm.objects('tier').filtered(
    'ID= "'+user[0].tier+'"');
  let info = new Object();
  info.ID = user[0].ID;
  info.name = user[0].name;
  info.password = user[0].password;
  info.tier = tier[0].name;
  info.point = user[0].point;
  info.accumulate = user[0].accumulate;
  var json = JSON.stringify(info);
  res.json(json);
  res.end();
});
module.exports = router;
