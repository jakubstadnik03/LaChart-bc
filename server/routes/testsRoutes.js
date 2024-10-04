const express = require("express");
const router = express.Router();
const CreateTestingAbl = require("../abl/lactate-abl/create-testing-abl");
const GetTestingsByAthleteAbl = require("../abl/lactate-abl/get-testings-by-athlete-abl");
const GetTestingByIdAbl = require("../abl/lactate-abl/get-testing-by-id-abl");
const UpdateTestingAbl = require("../abl/lactate-abl/update-testing-abl");
const DeleteTestingAbl = require("../abl/lactate-abl/delete-testing-abl");
const verifyToken = require("../middleware/verifyToken");
// Create a new testing
router.post("/", verifyToken, reateTestingAbl);

// Get all testings for an athlete
router.get("/athlete/:athleteId", verifyToken, GetTestingsByAthleteAbl);

// Get a specific testing by ID
router.get("/:id", verifyToken, GetTestingByIdAbl);

// Update a testing
router.put("/:id", verifyToken, UpdateTestingAbl);

// Delete a testing
router.delete("/:id", verifyToken, DeleteTestingAbl);

module.exports = router;
