const GraphsDAO = require("../../dao/graphsDao");

async function getGraphsByAthlete(req, res) {
  try {
    const graphs = await GraphsDAO.getGraphsByAthlete(req.params.athleteId);
    res.status(200).json(graphs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = getGraphsByAthlete;
