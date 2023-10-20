// scripting language
// interpretor (V8 engine) to translate js into programming language



//Node => runtime environment for js => code executing outside of the browser is called backend code
//Browser => runtime environment for js => code executing within the browser is called frontend code


console.log("Hello World")

//Data Types
// Primitive Type
// Object Type

//Primitive type
//1. string any textual data inside double quotes "" ,single quotes '' and inside backticks `` 
//2. number type any numeric value (integer, decimal, floating) 1.2 , 0.5, 1 ,12023214323525
//3. boolean (true or false) true and false
//4. undefined => by default from JS if you will not assign any value to variable
//5. null => explicitly empty :  storing empty value in variable


//Object Type
// Array
// Object
// Date

//Variables => variable is just like container/box to hold any value.
// define variable // create box

//Hoisting 
/* console.log(name)
var name ="Naqvi"
*/


/* console.log(name) throw error //hoisting will not work */
/* let name = "Naqvi" 

name="Syed"

console.log(name) */
//let keyword
/* Variables defined with let cannot be Redeclared

Variables defined with let must be Declared before use

Variables defined with let have Block Scope */

/* let counter = 0; 
console.log(counter++) 
console.log(counter++)
console.log(counter++)
console.log(counter++) */

//const keyword
/*Variables defined with const cannot be Redeclared

Variables defined with const cannot be Reassigned

Variables defined with const have Block Scope  */




/* var a = 3; // declare
console.log(a)
var a=23; // redeclare
console.log(a) */

/* let a = 2;
console.log(a)
let a =3; */

//String
const sentence = "javascript is awesome" 
const mixedData = "Nrcool721345$_98jjkj"
const singleQuoteString = 'I am string data'
const backticksString= `this is backtick string`

console.log(sentence.toUpperCase())


//Number => any numeric value
const number = 3;
const floatingNumber = 2.12;
const decimalNumber = 0.23;

console.log(number.valueOf())
// Boolean
const isLoggedIn= true;
const isStudent= false;

console.log(isLoggedIn.valueOf())

//undefined
let undefinedVariable;  //declaration

console.log(typeof undefinedVariable)


//null
let nullVariable = null; //initialization // definition
console.log(typeof nullVariable)


/* const text = "foo"
const string ="bar"

console.log(text,string,true,4) */



//Global Scope
let name ="Naqvi"
let age =24

//scopes are for variables, not for values



{
    //Block scope
     let name = "anything"
    console.log(name) 
    console.log(age)
}
{
    let text = "new text"
    console.log(name)
}
/* console.log(text) */

/* function sum(){
    //function scope // block scope
    let user = "leon"
    let student ="naqvi"
    return user
}

console.log(sum()) */

/* if(name==="Ali"){
    console.log("my name is ali")
    let age = 23
}else{
    console.log("my name is", name)
    console.log(age)
} */
 
//operators

//arthemital operator
/* + - * / % ++ -- =+ =*  */
// 2 and 5 is called operand // + arithmetic operator
console.log(2+5)
console.log(5-3)
console.log(2*5)
console.log(4/2)
console.log(10%7) //Modulo // modulos


//conditional operator
//conditional operator > < <= >= == === !== !  (=== strict comparison ,checking datatype as well)
console.log(2>3) //false
console.log( 3 == "3" ) //true
console.log("red"==="green") //false
console.log("red" !== "blue") // true
console.log(!(3===5)) //true

// logical opertaor 
// when you want to test/check 2 or more conditions together ,you will use logical operator
// and && , or || , not !
let num = 2
console.log((num>=1) && (num<=10) ) //true

let time = "lunch"
console.log(time ==="12pm" || time ==="1pm") 
