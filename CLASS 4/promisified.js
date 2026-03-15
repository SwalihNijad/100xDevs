//(i)Create a promisisfied of fs.readfile
//(ii)Create a promisisfied of setTimeout
//(iii)Create a promisisfied of fs.writefile

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

//Callback has two arguments followed by number where as promisified callback has never passed 1 arg will be reduced  i.e setTimeout(function(){}1000) and seTimeout(1000)and .then and .catch

//(ii)

function setTimeoutpromisified(delay){
    return new Promise (function(resolve, reject){   //promise should resolve after 1 sec
        setTimeout(function(){
            resolve()
        },delay)
    })
}

setTimeoutpromisified(1000)
    .then (function(){
        console.log("1 second has delayed")
    })