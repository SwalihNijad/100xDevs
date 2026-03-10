function setTimeoutPromisified(ms) {                     //Considered as black box
  return new Promise(resolve => setTimeout(resolve, ms));
}

function callback() {
    console.log("Hi there")
}

setTimeoutPromisified(3000).then(callback)  //This is how we calll promisisfied callback

setTimeout(callback, 3000);  //withut promising