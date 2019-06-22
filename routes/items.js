var Realm = require('realm');
var Key = new Int8Array(64);
let Schema = {
  name: 'item',
  primaryKey: 'ID',
  properties: {
    ID: 'string',
    category: 'string',
    name: 'string',
    persent: 'int'
  }
};
var DATA = new Realm({
  path: 'item.realm',
  schema: [Schema],
  encryptionKey: Key,
  schemaVersion: 2,
  migration: function(oldRealm, newRealm) {
    if (oldRealm.schemaVersion < 2) {
      var oldObjects = oldRealm.objects('item');
      var newObjects = newRealm.objects('item');
      for (var i = 0; i < oldObjects.length; i++) {
        newObjects[i].name = oldObjects[i].firstName + ' ' + oldObjects[i].lastName;
      }
    }
  }
});

module.exports = DATA;
