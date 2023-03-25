migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("brzjpmgidbqrjay")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zblwe0wz",
    "name": "reminder",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("brzjpmgidbqrjay")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zblwe0wz",
    "name": "reminder",
    "type": "bool",
    "required": true,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
