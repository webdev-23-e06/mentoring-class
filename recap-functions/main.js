// what is a function ?
// function is a block of code designed to perform specific task.
// it will execute when someone will invoke/call that function






//Hoisting
//function definition
function welcome(){
    console.log("Hello world")
}
//call/invoke function
/* welcome() */


/* if(){}
while(){}
for(){} */


/*  let a = 23;

console.log(a+2)  */

// function expression
// when you use function as a value it is called function expression
/* let sum = function (){console.log(2+2)}


sum() */






//arrow funnction // fat arrow function

/* let sum = ()=>console.log(2+2)

sum() */



/* function greetUser(name){ //name  => parameter
    console.log("Hi "+name)
}

greetUser("Naqvi") //Naqvi => argument
greetUser("Joseph") */


/* function sum(a,b,c=0){
    console.log(a+b+c)
}

sum(1,2)  //NaN 1,2,5 = 8
sum(2,4,1) // 2,4,1 = 7
sum(3,5) // 3,5,5 = 13 */

// ... spread and rest operator

/* function sum (...numbers){
    let total = 0; 
    for(const number of numbers){
        total+=number
    }
    console.log(total)
}

sum(1,2,3)
sum(2,3,4,5,6,7,8,9)
sum(2,2)
sum(5) */

/* let numbers = [1,2,3,4,5]

console.log(...numbers) // console.log(1,2,3,4,5) */

/* let array = ["berlin",24,"John"] */
/* let [city, age ,name,country] = ["berlin",24,"John","germany"] */
/* let city = array[0]
let age = array[1]
let name = array[2] */
// array destructuring => extracting out values from an array into variables


/* console.log(`my name is ${name} and I live in ${city} and I am ${age} years old!`) */

/* 
let [a,b, ...c] = [1,2,6,7,8,9,10]

console.log(c) */


//return statement
/* function createRandomNumber(){
    const randomNumber = Math.round(Math.random()*10)
    return randomNumber;
}

const random = createRandomNumber()
if(random>=5){
    console.log(random+random)
}else{
    console.log(random*random)
} */


/* let age = 12;
function print(){
    for(let i = 0 ; i<20 ;i++){
        console.log(i)
        if(i===5){
           return;
        }
    }
    console.log("I am done")
if(age>=18){
    console.log("you allowed!")
    return
}

    console.log("you are under age")


} */

/* print() */

