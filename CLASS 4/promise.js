function setTimeoutPromisified(ms) {                     //Considered as black box
  return new Promise(resolve => setTimeout(resolve, ms));
}

function callback() {               //creating a function callback so that it runs async
    console.log("Hi there")
}

setTimeoutPromisified(3000).then(callback)  //This is how we calll promisisfied callback
//call setTimeoutPromisified after calling  3 seconds then call callback functn
//This is calling promisified async fnctn

setTimeout(callback, 3000);  //withut promising

//converting fs file to promisified version.

// const fs = require("fs");

// function callback(err, data){
//   if(err){
//     console.log("Error while reading the file.")
//   } else {
//     console.log(data);
//   }
// }

// fs.readFile("a.txt1","utf-8",callback)

//to

const fs = require("fs");

function fsReadFilePromisified(filePath, encoding) {  //conside this as black box!
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data);
            }
        })
    })
}

function callback(data){
  console.log(data)
}

function callbackErr(err){
  console.log("Error while reading the file")
}

let p = fsReadFilePromisified("a.txt","utf-8")  // if we re storuing this in a varible ex p = fs.....
p.then(callback).catch(callbackErr)                  //or syntax will be .then(callback)
//.catch(callbackErr)

setInterval(function(){
  console.log(p);
},500)



