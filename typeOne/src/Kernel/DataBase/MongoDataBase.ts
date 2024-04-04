const { MongoClient } = require('mongodb');
import { DATABASE_USER, 
    DATABASE_PASSWORD, 
    DATABASE_NAME, 
    DATABASE_COLLECTION } from '../Config/App';

const uri = `mongodb+srv://${DATABASE_USER}:${DATABASE_PASSWORD}@cluster0.3c11pgd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
//mongodb+srv://fbaezahurtado:<password>@cluster0.3c11pgd.mongodb.net/


async function run() {
  try {
    const client = new MongoClient(uri);
    await client.connect();

    const database = client.db(DATABASE_NAME);
    const collection = database.collection(DATABASE_COLLECTION);

    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
