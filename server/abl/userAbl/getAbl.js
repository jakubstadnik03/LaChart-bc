const UserDao = require("../../dao/userDao");
const path = require("path");

let dao = new UserDao();



async function GetAbl(req, res) {
  const user = await dao.get(req.user.id);
  if (user) {
    res.json(user);
  } else {
    res.status(400).json({ error: "User does not exist" });
  }
}

module.exports = GetAbl;
