const TestsModel = require("../models/testsModel");

class TestingDAO {
  async createTesting(data) {
    const newTesting = new TestsModel(data);
    return await newTesting.save();
  }

  async getTestingsByAthlete(athleteId) {
    return await TestsModel.find({ athleteId });
  }

  async getTestingById(id) {
    return await TestsModel.findById(id);
  }

  async updateTesting(id, data) {
    return await TestsModel.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteTesting(id) {
    return await TestsModel.findByIdAndDelete(id);
  }
}

module.exports = new TestingDAO();
