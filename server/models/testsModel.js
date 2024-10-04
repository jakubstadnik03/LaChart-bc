const mongoose = require("mongoose");

const testsSchema = new mongoose.Schema({
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
  bikeType: {
    type: String,
  },
  poolLength: {
    type: String,
  },
  terrain: {
    type: String,
  },
  description: {
    type: String,
  },
  weather: {
    type: String,
  },
  indoorOutdoor: {
    type: String,
  },
  testings: [
    {
      power: Number,
      heartRate: Number,
      minutes: String,
      effort: Number,
      lactate: Number,
    },
  ],
}, { timestamps: true });

const Tests = mongoose.model("Tests", testsSchema);

module.exports = Tests;
