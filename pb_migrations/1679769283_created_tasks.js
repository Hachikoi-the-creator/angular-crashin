migrate((db) => {
  const collection = new Collection({
    "id": "brzjpmgidbqrjay",
    "created": "2023-03-25 18:34:43.357Z",
    "updated": "2023-03-25 18:34:43.357Z",
    "name": "tasks",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zblwe0wz",
        "name": "reminder",
        "type": "bool",
        "required": true,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "94s0mrya",
        "name": "text",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 3,
          "max": 300,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "xll7lnde",
        "name": "date",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 3,
          "max": 50,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("brzjpmgidbqrjay");

  return dao.deleteCollection(collection);
})
