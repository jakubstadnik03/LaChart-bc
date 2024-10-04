const mongoose = require("mongoose");

const graphsSchema = new mongoose.Schema({
  athleteId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  date: {
    type: Date,
    required: true,
  },
  sport: {
    type: String,
    required: true,
  },
  indoorOutdoor: {
    type: String,
  },
  weight: {
    type: Number,
  },
  bikeType: {
    type: String,
  },
  description: {
    type: String,
  },
  points: [
    {
      power: Number,
      lactate: Number,
      heartRate: Number,
    },
  ],
}, { timestamps: true });

const Graphs = mongoose.model("Graphs", graphsSchema);

module.exports = Graphs;
