const AthleteInfoModel = require("../models/athleteInfoModel");

class AthleteInfoDAO {
  async createAthleteInfo(data) {
    const newAthleteInfo = new AthleteInfoModel(data);
    return await newAthleteInfo.save();
  }

  async getAthleteInfoByUserId(userId) {
    return await AthleteInfoModel.findOne({ userId });
  }

  async updateAthleteInfo(userId, data) {
    return await AthleteInfoModel.findOneAndUpdate({ userId }, data, { new: true });
  }

  async deleteAthleteInfo(userId) {
    return await AthleteInfoModel.findOneAndDelete({ userId });
  }
}

module.exports = new AthleteInfoDAO();
