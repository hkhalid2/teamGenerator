//Packages/classes needed for this application
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
        //adds the only Manager class team member to team array
        .then((answers) => {
            // let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            let manager = `<div class="col-3 d-flex justify-content-center">
            <div class="card bg-light" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${answers.name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
                  <p class="card-text">ID: ${answers.id}</p>
                  <a href="#mailto:${answers.email}:" class="card-link">${answers.email}</a>
                  <p class="card-text">Office Number: ${answers.officeNumber}</p>
                </div>
            </div>  
        </div>`;
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
        //adds new Engineer class team member to team array and sends user back to menu
        .then((answers) => {
            // let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            let engineer = `<div class="col-3 d-flex justify-content-center">
            <div class="card bg-light" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${answers.name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
                  <p class="card-text">ID: ${answers.id}</p>
                  <a href="#mailto:${answers.email}:" class="card-link">${answers.email}</a>
                  <a href="#mailto:${answers.github}:" class="card-link">${answers.github}</a>
                </div>
            </div>  
        </div>`;
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
        //adds new Intern class team member to team array and sends user back to menu
        .then((answers) => {
            // let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            let intern = `<div class="col-3 d-flex justify-content-center">
            <div class="card bg-light" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${answers.name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
                  <p class="card-text">ID: ${answers.id}</p>
                  <a href="#mailto:${answers.email}:" class="card-link">${answers.email}</a>
                  <p class="card-text">School: ${answers.school}</p>
                </div>
            </div>  
        </div>`;
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
                writeFileAsync('index.html', GenerateHTML(team.join(""))).then(console.log('Team Finished, HTML file generated'));
            }


        });

};

const GenerateHTML = (team) => 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
        <title>Document</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark">
            <span class="navbar-brand mb-0 h1 w-100 text-center">My Team</span>
        </nav>
    
        <div class="container">
                <div class="row">
${team}                                 
                </div>

        </div>
            
    </body>
    </html>`;

// uses promises to create writeFile function
const writeFileAsync = util.promisify(fs.writeFile);


const init = () => {
    console.log("Welcome to the Team Generator app!");
    //manager questions called once since there can only be one manager
    ManagerQuestions()
        .then(() => createTeam())
        .catch((err) => console.error(err));
};

init();