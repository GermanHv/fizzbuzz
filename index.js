const Reader = require("./lib/utils/Reader")
const ExplorerService = require("./lib/services/ExplorerService")

const explorers = Reader.readJsonFile("explorers.json")
console.log (explorers)
/*
ExplorerService.filterByMission(explorers, "node");
ExplorerService.getAmountOfExplorersByMission(explorers, "node");
ExplorerService.getExplorersUsernamesByMission(explorers, "node");
*/