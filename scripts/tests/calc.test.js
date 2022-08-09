const functions = require("../calc");


describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(functions.addition(20,22)).toBe(42);
        });
        test("should return 73 for 42 + 31", () => {
            expect(functions.addition(42,31)).toBe(73);
        });
    });
    describe("Subtraction function", () => {
        test("should return 1 for 2 - 1", () => {
            expect(functions.subtraction(2,1)).toBe(1);
        });
    });
    describe("Multiply function", () => {
        test("should return 15 for 3 x 5", () => {
            expect(functions.multiply(3,5)).toBe(15);
        });
    });
    describe("Divide function", () => {
        test("should return 5 for 10 / 2", () => {
            expect(functions.divide(10,2)).toBe(5);
        });
    });
});