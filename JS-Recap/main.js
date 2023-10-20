// Number Methods

/* const number = 2;

console.log(number.toFixed(2)) */

//String Methods
/* 
const text = "this is a string value"
const anotherString =  "and more data"

console.log(text.charAt(3))
console.log(text.charAt(10))
console.log(text.toUpperCase())
console.log(text.length)
console.log(text.slice(0,4)) // this
console.log(text.includes("string")) // true
console.log(text.split(" ").length)
console.log(text.concat(anotherString))
console.log(text.match("is")) */

/* console.log("*".repeat(40).padStart(60," "))
console.log("question 2".padStart(30," "))


console.log("*".repeat(40).padStart(60," ")) */

/* const num1 = 1;
const num2 = 2; 
const num3 = 3;

const numbers = [1,2,3] */

/* const name = "Naqvi"
const age = 23;
const city = "Berlin" */

/* const data = ["Naqvi",23,"berlin","teacher",true] */
// indexes = [0 ,     1 ,   2 ,     3 ,       4]
/* console.log(data[1])
console.log(data.slice(2,-1)) */
/* console.log(data.slice(-1))
console.log(data.length) */



//Expression and Statement
//Expression => value or something which turns into a value
//i.e 3 hello 2+2 1===1 "hello"==="bye" 

//Statement => instructions of code  // instrcutions to your interpretor to do something
 // const a = 23; 
 // if(){ } else { } 

/*  const err = false
 

if(err){
    //if block
    console.log("there is an error")   
}else{
    //else block
    console.log("Hello everything is okay")
} */


/* console.log("Hello Naqvi")
console.log("Hello Leon")
console.log("Hello John")
console.log("Hello Robert") */
const user = "Leon"
/* if(user){
    console.log(`Hello ${user}`)
}else{
    console.log("Hello Guest")
} */

// condition ? true : false ; 
/* user ?  console.log(`Hello ${user}`) : console.log("Hello Guest"); */

/* console.log(user ? `Hello ${user}` : "Hello Guest") */


/* if(user === "Leon"){
    console.log("Hello Leon")
}else if(user==="Naqvi"){
    console.log("Hello Naqvi")
}else if(user === "John"){
    console.log("Hello John")
}else if(user === "Robert"){
    console.log("Hello Robert")
}else {
    console.log("hello guest")
} */



const age = 18;

/* if(age<18){
    console.log("you are too young!")
}   else if (age === 18){
    console.log("You are 18 !")
} else {
    console.log("you are over 18")
} */

/* age < 18 ? console.log("you are too young!") : 
age === 18 ? console.log("You are 18 !") :  console.log("you are over 18"); */

/* console.log(age<18 ? "you are too young!": age === 18 ? "You are 18 !": "you are over 18" ) */


/* let canDrive;

if(age>=18){
    canDrive = true
}else{
    canDrive = false;
}


console.log(canDrive) */


/* const canDrive = age>=18 ? true :false ; 
console.log(canDrive) */



// Logical Operators && AND || OR ! NOT
// logical operators you use to check multiple conditions

const a = 1;
const b = 3; 
const c = 5; 

if(b>a && b<c ){
    console.log("b is in the middle")
}else{
    console.log("b is not in the middle")
}

// && operator will return you true if all conditions are true. 
// && =>     true && true === true
// && =>     true && false === false
// && =>     false && true === false
// && =>     false && false === false

// || operator will return true if any/ atleast one of the condition will get true
// || =>     true && true === true
// || =>     false && true === true
// || =>     true && false === true
// || =>     false && false === false

// ! operator 

/* if(!(b>a && b>c)) {
    console.log("b is not the largest number")
} */

/*  if((b>a && b>c)) {
    console.log("b is the largest number")
} else{
    console.log("b is not the largest number")
} */


/* console.log(!!false) //false
console.log(!!true) // true */


