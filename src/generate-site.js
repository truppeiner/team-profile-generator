const fs = require('fs');
const Employee = require('../lib/Employee');

const writeHTML = employees => {
        fs.writeFile('./index.html', employees, err =>{
            if (err){
                console.log(err);
                return;
            }  else {
                console.log('File successfully created!');
            }
        });
};

module.exports = writeHTML(); 