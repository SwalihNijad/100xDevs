//number, boolean, string

function greet(firstName: string) {
    console.log( "Hello " + firstName)
}

greet("Nijad")

function sum(a: number, b: number) {
    return a + b;
}

let x =  1;
let y = 2;

console.log(sum(x,y));

//first element, Return type

function first_element(arr: number[]): number | null {  //composite type
     if(arr.length > 0){
        return arr[0] ?? null;
     }
     return null
}

//delayed call
function delayedCall(fn: () => void) {
    setTimeout(fn, 1000);
}

function z() {
    console.log("hi there");
}

delayedCall(() =>  {})

//Endpoints be like


import express from "express";
import type { Request, Response } from "express";

const app = express();
app.use(express.json());

interface UserInput {
    username: string,
    password: string
}

app.post("/signup",(req:Request, res:Response) => {
    const body: UserInput = req.body

    res.json({
        message: "Signed Up"
    })
})

app.listen(3000);

//Interface
interface user {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
}

function isLegal(user: user): boolean {
    if(user.age >18){
        return true
    }
    return false;
}

let user1: user = {
    firstName: "Swalih",
    lastName: "Nijad",
    email: "Swalih1232@gmami.com",
    age: 19
}

console.log(isLegal(user1));


//Import Export


// export->

// const UserModel = mongoose.model("user",userSchema);
// export default UserModel

//import ->

// import UserModel from "./models";

//export
//export const UserModel = mongoose.model("user",userSchema);

//importt
//const { UserModel }  = mongoose.model("user",userSchema);


//Enum

enum Direction {
    Up,
    Down,
    Right,
    Left
}

function doSomething(keypressed: Direction) {
    if(keypressed == Direction.Up){

    }
}

doSomething(Direction.Up)
doSomething(Direction.Down)

//Generics

function identity<T> (arg: T){
    return arg;
}

let output1 = identity<string>("mystring");
let output2 = identity<number>(100);

output1.toUpperCase();