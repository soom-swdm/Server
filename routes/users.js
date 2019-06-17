var Realm = require('realm');
var Key = new Int8Array(64);
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
var DATA = new Realm({
  path: 'user.realm',
  schema: [Schema],
  encryptionKey: Key,
  schemaVersion: 1,
  migration: function(oldRealm, newRealm) {
    if (oldRealm.schemaVersion < 1) {
      var oldObjects = oldRealm.objects('user');
      var newObjects = newRealm.objects('user');
      for (var i = 0; i < oldObjects.length; i++) {
        newObjects[i].name = oldObjects[i].firstName + ' ' + oldObjects[i].lastName;
      }
    }
  }
});

module.exports = DATA;
