const fs = require ("fs")

const contents = fs.readFileSync("a.txt","utf-8");
console.log (contents);

for  (let i=0; i<100 ;i++ );
{                                  
    
}     
//here how js will move from reading file to any looop!! (line16)

//synchronous - after one completed it will move to another (waiting near washing machine to complete)

//Asynchronous - When one is already running it will move to another (putting clothes to washing machine to complete and doing other works)

//So for that we have to write

function FileReadCallback (err, contents){
    console.log(contents);
}

fs.readFile("a,txt","utf-8",FileReadCallback);

let s =0
for (let i = 0 ; i<1000000 ; i++);{
    s += i
}

console.log(s)