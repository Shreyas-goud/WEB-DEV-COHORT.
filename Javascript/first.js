//Variables in JavaScript
//-------variables are used to store data values. in javascript, we can declare "var, let, const" keywords
// let firstName = 'shreyas'; // variable that can be reassigned
// const age = 23; // Constant variable that cannot be reassigned
// var isStudent = false; // older way of declaring variables, fuction-scoped
// console.log(firstName, age, isStudent);


//-------------------------sum of two numbers-------------------------
// function sum(a, b){
//     return a + b; 
// }
// let ans = sum("20", 30) // here 20 is string so it will concatenate with 30 and return 2030 not 50
// console.log(ans) 

//-------------------------find the sum from 1 to a number-------------------------
// function sum(n){
//     let ans = 0;
//     for (let i = 1; i <= n; i++){ // what it is performing if we entered 100 then it will add 1+2+3+4+5+6+...+100 gives ans = 5050
//         ans = ans + i 
//     }
//     return ans;
// }

// const ans = sum(2);
// console.log(ans);

//-------------------------synchronus code-------------------------
// function sum(n){
//     let ans = 0;
//     for (let i =1; i <= n; i++){
//         ans = ans + i;
//     }
//     return ans;
// }
// const ans1 = sum(100);
// const ans2 = sum(1000);
// const ans3 = sum(10000);
// console.log(ans1, ans2, ans3);

//-------------------------I/O heavy operation-------------------------#fetching file from the txt file-------------------------

// const fs = require("fs");
// const contents = fs.readFileSync("a.txt", "utf-8");
// console.log(contents);

//-------------------------to read both files synchronously-------------------------

// const fs = require("fs");
// const contents1 = fs.readFileSync("a.txt", "utf-8"); // in this one file after other file will be read.
// console.log(contents1);

// const contents2 = fs.readFileSync("b.txt", "utf-8");
// console.log(contents2); // it will read the file synchronously

//-------------------------to read both files asynchronously-------------------------

// const fs =require("fs");
// fs.readFile("a.txt", "utf-8", function(err, contents1){  // in this both files will be read simultaneously
//     console.log(contents1);
// });
// fs.readFile("b.txt", "utf-8", function(err, contents2){
//     console.log(contents2);
// });
// fs.readFile("a.txt", "utf-8",function(err, contents3){
//     console.log(contents3); // it will read the file asynchronously
// })

//-------------------------write a calculator program that adds, subtracts, multiplies & divides two numbers-------------------------
//-------------------------approach 1-------------------------
// function sum(a, b) {
//     return a + b;
// }
// function sub(a, b){
//     return a - b;
// }
// function mul(a, b) {
//     return a * b;
// }
// function div(a, b) {
//     return a / b;
// }
// const ans = sum(10, 20);
// console.log(ans);

//-------------------------approach 2-------------------------
// function sum(a, b){
//     return a + b;
// }
// function sub(a, b){
//     return a - b;
// }
// function mul(a, b){
//     return a * b;
// }
// function div(a, b){
//     return a / b;
// }
// function doOperation(a, b, op){  
//        return op(a, b, sum); // here we are calling the function
// }
// console.log(doOperation(10, 20, sum)) // here we are passing the function as a parameter

//----promosified version of  setTimeout function----

// console.log("shreyas")
// setTimeout(() => {
//     console.log("Goud")
// },3000)

//------promosified version of fetch function------

// const request = require("request");{
//     google.com = "http://www.google.com";
// }
//    fetch(google.com)
// const map = new Map()
// map.set('name', 'shreyas');
// map.set('age', 23);

// const firstname = map.get('name');
// const age = map.get('age');
// console.log(age);
// console.log(firstname);

// ------------------------------------------------/////////////////////////---------------------------------------/////////////////----------------------//

// function random(resolve){
//     setTimeout(resolve, 4000);
// }

// let p = new Promise(random);

// function callback(){
//     console.log("Promise Success after 4 seconds");
// }
// p.then(callback);

// create a promisified version of a fs.readFile, fs.writeFile and cleanfile

// function sum(n){
//     let ans = 0;
//     for (let i = 1; i <= n; i++){
//        ans = ans + i
//     }
//     return ans;
// }
//     const ans1 = sum(100);
//     const ans2 = sum(1000);
//     const ans3 = sum(10000);

//     console.log("The sum of first 100 numbers is :",ans1,"The sum of first 1000 numbers is :", ans2, "The sum of first 10000 numbers is :",ans3);

// here passing a function to an another function as an argument. 

// function sum(a, b){
//     return a + b;
// }

// function doOperation(a, b, op){ 
//     return op(a, b); // here op is function. passing "op" to another function "a,b" as an argument.
// }

// const ans = doOperation(1, 2, sum);
// console.log(ans)

//------------------------------------------Classes-----------------------------------------------//

class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    
    area() {
        const area = this.width * this.height;
        return area;
    }

    paint() {
        const paint = this.color;
        return paint;
       
    }
}
    const rect = new Rectangle(1, 2, 'red')
    const area = rect.area();
    const paint = rect.paint();
    console.log(area);
    console.log(paint);
