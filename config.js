const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const { DB_PASSWORD } = process.env;

const connectDB = () => {
  return mongoose
    .connect(
      `mongodb://node-rest-api:${DB_PASSWORD}@node-rest-api.mongo.cosmos.azure.com:10255/?ssl=true&appName=@node-rest-api@&retryWrites=false`,
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log(`database connected successfully`))
    .catch((err) => console.log(err.message));
};

module.exports = connectDB;
