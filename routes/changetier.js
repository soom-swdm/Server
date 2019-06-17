var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Realm= require('./tiers');
router.use(bodyParser.urlencoded({extended: true}));
//sign address
router.get('/', function(req, res, next) {
  let list=Realm.objects('tier').sorted('ID');
  res.render('tier', {list:list});
});
//sign address shouldn't access post
router.post('/', function(req, res, next) {
  Realm.write(() => {
    Realm.create('tier', {
      ID: req.body['ID'],
      name: req.body['name'],
      persent: parseInt(req.body['persent']),
    },true);
  });
  let list=Realm.objects('tier').sorted('ID');
  res.render('tier', {list:list});
});
module.exports = router;
