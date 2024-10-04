const AthleteInfoDAO = require("../../dao/athleteInfoDao");

async function getAthleteInfo(req, res) {
  try {
    const athleteInfo = await AthleteInfoDAO.getAthleteInfoByUserId(req.params.userId);
    if (!athleteInfo) {
      return res.status(404).json({ message: "Athlete information not found" });
    }
    res.status(200).json(athleteInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = getAthleteInfo;
