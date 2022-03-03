const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("constructor", () => {
        it("should create a new employee with given data", () => {
            const emplo = new Employee("Ben", "3", "gobecodeme@gmail.com");
            expect(emplo.name).toEqual("Ben");
            expect(emplo.id).toEqual("3");
            expect(emplo.email).toEqual("gobecodeme@gmail.com");
        });
    })
    describe("getName", () => {
        it("should be able to return the value of the employee's name", () => {
            const emplo = new Employee("Ben", "3", "gobecodeme@gmail.com");
            expect(emplo.getName()).toEqual("Ben");
        });
        describe("getId", () => {
            it("should be able to return the value of the employee's id", () => {
                const emplo = new Employee("Ben", "3", "gobecodeme@gmail.com");
                expect(emplo.getId()).toEqual("3");
            });
        })
        describe("getEmail", () => {
            it("should be able to return the value of the employee's email", () => {
                const emplo = new Employee("Ben", "3", "gobecodeme@gmail.com");
                expect(emplo.getEmail()).toEqual("gobecodeme@gmail.com");
            });
        })
        describe("getRole", () => {
            it("should be able to return the value of the employee's role", () => {
                const emplo = new Employee("Ben", "3", "gobecodeme@gmail.com");
                expect(emplo.getRole()).toEqual("Employee");
            });
        })
    })
})
