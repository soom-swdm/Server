//유저 정보 갱신
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var URealm= require('./users');
var TRealm= require('./tiers');
router.use(bodyParser.urlencoded({extended: true}));

router.post('/', function(req, res, next) {
  let user = URealm.objects('user').filtered(
    'ID= "'+req.body['ID']+'"');
  let tier = TRealm.objects('tier').filtered(
    'ID= "'+user[0].tier+'"');
  let json=JSON.parse(JSON.stringify(user[0]));
  json.tier=tier[0].name.toString();
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.json(json);
  res.end();
});
module.exports = router;
