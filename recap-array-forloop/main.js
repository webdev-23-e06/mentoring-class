

/* const name = "Naqvi"
console.log(name[0]) */

//Array 
//store multiple values into a single variable

//using contructor
/* const nums = Array(1,2,3,4) */




//literal way
/* const numbers = [1,2,3,4,5,6,7,8,9] */

/* console.log(numbers.length) */


//sqaure bracket notation
/* console.log(numbers[3]) */

/* console.log(numbers.join(" ")) */ // 1_2_3_4  // 1 2 3 4


//add , delete , update/replace
// push => end  -----  unshift => start   
// add item in the end of your array
/* numbers.push(5)
console.log(numbers) */
// add item in the beginning of your array
/* numbers.unshift(0)
console.log(numbers) */

//array splice method => add item, replace item, delete item
/* numbers.splice(1, 0, 9) // inserting item at specific location
console.log(numbers) */

//delete last item
/* numbers.pop()
console.log(numbers) */

//delete first item
/* numbers.shift()
console.log(numbers) */

/* console.log(numbers.slice(2,-1))  */ 

//map,filter,reduce, find, sort 


const num  = 1234 //not iterable 

const str = "javascript is awesome"

//tradition for loop // numeric loop 
/* for(let i = 0; i < str.length ;i++){
    console.log(str[i])
} */

//with iterable object you can use "for of" loop
/* for(const char of str){
    console.log(char)
} */


const cities = ["Berlin","Frankfurt","Bonn","Hamburg"]
/* const iterator = cities[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next()) */

/* for(let i = 0; i < cities.length ;i++){
    console.log(cities[i])
} */

/* for(const city of cities){
    console.log(city)
} */




//map , filter , reduce  advanced array methods

// map => returns an array with same number of items
// filter => returns an array with less numbers of items
// reduce => returns any type of data you want

const numbers = [1,2,3,4,5] // => [1,4,9,16,25] => use map

const nums = [1,2,3,4,5,6,7,8,9,10] // => [ 2,4,6,8,10 ] => use filter

const randomNumber = [1,2,3,4,6,7] // => 23  => use reduce
const scores = [1,2,1,2,1,1,1,2,3,3,2,1,2,3,2,1] // => occurance of each number inside this array 
                                                // => {"1": 7, "2":6,"3": 3 } => use reduce

