var express = require("express");
var router = express.Router();
const RegisterAbl = require("../abl/userAbl/registerAbl");
const LoginAbl = require("../abl/userAbl/loginAbl");
const GetAbl = require("../abl/userAbl/getAbl");
const ListAll = require("../abl/userAbl/listAllAbl");
const DeleteAbl = require("../abl/userAbl/deleteAbl");
const UpdateAbl = require("../abl/userAbl/updateAbl");
const { blacklistToken } = require("../middleware/authManager");
const verifyToken = require('../middleware/verifyToken'); // Ensure this path is correct

// RESTful route for getting a user by ID
router.get("/get", verifyToken, GetAbl);

// Returns a list of all users
router.get("/", verifyToken, ListAll);

// Registers a new user
router.post("/register", RegisterAbl);

// Logs in as a user
router.post("/login", LoginAbl);

// Logs out the current user
router.post("/logout", verifyToken, (req, res) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (token) {
    blacklistToken(token);
    res.sendStatus(200); // OK - Successfully logged out
  } else {
    res.sendStatus(401); // Unauthorized - Token was not provided or was already invalid
  }
});

// Updates a user by their ID
router.put("/:id", verifyToken, UpdateAbl);

// Deletes a user by their ID
router.delete("/delete/:id", verifyToken, DeleteAbl);

module.exports = router;
