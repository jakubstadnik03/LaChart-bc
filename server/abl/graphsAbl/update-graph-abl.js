const GraphsDAO = require("../../dao/graphsDao");

async function updateGraph(req, res) {
  try {
    const updatedGraph = await GraphsDAO.updateGraph(req.params.id, req.body);
    if (!updatedGraph) {
      return res.status(404).json({ message: "Graph not found" });
    }
    res.status(200).json(updatedGraph);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = updateGraph;
