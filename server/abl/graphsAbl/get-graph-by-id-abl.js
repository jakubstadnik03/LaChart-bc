const GraphsDAO = require("../../dao/graphsDao");

async function getGraphById(req, res) {
  try {
    const graph = await GraphsDAO.getGraphById(req.params.id);
    if (!graph) {
      return res.status(404).json({ message: "Graph not found" });
    }
    res.status(200).json(graph);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = getGraphById;
