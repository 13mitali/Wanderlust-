const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});   // clears old data
  await Listing.insertMany(initData.data); // <-- use initData directly if it's an array
  console.log(" Data was initialized");
  mongoose.connection.close();    // close connection after done
};

initDB();
