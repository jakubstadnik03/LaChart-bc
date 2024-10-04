const GraphsDAO = require("../../dao/graphsDao");

async function createGraph(req, res) {
  try {
    const newGraph = await GraphsDAO.createGraph(req.body);
    res.status(201).json(newGraph);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = createGraph;
