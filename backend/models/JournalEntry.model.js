const { Schema, model } = require("mongoose");

const journalEntrySchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const JournalEntry = model("JournalEntry", journalEntrySchema);

module.exports = JournalEntry;
