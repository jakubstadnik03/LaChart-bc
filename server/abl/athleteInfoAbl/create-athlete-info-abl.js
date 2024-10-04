const AthleteInfoDAO = require("../../dao/athleteInfoDao");

async function createAthleteInfo(req, res) {
  try {
    const newAthleteInfo = await AthleteInfoDAO.createAthleteInfo(req.body);
    res.status(201).json(newAthleteInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = createAthleteInfo;
