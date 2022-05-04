

class ExplorerService{
    static filterByMission(explorers, mission){
        const getAmountOfExplorersByMission = explorers.filter((explorer)=> explorer.mission === mission)
        return getAmountOfExplorersByMission
    }   

}

module.exports = ExplorerService