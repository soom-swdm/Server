var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Realm= require('./items');
router.use(bodyParser.urlencoded({extended: true}));
//sign address
router.get('/', function(req, res, next) {
  let list=Realm.objects('item').sorted('ID');
  res.render('item', {list:list});
});
//sign address shouldn't access post
router.post('/', function(req, res, next) {
  Realm.write(() => {
    Realm.create('item', {
      ID: req.body['ID'],
      name: req.body['name'],
      category: req.body['category'],
      price: parseInt(req.body['price']),
      persent: parseInt(req.body['persent']),
    },true);
  });
  let list=Realm.objects('item').sorted('ID');
  res.render('item', {list:list});
});
module.exports = router;
