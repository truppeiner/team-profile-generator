const Intern = require('../lib/Intern.js');

//intern test 
test('create intern object', () =>{
    const intern = new Intern('Thomas');

    expect(intern.name).toBe('Thomas');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));

})