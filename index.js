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

const promptUser = () =>{
console.log(`
        =======================================
        Please enter the following information 
                to create Employee class!
        =======================================
        `);
        return inquirer.prompt([
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
             //store engineer
             if(answers.employeeType === 'Engineer'){
                let engineer = new Engineer(answers.name, answers.ID, answers.email, answers.github);
                 employees.push(engineer);
                 generatePage(employees);
                //  console.log(employees);
                 if(!answers.confirmAddEmployee){
                    return;
                     } 
                     else {
                        return promptUser();
                     }
            //store manager
             } else if(answers.employeeType === 'Manager'){
                 let manager = new Manager(answers.name, answers.ID, answers.email, answers.officeNumber);
                 employees.push(manager);
                 generatePage(employees);
                //  console.log(employees);
                 if(!answers.confirmAddEmployee){
                    return;
                     } 
                     else {
                        return promptUser();
                     }
            //store Intern
             } else if(answers.employeeType === 'Intern'){
                 let intern = new Intern(answers.name, answers.ID, answers.email, answers.school);
                 employees.push(intern);
                 generatePage(employees);
                //  console.log(employees);
                 if(!answers.confirmAddEmployee){
                    return;
                     } 
                     else {
                        return promptUser();
                     }
             }
        })
};

promptUser();
// .then(employees =>{
//     generatePage(employees);
// });
    
// console.log(generatePage(employees));
        // .then(pageHTML =>{
        //     return writeHTML(employeeData);
        // });