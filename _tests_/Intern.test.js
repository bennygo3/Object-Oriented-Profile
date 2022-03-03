const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("constructor", () => {
        it("should create a new intern with the given data", () => {
            const int = new Intern("Ben", "3", "gobecodeme@gmail.com", "Scottsdale Community College");
            expect(int.name).toEqual("Ben");
            expect(int.id).toEqual("3");
            expect(int.email).toEqual("gobecodeme@gmail.com");

        });
    });
    describe("getName", () => {
        it("should be able to return the value of the intern's name", () => {
            const int = new Intern("Ben", "3", "gobecodeme@gmail.com");
            expect(int.getName()).toEqual("Ben");
        });
        describe("getId", () => {
            it("should be able to return the value of the intern's id", () => {
                const int = new Intern("Ben", "3", "gobecodeme@gmail.com");
                expect(int.getId()).toEqual("3");
            });
        })
        describe("getEmail", () => {
            it("should be able to return the value of the intern's email", () => {
                const int = new Intern("Ben", "3", "gobecodeme@gmail.com");
                expect(int.getEmail()).toEqual("gobecodeme@gmail.com");
            });
        })
        describe("getRole", () => {
            it("should be able to return the value of the intern's role", () => {
                const int = new Intern("Ben", "3", "gobecodeme@gmail.com");
                expect(int.getRole()).toEqual("Intern");
            });
        });
        describe("getSchool", ()=>{
            it("should be able to return the value of the intern's school",()=>{
                const int = new Intern("Ben", "3", "gobecodeme@gmail.com", "Scottsdale Community College");
                expect(int.getSchool()).toEqual("Scottsdale Community College");
            });
        });
    });
});