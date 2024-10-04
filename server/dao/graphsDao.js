const GraphsModel = require("../models/graphsModel");

class GraphsDAO {
  async createGraph(data) {
    const newGraph = new GraphsModel(data);
    return await newGraph.save();
  }

  async getGraphsByAthlete(athleteId) {
    return await GraphsModel.find({ athleteId });
  }

  async getGraphById(id) {
    return await GraphsModel.findById(id);
  }

  async updateGraph(id, data) {
    return await GraphsModel.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteGraph(id) {
    return await GraphsModel.findByIdAndDelete(id);
  }
}

module.exports = new GraphsDAO();
