// Map filter arrow fns

//Maps :

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


//Filter

//Given an input array , give me all the even values
//ans

// const arr = [1, 2, 3, 4, 5];

// newArray = []
// for(let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 == 0){
//         newArray.push(arr[i]);
//     }
// }
// console.log(newArray)

//or 

const arr = [1, 2, 3, 4, 5];  //for names to filter

function filterLogic(n){
    if (n % 2 == 0){          //logic would be startWith("h")
        return true;
    } else {
        return false;
    }
}

let answer = arr.filter(filterLogic)
console.log(answer)

//also directky calling a fn

// const arr1 = [1, 2, 3, 4, 5];
//  let answer1 = arr.filter(function(m){   
//     if (m%2 == 0){
//         return true;
//     } else {
//         return false;
//     }
//  })

//  console.log(answer1)


//Arrow fn :

const arr1 = [1, 2, 3, 4, 5];
 let answer1 = arr.filter((m) => {   
    if (m%2 == 0){
        return true;
    } else {
        return false;
    }
 })

 console.log(answer1)

