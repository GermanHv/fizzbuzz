const FizzbuzzService = require("../../lib/services/FizzbuzzService");

describe("Test para FizzbuzzService", () => {
    test("Requerimiento 1: validar buzz", () => {
        const explorer = { score: 3 };
        FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorer.trick).toBe("FIZZ");
    });

    test("Requerimiento 2: validar fizz", () => {
        const explorer = { score: 5 };
        FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorer.trick).toBe("BUZZ");
    });

    test("Requerimiento 3: validar fizzbuzz", () => {
        const explorer = { score: 15 };
        FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorer.trick).toBe("FIZZBUZZ");
    });

    test("Requerimiento 4: validar fizzbuzz", () => {
        const explorer = { score: 7 };
        FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorer.trick).toBe(7);
    });
});