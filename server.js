require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//Mongoose Connection to the MongoDB URL inside the .env file
mongoose.connect(process.env.DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));
app.use(cors());
app.use(express.json());

//Use routes
// app.use("/order", require("./routes/OrderRoute"));
// app.use("/restaurant", require("./routes/RestaurantRoute"));
app.use("/api/review", require("./routes/api/ReviewRoute"));
app.use("/api/user", require("./routes/api/UserRoute"));

//Start Server and listen to PORT
app.listen(5000, () => console.log(`Server is listning on port 5000...`));
