// //internal packages
// const path = require("path");
// console.log(__dirname)
// console.log(__dirname + "../../index.js"+"/projects") //This will add directly

//wedonneed it
// console.log(path.join("/index.js"))  //best way
// console.log(path.join("../index.js","/projects"))  //thia will go back 2


// //Write a function to cout the number of words
// const fs = require("fs");

// function main(filename){
//         fs.readFile(filename,"utf-8",function(err,data){
//             let total = 0;
//             for(let i = 0; i<data.length; i++){
//                 if(data[i]==0){
//                     total++;
//                 }
//             }
//             console.log(total + 1);
//         })
//     }

// main("a.txt")

//To write  (get node -h) to create cli command line interfernce

const fs = require("fs");
const { Command } = require('commander');
const { console } = require("inspector");
const { mainModule } = require("process");
const program = new Command();

program
    .name('counter')
    .description('CLI to do filebased task')
    .version('0.8.0');

program.command('count_sentences')
    .description('Count the number of lines')
    .argument('<file>','file to counter the number of lines')
    .action((file) => {
        fs.readFile(file, 'utf-8', (err,data) => {
            if(err){
                console.log(err)
            }
            else{
                let words = 0;
                for(let i =0; i<data.length; i++){
                    if(data[i] == " "){
                        words++;
                    }
                }
                console.log('There are ${words+ 1} words in ${words}')
            }
        })
    })

program.parse(process.argv);