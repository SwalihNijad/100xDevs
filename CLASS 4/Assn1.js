//Callback Hell
//to call the fnctn after 1 3 5 sec

setTimeout (function(){
    console.log("Hi")
    setTimeout(function(){
        console.log("Hello")
        setTimeout(function(){
            console.log("Hello there")
        },5000)
    },3000)
},1000)

//Made this better ny promisifying chained one after another


function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

setTimeoutPromisified(1000)
    .then(function(){
        console.log("hi")
        return setTimeoutPromisified(3000)
    }).then(function(){
        console.log("Hello")
        return setTimeoutPromisified(5000)
    }).then(function(){
        console.log("Helloo theree")
    })