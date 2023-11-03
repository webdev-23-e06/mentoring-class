// Arrays 
// Objects
// Functions


// Array

const cities = ["Berlin","Frankfurt","Bonn","Hamburg"]
console.log(cities)
//square bracket notation // in square bracket you pass index/location
/* console.log(cities[0])
console.log(cities[1])
console.log(cities[2])
console.log(cities[3]) */

//loop > perform any action again and again
//for (numeric loop) while (conditional loop)

/* for(let i = 0;i<cities.length ; i++ ){
    console.log(cities[i])
}

console.log("finished!") */

//iterate over your array items one by one
/* const returnedFromforEach = cities.forEach((item)=>{
    console.log(item)
    return item
})

const returnedArray = cities.map((item)=>{
     console.log(item)
     return item
})

console.log(returnedFromforEach)
console.log(returnedArray) */

//callback is a function pass to another function as an argument.

/* function sum(a,b){
    console.log(a+b)
}
sum(2,()=>3) */

const numbers = [1,2,3,4]  // =>  [1,4,9,16]

/* let squaredArray= []
numbers.forEach(num => squaredArray.push(num*num))
console.log(squaredArray) */

/* const squaredArray = numbers.map(num=>num*num)
console.log(squaredArray) */
//map
//filter
//reduce

console.log(numbers.map(num=>num*num) )


/* function sum(a,b){
    return a+b   
} */

/* const sum = (a,b)=>{a+b } */ //return undefined
/* const sum = (a,b)=>{return a+b } */
/* const sum = (a,b)=>a+b


const total = sum(2,3)
console.log(total)  */

/* function printName(name){
    console.log(name)
} */

/* const printName = name => console.log(name) */



// function

//function is a block  of code , execute when someone will invoke/call it.

//function definition
/* function nameFunction (){
    //block of code
} */


/* function greetUser(){
    console.log("hello")
} */



//function expression => when you store your function as a value // store function as a value into a variable 
/* const greetUser = function(){
    console.log("hello")
};  */

//Anonymous function =>  function without any name 


// arrow function
const greetUser = () => console.log("hello"); 


//invoking//calling function
greetUser()


/* const student = "John"
student.includes("R") //false */



