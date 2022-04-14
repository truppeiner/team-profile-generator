const Manager = require('../lib/Manager.js');

//manager test 
test('create manager object', () =>{
    const manager = new Manager('Thomas');

    expect(manager.name).toBe('Thomas');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));

})