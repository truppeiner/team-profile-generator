// CONST VARIABLES 
const { expect } = require('@jest/globals');
const { TestWatcher } = require('jest');
const Employee = require('../lib/Employee.js');
// END CONST VARIABLES 

//EMPLOYEE TEST 
test('create employee object through command line', () =>{
    const employee = new Employee('Thomas');

    expect(employee.name).toBe('Thomas');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})
