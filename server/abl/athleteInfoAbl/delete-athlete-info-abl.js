const AthleteInfoDAO = require("../../dao/athleteInfoDao");

async function deleteAthleteInfo(req, res) {
  try {
    const deletedAthleteInfo = await AthleteInfoDAO.deleteAthleteInfo(req.params.userId);
    if (!deletedAthleteInfo) {
      return res.status(404).json({ message: "Athlete information not found" });
    }
    res.status(200).json({ message: "Athlete information deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = deleteAthleteInfo;
