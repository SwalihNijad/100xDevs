//Create a promisisfied of fs.readfile
//Create a promisisfied of setTimeout
//Create a promisisfied of fs.writefile

const fs = require("fs");

//on top of fs.readfile
//We've to create a promisified function


function fsReadFilePromise(filePath, encoding){
    return new Promise(function(resolve, reject) {
        fs.readFile(filePath, encoding, function(err, data){
            if (err){
                reject(err)
            } else {
                resolve(data)
            }
        })
    });
}

fsReadFilePromise("a.txt","utf-8")
    .then(function(data) {
        console.log(data);
    })
    .catch(function(err) {
        console.log("Error while reading the file")
    })









fsReadFilePromise("a.txt","utf-8")