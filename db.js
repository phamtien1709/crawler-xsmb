const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('database4.json');
const db = low(adapter);

db.defaults({ prizes: [] }).write();

module.exports = db;