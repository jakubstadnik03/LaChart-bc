const GraphsDAO = require("../../dao/graphsDao");

async function deleteGraph(req, res) {
  try {
    const deletedGraph = await GraphsDAO.deleteGraph(req.params.id);
    if (!deletedGraph) {
      return res.status(404).json({ message: "Graph not found" });
    }
    res.status(200).json({ message: "Graph deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = deleteGraph;
