//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
let team = [];

const ManagerQuestions = () => {
    return inquirer.prompt([

        {
            type: "input",
            name: "name",
            message: "What is the Manager's Name?",
        },

        {
            type: "input",
            name: "id",
            message: "What is the Manager's ID?",
        },

        {
            type: "input",
            name: "email",
            message: "What is the Manager's email?",
        },

        {
            type: "input",
            name: "officeNumber",
            message: "What is the Manager's officeNumber?",
        },
    ])

        .then((answers) => {
            let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            team.push(manager);
        })
};

const EngineerQuestions = () => {
    return inquirer.prompt([

        {
            type: "input",
            name: "name",
            message: "What is the Engineer's Name?",
        },

        {
            type: "input",
            name: "id",
            message: "What is the Engineer's ID?",
        },

        {
            type: "input",
            name: "email",
            message: "What is the Engineer's email?",
        },

        {
            type: "input",
            name: "github",
            message: "What is the Engineer's github?",
        },
    ])
        .then((answers) => {
            let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            team.push(engineer);
            createTeam();
        })
};

const InternQuestions = () => {
    return inquirer.prompt([

        {
            type: "input",
            name: "name",
            message: "What is the Intern's Name?",
        },

        {
            type: "input",
            name: "id",
            message: "What is the Intern's ID?",
        },

        {
            type: "input",
            name: "email",
            message: "What is the Intern's email?",
        },

        {
            type: "input",
            name: "school",
            message: "What school is the Intern attending?",
        },
    ])
        .then((answers) => {
            let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            team.push(intern);
            createTeam();
        })
};

const createTeam = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'What team member would you like to add?',
            choices: [
                'Intern',
                'Engineer',
                'Finish building team'
            ],
            initial: 1
        },
    ])
        .then((answer) => {
            if (answer.menu == 'Intern') {
                InternQuestions();
            }
            else if (answer.menu == 'Engineer') {
                EngineerQuestions();
            }
            else {
                console.log('Team Finished, HTML file generated');
            }


        });

};

// uses promises to create writeFile function
const writeFileAsync = util.promisify(fs.writeFile);


const init = () => {
    console.log("Welcome to the Team Generator app!");
    ManagerQuestions()
        .then(() => createTeam())
        .catch((err) => console.error(err));
    
};

init();