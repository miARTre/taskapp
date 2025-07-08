// // CRUD create read update delete

const { MongoClient, ObjectId } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "task-manager";

// 2. The ObjectId
// const id = new ObjectId();
// console.log(id.id.length);
// console.log(id.toHexString().length)
// console.log(id.getTimestamp());

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  // 3. Querying Documents
  //   const findResult = await users.findOne({_id: new ObjectId('686ce97e19ae2bb635fd60ef')});
  //   console.log("Found documents => ", findResult);

  //   const findResultAll = await users.find({ age: 27 }).toArray();
  //   console.log("Found documentsAll => ", findResultAll);

  //   const findResultAllCount = await users.find({age: 27}).count();
  //   console.log("Found documentsAll => ", findResultAll); => deprecated

  //   const count = await users.countDocuments({ age: 27 });
  //   console.log(" Total number of documents:", count);

  const findResult = await tasks.findOne({
    _id: new ObjectId("686cebf6853061194852a84f"),
  });
  console.log("Found documents => ", findResult);

  const findResultAll = await tasks.find({ completed: true }).toArray();
  console.log("Found documentsAll => ", findResultAll);
}

// 1. Inserting Documennt

//   const users = db.collection("users");
//   const tasks = db.collection("tasks");

//   const result = await tasks.insertMany([
//     { description: "Fix login bug", completed: true },
//     { description: "Deploy to production", completed: true },
//     { description: "Write unit tests", completed: false },
//   ]);

//   console.log("Inserted IDs:", result.insertedIds);

//   const result = await users.insertOne({
//     _id: id,
//     name: "Gogi",
//     age: 30,
//   });

//   const result = await collection.insertMany([
//     { name: "Mire", age: 27 },
//     { name: "Hare", age: 32 },
//   ]);

// console.log("Inserted IDs:", result.insertedIds);

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
