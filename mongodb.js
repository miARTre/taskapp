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

  const updateAll = await tasks.updateMany(
    { completed: false },
    {
      $set: { completed: true },
    }
  );

  // const update = await users
  //   .updateOne(
  //     { _id: new ObjectId("686ce97e19ae2bb635fd60ef") },
  //     {
  //       // $set: { name: "Miki" },
  //       $inc: { age: 1 },
  //     }
  //   )
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
