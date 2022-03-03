const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("constructor", () => {
        it("should create a new engineer with the given data", () => {
            const eng = new Engineer("Ben", "3", "gobecodeme@gmail.com", "bennygo3");
            expect(eng.name).toEqual("Ben");
            expect(eng.id).toEqual("3");
            expect(eng.email).toEqual("gobecodeme@gmail.com");

        });
    });
    describe("getName", () => {
        it("should be able to return the value of the engineers's name", () => {
            const eng = new Engineer("Ben", "3", "gobecodeme@gmail.com");
            expect(eng.getName()).toEqual("Ben");
        });
        describe("getId", () => {
            it("should be able to return the value of the engineers's id", () => {
                const eng = new Engineer("Ben", "3", "gobecodeme@gmail.com");
                expect(eng.getId()).toEqual("3");
            });
        })
        describe("getEmail", () => {
            it("should be able to return the value of the engineer's email", () => {
                const eng = new Engineer("Ben", "3", "gobecodeme@gmail.com");
                expect(eng.getEmail()).toEqual("gobecodeme@gmail.com");
            });
        })
        describe("getRole", () => {
            it("should be able to return the value of the engineer's role", () => {
                const eng = new Engineer("Ben", "3", "gobecodeme@gmail.com");
                expect(eng.getRole()).toEqual("Engineer");
            });
        });
        describe("getGithub", ()=>{
            it("should be able to return the value of the engineer's github username",()=>{
                const eng = new Engineer("Ben", "3", "gobecodeme@gmail.com", "bennygo3");
                expect(eng.getGithub()).toEqual("bennygo3");
            });
        });
    });
});