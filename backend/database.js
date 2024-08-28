const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectionString = process.env.CONNECTIONSTRING;

if (!connectionString) {
  console.error('The connection string is not defined in the environment variables');
  process.exit(1);
}

mongoose
  .connect(connectionString)  // Remove deprecated options
  .catch(error => {
    console.log(`Database connection refused: ${error}`);
    process.exit(2);
  });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log("Connected to the database!");
});

module.exports = db;
