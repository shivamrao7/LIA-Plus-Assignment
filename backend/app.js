const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const feedbackRoutes = require("./routes/feedbackRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/user_feedback")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use("/feedback", feedbackRoutes);

app.listen(5000, () => console.log("Server running at http://localhost:5000"));


