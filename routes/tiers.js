var Realm = require('realm');
var Key = new Int8Array(64);
let Schema = {
  name: 'tier',
  primaryKey: 'ID',
  properties: {
    ID: 'string',
    name: 'string',
    persent: 'int'
  }
};
var DATA = new Realm({
  path: 'tier.realm',
  schema: [Schema],
  encryptionKey: Key,
  schemaVersion: 1,
  migration: function(oldRealm, newRealm) {
    if (oldRealm.schemaVersion < 1) {
      var oldObjects = oldRealm.objects('tier');
      var newObjects = newRealm.objects('tier');
      for (var i = 0; i < oldObjects.length; i++) {
        newObjects[i].name = oldObjects[i].firstName + ' ' + oldObjects[i].lastName;
      }
    }
  }
});

module.exports = DATA;
