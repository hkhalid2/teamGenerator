//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

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
}