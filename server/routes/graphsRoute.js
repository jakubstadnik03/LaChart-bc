const express = require("express");
const router = express.Router();
const CreateGraphAbl = require("../abl/graph-abl/create-graph-abl");
const GetGraphsByAthleteAbl = require("../abl/graph-abl/get-graphs-by-athlete-abl");
const GetGraphByIdAbl = require("../abl/graph-abl/get-graph-by-id-abl");
const UpdateGraphAbl = require("../abl/graph-abl/update-graph-abl");
const DeleteGraphAbl = require("../abl/graph-abl/delete-graph-abl");
const verifyToken = require("../middleware/verifyToken");

// Create a new graph
router.post("/", verifyToken, CreateGraphAbl);

// Get all graphs for an athlete
router.get("/athlete/:athleteId", verifyToken, GetGraphsByAthleteAbl);

// Get a specific graph by ID
router.get("/:id", verifyToken, GetGraphByIdAbl);

// Update a graph
router.put("/:id", verifyToken, UpdateGraphAbl);

// Delete a graph
router.delete("/:id", verifyToken, DeleteGraphAbl);

module.exports = router;
