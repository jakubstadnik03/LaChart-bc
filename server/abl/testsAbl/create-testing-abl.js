const TestingDAO = require("../../dao/testingDAO");

async function createTesting(req, res) {
  try {
    const newTesting = await TestingDAO.createTesting(req.body);
    res.status(201).json(newTesting);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = createTesting;
