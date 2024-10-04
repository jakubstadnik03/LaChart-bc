const TestingDAO = require("../../dao/testingDAO");

async function getTestingsByAthlete(req, res) {
  try {
    const testings = await TestingDAO.getTestingsByAthlete(req.params.athleteId);
    res.status(200).json(testings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = getTestingsByAthlete;
