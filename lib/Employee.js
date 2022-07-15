const inquirer = require("inquirer");

// employee constructor 
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
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