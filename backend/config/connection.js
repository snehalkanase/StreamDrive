const mongoose = require("mongoose");
const URL = process.env.MONGO_URL;
mongoose.set('strictQuery', true);
mongoose
  .connect(URL)
  .then(() => {
    console.log("Database connected successfully");
    connection = mongoose.connection; // Assign mongoose connection to variable
  })
  .catch((err) => {
    console.log(`Database connection error: ${err}`);
    process.exit();
  });
