// Objects
// multiple valiables in a single place/variable. 
// object is a set of unique key value pairs.

//{} set 
// key + value = field // name:"Leon"
// { name:"Leon" , age : 23, isStudent: true, address: {city:"Berlin", country:"Germany"} } 


/* const name = "Leon";
const age = 23; 
const isStudent= true; */

/* Array(1,2,3,4) 
[1,2,3,4] */
/* const user = Object()
user.name = "Leon";
user.age=23;

const user = {name : "Leon", age: 23,} */

//literal way
// keys always be string
// values can be any data type

const user = { name : "Leon", age: 23, isStudent: true , address: {city:"Berlin", country:"Germany"}, 123: "usercode" } 

//Object contstructor 
const keys= Object.keys(user) // returns an array
console.log(keys)


const values = Object.values(user)
console.log(values)


const entries = Object.entries(user)
console.log(entries)

/* Object.freeze(user)

Object.isFrozen(user) // true

Object.seal(user) */



/* console.log(user) */

//using square bracket notation
/* console.log(user["name"])
console.log(user["isStudent"]) */

//using dot notation
/* console.log(user.name)
console.log(user.age)
console.log(user.isStudent) */

// . notation will not work with number key type.
// console.log(user.123) => error
/* console.log(user["123"]) */

//get input from user 
/* const userInput = "title" */

// const product= { title: "Iphone", price:1200, description:"iphone new release", brand:"apple"}


/* product.price = 1200;
product.brand = "apple"; */
/* product["1213243435"] = "code" */


/* console.log(product[userInput]) */ //=> Iphone

//iterating over object 
//for in loop
/* for(const key in product){
    console.log(product[key])
} */

/* const numbers = [1,2,4,5]
console.log(numbers[0+2]) */

/* this.title = "Hello"
console.log(this) */

// this references to the object invoking that function
// when using arrow function context for this keyword will changed
// this keyword in arrow function references to the context where parent object define
const product = {
    title:"Lenevo",
    price:1000,
    isAvailable:true,
    models: ["i3","i5","i7"],
    showDetails(){
        console.log(this.title)
    }
   /*  showDetails: function(){
        return ()=>{
            console.log(this)
        } */
      /*   showDetails: function (){
            return ()=>{
                console.log(this.title)
            }
        }
, */
  /*   showProduct:function(){

    } */
   
}
//function inside the object is called method

/* product.showDetails() */
const productTwo = {...product}
productTwo.title = "HP"
productTwo.price = 1200

/* productTwo.showDetails()()
product.showDetails()()
 */
productTwo.showDetails()
product.showDetails()

//reference comparison VS value comparison
//Primitive type : making copy
/* const a = 23;

let b = a;

b= 24;
console.log(a , b ) */
/* const studentName= "John";
let copyStudent = studentName;
copyStudent= "john"
console.log(studentName, copyStudent) */

//object type
/* const numbers = [1,2,3]

const copyNumbers = [...numbers];
copyNumbers.push(4)

console.log(numbers) // [1,2,3]
console.log(copyNumbers) // [1,2,3,4] */


