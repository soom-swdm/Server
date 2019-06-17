var Realm = require('realm');
var Key = new Int8Array(64);
let Schema = {
  name: 'history',
  properties: {
    user: 'string',
    item: 'string',
    amount: 'int',
    flag: 'int',
    date: 'Date'
  }
};
var DATA = new Realm({
  path: 'history.realm',
  schema: [Schema],
  encryptionKey: Key,
  schemaVersion: 1,
  migration: function(oldRealm, newRealm) {
    if (oldRealm.schemaVersion < 1) {
      var oldObjects = oldRealm.objects('history');
      var newObjects = newRealm.objects('history');
      for (var i = 0; i < oldObjects.length; i++) {
        newObjects[i].name = oldObjects[i].firstName + ' ' + oldObjects[i].lastName;
      }
    }
  }
});

module.exports = DATA;
