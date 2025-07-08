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

  // 5. Deleting Documents
  const deleteOne = await users.deleteOne({ name: "Miki", age: 28 });
  const deleteOneTasks = await tasks.deleteOne({ _id: new ObjectId('686cebf6853061194852a84e')});
  const deleteMany = await users.deleteMany({ age: 28 });
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
