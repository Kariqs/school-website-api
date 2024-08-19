const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const adminRoutes = require("../routes/admin.routes");
const CORS = require("../middlewares/cors.middleware");

const app = express();

app.use(CORS.cors);
app.use(bodyParser.json());
app.use("/admin", adminRoutes);

const requestListener = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/school"
    );
    app.listen(8080);
  } catch (error) {
    console.log(error);
  }
};
requestListener();
