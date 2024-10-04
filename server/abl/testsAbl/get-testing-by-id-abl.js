const TestingDAO = require("../../dao/testingDAO");

async function getTestingById(req, res) {
  try {
    const testing = await TestingDAO.getTestingById(req.params.id);
    if (!testing) {
      return res.status(404).json({ message: "Testing not found" });
    }
    res.status(200).json(testing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = getTestingById;
