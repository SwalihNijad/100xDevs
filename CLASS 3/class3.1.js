// Map filter arrow fns

//Map :
// Q. Given an array , give me back anew array  in which every value is multiplied by 2 [1, 2, 3, 4, 5] to [2, 4, 6, 8, 10]

//without map general solution

// const input = [1, 2, 3, 4 ,5];

// const newArray = []
// for (let i = 0; i< input.length ; i++){
//     newArray.push(input[i]*2);
// }

// console.log(newArray);

//other solution using map

const input = [1, 2, 3, 4 ,5];

function transform(i){
    return i * 2 ;
}
const x = input.map(transform) //putting input in transform function using map
console.log(x) 

//or      //directly transforming a function without calling a fn

const input1 = [5,10];
const ans = input1.map(function (i){
    return i*2 ;
})
console.log(ans)


