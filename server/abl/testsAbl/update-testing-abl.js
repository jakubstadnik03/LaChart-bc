const TestingDAO = require("../../dao/testingDAO");

async function updateTesting(req, res) {
  try {
    const updatedTesting = await TestingDAO.updateTesting(req.params.id, req.body);
    if (!updatedTesting) {
      return res.status(404).json({ message: "Testing not found" });
    }
    res.status(200).json(updatedTesting);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = updateTesting;
