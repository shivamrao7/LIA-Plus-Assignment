const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");

router.post("/", async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).json({ message: "Feedback submitted!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  const { category, sortBy } = req.query;
  const filter = category ? { category } : {};
  const sort = sortBy === "date" ? { createdAt: -1 } : {};
  const data = await Feedback.find(filter).sort(sort);
  res.json(data);
});

module.exports = router;
