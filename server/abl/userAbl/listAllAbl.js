// implement abl
const UserDao = require("../../dao/userDao");
const path = require("path");

let dao = new UserDao();

async function ListAllAbl(req, res) {
  const userId = req.params.id;
  if (!user || user.role !== "admin") {
    return res.status(403).json({ error: "Unauthorized: Only admins can list all users." });
  }
  const user = await dao.list();

  res.json(user);
}

module.exports = ListAllAbl;
