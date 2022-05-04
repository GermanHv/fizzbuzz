const ExplorerService = require("./../../lib/services/ExplorerService")

describe ("Test para ExplorerSevice", ()=>{
    test("Requerimiento 1: Calcular todos los explorers en una mision", ()=> {
        const explorers = [{ mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect (explorersInNode.length).toBe(4)
    })
    test("Requerimiento 2: Calcular explorers en una misión", () => {
        const explorer = [{ githubUsername: "user1", mission: "node" }];
        const explorersInNode = ExplorerService.getExplorersUsernamesByMission(
          explorer,
          "node"
        );
        expect(explorersInNode[0]).toBe("user1");
      });

})