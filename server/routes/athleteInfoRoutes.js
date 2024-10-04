const express = require("express");
const router = express.Router();
const createAthleteInfoAbl = require("../abl/athleteAbl/create-athlete-info-abl");
const getAthleteInfoAbl = require("../abl/athleteAbl/get-athlete-info-abl");
const updateAthleteInfoAbl = require("../abl/athleteAbl/update-athlete-info-abl");
const deleteAthleteInfoAbl = require("../abl/athleteAbl/delete-athlete-info-abl");
const verifyToken = require("../middleware/verifyToken");

// Create athlete info
router.post("/", verifyToken, createAthleteInfoAbl);

// Get athlete info by userId
router.get("/:userId", verifyToken, getAthleteInfoAbl);

// Update athlete info
router.put("/:userId", verifyToken, updateAthleteInfoAbl);

// Delete athlete info
router.delete("/:userId", verifyToken, deleteAthleteInfoAbl);

module.exports = router;
