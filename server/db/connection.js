const mongoose = require("mongoose");
require("dotenv").config();
const DB = process.env.DATABASE;

mongoose.connect(DB, {
     // useNewUrlParser: true,
     // useUnifiedTopology: true
})
.then(() => console.log("Database connected successfully"))
.catch((error) => console.log("Error: " + error.message));
