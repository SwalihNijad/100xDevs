//To remove the extra space in left and right and write to another file.

//by callback sync funcn
const fs = require("fs");
const { promiseHooks } = require("v8");

function cleanFileSync(filePath, cb){
    const contents = fs.readFileSync("a.txt","utf-8");
    const trimmedContents = contents.trim();
    fs.writeFileSync("a.txt", trimmedContents)
}   
cleanFileSync("a.txt")



//by callback async fncn
function cleanFile(filePath) {
    fs.readFile("a.txt","utf-8",function(err, contents){
        const trimmedContents = contents.trim();
        fs.writeFile("a.txt",trimmedContents,function(){
            cb;
        });
    });
}

cleanFile("a.txt", function(){
    console.log("Done cleaning a.txt")
})


//promisified async fncn

function cleanFile(filePath){
    return new Promise(function(resolve, reject){
        fs.readFile(filePath, "utf-8", function(err, data){
            if(err){
                reject()
            } else{
                const trimmedContents = contents.trim()
                fs.writeFile("a.txt", trimmedContents, function(err){
                    if(err){
                        reject()
                    } else{
                        resolve();
                    }
                });
            }
        });
    })

}
cleanFile("a.txt")
    .then(function(){
        console.log("File has been cleaned")
    })
    .catch(function(){
        console.log("error occured while reading")
    })

//promisified but using async await

function cleanFile(filePath){
    return new Promise(function(resolve, reject){
        fs.readFile(filePath, "utf-8", function(err, data){
            if(err){
                reject()
            } else{
                const trimmedContents = contents.trim()
                fs.writeFile("a.txt", trimmedContents, function(err){
                    if(err){
                        reject()
                    } else{
                        resolve();
                    }
                });
            }
        });
    })
}

async function main() {
    try{
        await cleanFile("a.txt")
        console.log("done cleaning the file")
    } catch(e) {
        console.log("error while reading the file")
    }
}

main();