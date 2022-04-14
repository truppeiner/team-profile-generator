const fs = require('fs');

const writeHTML = htmlContent => {
    return new Promise((resolve, reject)=>{
        fs.writeHTML('./index.html', HtmlContent, err =>{
            //if error reject promise
            if (err){
                reject(err);
                return;
            }
            //if success resolve promise and notify
            resolve({
                ok: true,
                message: 'file successfully created!'
            });
        });
    });
};

module.exports = writeHTML(); 