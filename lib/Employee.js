const inquirer = require("inquirer");

// employee constructor 
class Employee {
    constructor(name, id, email){
        this.name ='Thomas';
        this.id = 1;
        this.email = 'test@test.com';
    }
    // acquire name function
    getName() {
        return this.name;
    }

    // acquire ID function
    getId() {
        return this.name;
    }

    // acquire email function 
    getEmail() {
        return this.email;
    }

    // acquire role function
    getRole() {
        return 'Employee';
    }
}


// export employee constructor
module.exports = Employee;