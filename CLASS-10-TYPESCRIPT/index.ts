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



