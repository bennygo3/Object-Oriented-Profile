const inquirer = require("inquirer");
const fs = require('fs');
const path = require('path');


const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const generateHTML = require('./src/html.js');
const teamArray = [];



function newManager() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "managerName",
                message: "Enter the name of the manager you would like to add:"
            },
            {
                type: "input",
                name: "managerID",
                message: "What is the manager's id number?"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the manager's email address?"
            },
            {
                type: "input",
                name: "officeNum",
                message: "What is the manager's office number?"
            }
        ])
        .then((data) => {
            const manager = new Manager(data.managerName, data.managerID, data.managerEmail, data.officeNum);
            teamArray.push(manager);
            addNewEmployee();
        })

}

function addNewEmployee() {
    inquirer
        .prompt([{
            type: "list",
            name: "role",
            message: "Choose which member role to add next:",
            choices: [
                "Engineer",
                "Intern",
                "All done"
            ]
        }
        ])
        .then(function (data) {
            if (data.role === "Engineer") {
                newEngnr();
            } if (data.role === "Intern") {
                newIntrn();
            } if (data.role === "All done") {
                // using the send function from line 75
                send();
            }


        })
}

// this is used to send the inquirer replies to index.html
function send() {
    var newTeam = generateHTML(teamArray)
    fs.writeFileSync("./dist/index.html", newTeam,
        (err) => err ? console.log(err) : console.log("Let's go!"))
}




function newEngnr() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "engineerName",
                message: "Enter the name of the engineer you would like to add:"
            },
            {
                type: "input",
                name: "engineerID",
                message: "What is the engineer's id number?"
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is the engineer's email address?"
            },
            {
                type: "input",
                name: "github",
                message: "What is the engineer's GitHub username?"
            }
        ])
        .then((data) => {
            const engineer = new Engineer(data.engineerName, data.engineerID, data.engineerEmail, data.github);
            teamArray.push(engineer);
            addNewEmployee();
        })
}

function newIntrn() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "internName",
                message: "Enter the name of the intern you would like to add:"
            },
            {
                type: "input",
                name: "internID",
                message: "What is the intern's id number?"
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is the intern's email address?"
            },
            {
                type: "input",
                name: "school",
                message: "What is the name of the intern's school?"
            }
        ])
        .then((data) => {
            const intern = new Intern(data.internName, data.internID, data.internEmail, data.school);
            teamArray.push(intern);
            addNewEmployee();
        })
}

newManager();







