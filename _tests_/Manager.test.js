const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("constructor", () => {
        it("should create a new manager with the given data", () => {
            const mang = new Manager("Ben", "3", "gobecodeme@gmail.com", "1");
            expect(mang.name).toEqual("Ben");
            expect(mang.id).toEqual("3");
            expect(mang.email).toEqual("gobecodeme@gmail.com");

        });
    });
    describe("getName", () => {
        it("should be able to return the value of the manager's name", () => {
            const mang = new Manager("Ben", "3", "gobecodeme@gmail.com");
            expect(mang.getName()).toEqual("Ben");
        });
        describe("getId", () => {
            it("should be able to return the value of the manager's id", () => {
                const mang = new Manager("Ben", "3", "gobecodeme@gmail.com");
                expect(mang.getId()).toEqual("3");
            });
        })
        describe("getEmail", () => {
            it("should be able to return the value of the manager's email", () => {
                const mang = new Manager("Ben", "3", "gobecodeme@gmail.com");
                expect(mang.getEmail()).toEqual("gobecodeme@gmail.com");
            });
        })
        describe("getRole", () => {
            it("should be able to return the value as manager for role", () => {
                const mang = new Manager("Ben", "3", "gobecodeme@gmail.com");
                expect(mang.getRole()).toEqual("Manager");
            });
        });
        describe("getOfficeNumber", ()=>{
            it("should be able to return the value of the manager's office number",()=>{
                const mang = new Manager("Ben", "3", "gobecodeme@gmail.com", "1");
                expect(mang.getOfficeNumber()).toEqual("1");
            });
        });
    });
});