// CONSTANT VARIABLES 
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template.js');
// const writeHTML = require('./src/generate-site.js');
// employee variables 
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const employees = [];
// end employee variables
// END CONST VARIABLES

// PROMPT USER FOR EMPLOYEE INFORMATION

const promptUser = employeeData =>{
console.log(`
        =======================================
        Please enter the following information 
                to create Employee class!
        =======================================
        `);
        inquirer.prompt([
            {
                type: 'list',
                name: 'employeeType',
                message: 'What type of employee is this?',
                choices: ['Manager', 'Engineer', 'Intern']
            },
            {
                type: 'input',
                name: 'name',
                message: 'What is the Employees full name? (required)',
                validate: nameInput =>{
                    if (nameInput){
                        return true;
                    } else {
                        console.log('Please enter your employees name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'ID',
                message: 'What is the Employees ID number? (required)',
                validate: nameInput =>{
                    if (nameInput){
                        return true;
                    } else {
                        console.log('Please enter the employees ID number!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the employees email address? (required)',
                validate: nameInput =>{
                    if (nameInput){
                        return true;
                    } else {
                        console.log('Please enter the employees email address?');
                        return false;
                    }
                }

            },
            //if engineer selected 
            {
                type: 'input',
                name: 'github',
                message: 'What is the employees github username?',
                when: (answers) =>{
                    if(answers.employeeType === 'Engineer'){
                        return true;
                    }
                    return false;
                }
            },
            // if intern selected
            {
                type: 'input',
                name: 'school',
                message: 'What school do they attend?',
                when:(answers) =>{
                    if(answers.employeeType === 'Intern'){
                        return true;
                    }
                    return false;
                }
            },
            // if manager selected 
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the managers office number?',
                when: (answers) =>{
                    if(answers.employeeType === 'Manager'){
                        return true;
                    }
                    return false;
                }
            },
            {
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you like to add another employee?',
                default: false
            }
         ])
         .then(answers =>{
             if(!answers.confirmAddEmployee){
            console.log(answers);
             }
             else {
                console.log(answers);
                return promptUser();
             }
        })
};

promptUser();
    // .then(employeeData =>{
    //     return generatePage(employeeData);
    // })
    //     .then(pageHTML =>{
    //         return writeHTML(employeeData);
    //     });