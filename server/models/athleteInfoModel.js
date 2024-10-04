const mongoose = require("mongoose");

const athleteInfoSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  height: {
    type: Number, // in cm
  },
  weight: {
    type: Number, // in kg
  },
  age: {
    type: Number,
  },
  sport: {
    type: String, // athlete's primary sport
  },
  lactateThreshold: {
    type: Number, // lactate threshold value
  },
  maxHeartRate: {
    type: Number, // maximum heart rate
  },
  restingHeartRate: {
    type: Number, // resting heart rate
  },
  personalBest: {
    type: String, // e.g. Marathon time, 5k time, etc.
  },
  description: {
    type: String, // additional notes about the athlete
  }
}, { timestamps: true });

const AthleteInfo = mongoose.model("AthleteInfo", athleteInfoSchema);

module.exports = AthleteInfo;
