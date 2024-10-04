const TestingDAO = require("../../dao/testingDAO");

async function deleteTesting(req, res) {
  try {
    const deletedTesting = await TestingDAO.deleteTesting(req.params.id);
    if (!deletedTesting) {
      return res.status(404).json({ message: "Testing not found" });
    }
    res.status(200).json({ message: "Testing deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = deleteTesting;
