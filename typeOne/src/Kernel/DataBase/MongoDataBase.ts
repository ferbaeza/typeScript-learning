import mongoose from 'mongoose';

import { DATABASE_USER, DATABASE_PASSWORD, } from '../Config/App';

const uriMonGo = `mongodb+srv://${DATABASE_USER}:${DATABASE_PASSWORD}@cluster0.3c11pgd.mongodb.net/`


async function connect() {
  console.log("Connecting to MongoDB..." + DATABASE_USER);
  await mongoose.connect(uriMonGo, {
  }).then(() => {
    console.log("You successfully connected to MongoDB!");
  }).catch((error) => {
    console.log("Error connecting to MongoDB: ", error);
  });

}

async function disconnect() {
  await mongoose.disconnect().then(() => {
    console.log("You successfully disconnected from MongoDB!");
  }).catch((error) => {
    console.log("Error disconnecting from MongoDB: ", error);
  });
}

export { connect, disconnect };