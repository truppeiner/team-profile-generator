const Engineer = require('../lib/Engineer.js');

//engineer test
test('create engineer object', () =>{
    const engineer = new Engineer('Thomas');

    expect(engineer.name).toBe('Thomas');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})