
const color = "white";
const height = 150;
let like = true ;


//function

function greet(nameOfPerson) {

    console.log("hello" + nameOfPerson)
    console.log("Namaste" + nameOfPerson)
    console.log("Assalamalaikum" + nameOfPerson)
}

let firstname = "Harkirat"
let firstname1 = "kirat"
let firstname2 = "John"

greet(firstname)
greet(firstname1)
greet(firstname2)


//if else

function isLegal(age) {
    if (age >= 18) {
        console.log("you are eligible to vote")
    } else {
        console.log("you are not eligible to vote")
    }
}


isLegal(60)
isLegal(16)

for(i=1; i <= 100 ; i++){
    isLegal(i)                      //creates a loop to check 100 numbers 
}

//for loop

for(i=0 ; i<5 ; i++){
    console.log(i)
}

//object - key value pair

function isLegal(name, age){
    if (age >= 18) {
        console.log( "You are allowed to vote")
    } else {
        console.log("You are not allowed to vote")
    }
}

var user1 = {
    name : "Harkirat",
    age : 25,
    password : "ryf878df"
}

var user2 = {
    name : "John",
    age : 16,
    passsword : "cwcjn345"
}

isLegal(user1.name , user1.age)
isLegal(user2.name , user2.age)

//or you can pass the name age directly



function isLegal(user){
    if (user.age >= 18) {
        console.log(user.name  + "is allowed to vote")
    } else {
        console.log(user.name  + "is  not allowed to vote")
    }
}

var user1 = {
    name : "Harkirat",
    age : 25,
    password : "ryf878df",
    address :{
        city : "chd"
    },
    metadata : {
        likes : "girls"
    }
}

var user2 = {
    name : "John",
    age : 16,
    passsword : "cwcjn345"
}
console.log(user1.address.city)
isLegal(user1)
isLegal(user2)

//Arrays

var users = ["Harkirat","John","Kirat"]   //Array of a string

console.log(users[1])

for(let i= 0 ; i < 3 ; i++){
    console.log(users[i])
}



//Array of an object

function isLegal(user)  {
    if (user.age >= 18) {
        console.log(user.name + "are allowed to vote")
    } else {
        console.log(user.name + "are not allowed to vote")
    }
}
var users = [{
    name: "Harkirat",
    age: 35,
    passsword: "fu348hfc"
} , {
    name: "raman", 
    age: 15,
    passsword: "jio2ii33"
    }
]   

for (var i = 0 ; i < 5 ; i++){
    isLegal(users[i])
}                



