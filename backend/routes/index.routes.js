const express = require("express");
const router = express.Router();
const JournalEntry = require("../models/JournalEntry.model");

// Create a new journal entry
router.post("/journal-entries", async (req, res) => {
  try {
    const { title, content } = req.body;
    const entry = new JournalEntry({ title, content });
    const savedEntry = await entry.save();
    res.json(savedEntry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create journal entry" });
  }
});

// Get all journal entries
router.get("/journal-entries", async (req, res) => {
  try {
    const entries = await JournalEntry.find();
    res.json(entries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch journal entries" });
  }
});

// Get a specific journal entry by ID
router.get("/journal-entries/:id", async (req, res) => {
  try {
    const entry = await JournalEntry.findById(req.params.id);
    if (entry) {
      res.json(entry);
    } else {
      res.status(404).json({ error: "Journal entry not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch journal entry" });
  }
});

// Update a journal entry
router.put("/journal-entries/:id", async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedEntry = await JournalEntry.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (updatedEntry) {
      res.json(updatedEntry);
    } else {
      res.status(404).json({ error: "Journal entry not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update journal entry" });
  }
});

// Delete a journal entry
router.delete("/journal-entries/:id", async (req, res) => {
  try {
    const deletedEntry = await JournalEntry.findByIdAndDelete(req.params.id);
    if (deletedEntry) {
      res.sendStatus(204);
    } else {
      res.status(404).json({ error: "Journal entry not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete journal entry" });
  }
});
module.exports = router;
