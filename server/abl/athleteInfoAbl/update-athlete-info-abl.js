const AthleteInfoDAO = require("../../dao/athleteInfoDao");

async function updateAthleteInfo(req, res) {
  try {
    const updatedAthleteInfo = await AthleteInfoDAO.updateAthleteInfo(req.params.userId, req.body);
    if (!updatedAthleteInfo) {
      return res.status(404).json({ message: "Athlete information not found" });
    }
    res.status(200).json(updatedAthleteInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = updateAthleteInfo;
