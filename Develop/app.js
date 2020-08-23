const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = [];

function newEntry() {
    return inquirer.prompt(
        {
            type: "input",
            name: "newEntry",
            message: "Would you like to add a new entry? Enter Y or N."
        }
    )
};

function employeeInfo() {
    return inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Please enter the employee's name:"
    },
    {
        type: "input",
        name: "id",
        message: "What is the employee ID?"
    },
    {
        type: "input",
        name: "email",
        message: "Enter in the employee's email:"
    },
    {
        type: "input",
        name: "title",
        message: "Is this employee a Manager, Engineer or Intern?"
    }
])};

function engineerInfo() {
    return inquirer.prompt(
    {
        type: "input",
        name: "github",
        message: "What is their gitHub username?"
    }
)};

function managerInfo() {
    return inquirer.prompt(
    {
        type: "input",
        name: "office",
        message: "What is their office number?"
    }
)};

function internInfo() {
    return inquirer.prompt(
    {
        type: "input",
        name: "school",
        message: "What school did/does this intern attend?"
    }
)};

async function init() {
    const newEntry = await newEntry();

    if(newEntry.newEntry === "N" || newEntry.newEntry === "n"){
        fs.writeFile(outputPath, render(teamMembers), function(err){
            if (err) {
                throw err;
            }
        });
    } else {
        const newEmployee = await employeeInfo();

        if(newEmployee.title === "Engineer" || newEmployee.title === "engineer"){
            const newEngineer = await engineerInfo();
            const engineer = new Engineer(newEmployee.name, newEmployee.id, newEmployee.email, newEngineer.github);
            teamMembers.push(engineer);

        } else if(newEmployee.title === "Intern" || newEmployee.title === "intern") {

        } else if(newEmployee.title === "Manager" || newEmployee.title === "manager") {

        } else {
            alert("Please enter a Manger, Engineer, or Intern for the title.")
            return;
        }
    }

    // const questions = await questionsPrompt();

    // writeToFile("README.md", questions);

    // appendToFile(questions.questions);
}

init();

//write 3 functions: engineer, intern and manager to inquire with specific info
//do an async function await for the first prompts
//then an if statement for whicheng, manager or intern function to run

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
