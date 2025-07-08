// // CRUD create read update delete

const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "task-manager";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  const users = db.collection("users");
  const tasks = db.collection("tasks");
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
