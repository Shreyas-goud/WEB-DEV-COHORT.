// JavaScript is a single threaded non-blocking asynchronous concurrent language.

//-----------------programs-------------------
//----------------find sum of two numbers-----

// function sum(a,b){
//     return a + b;
// }
// const ans = sum(2, 5);
// console.log(ans);

//--------passing string as an argument to the above sum operation---

// function sum(a,b){
//     return a + b;
// }
// const ans = sum("4", 8); // here "4" acts as a string and concatinates with 8.
// console.log(ans); // because  string "4" concatinates with 8 the output will be 48.

//-------find sum from 1 to n--------------

// function sum(n){
//    let ans = 0; // here ans=0 is the starting point of the loop
//     for(let i = 1; i<=n; i++){ iteration starts with 1 till i <= n which means 0+1+2+....+n; stops at n point.
//         ans = ans + i // the "ans" value 0 increments with + i.  
//     }
//     return ans;
// }
//     const ans = sum(15);
//     console.log(ans);

// --------I/O heavy operations -----------------------
//------------Example--------------------

// const fs = require('fs');
// const data = fs.readFileSync("a.txt", "UTF-8");
// console.log(data);

//-------executing files synchronously-----------

// const fs = require('fs');

// const data1 = fs.readFileSync("a.txt", "UTF-8");
// console.log(data1);

// const data2 = fs.readFileSync("b.txt", "UTF-8");
// console.log(data2);

//----------executing a file asynchronously other file synchronously -----------

// const fs = require("fs");

// fs.readFile("a.txt", "UTF-8", (err, data1)=>{
   
//     if(err){
//         console.error("error is:", err); 
//         return;
//     }
//     else {
//         console.log("asynchronous execution:",data1);
//     }
              
// });

// const data2 = fs.readFileSync("b.txt", "UTF-8");
// console.log("Synchronous execution:",data2);

//--------------------I/O Bound Task-----------------------// this can be said Synchronously (one-by-one)

// const fs = require("fs")
// const data = fs.readFileSync("a.txt", "UTF-8");
// console.log(data);

//----------------------CPU Bound Task----------------------// this can be said Asynchronously ( concurrently )

// const fs = require('fs');

// fs.readFile("a.txt", "UTF-8", (err, data1)=>{
//     console.log(data1);
// });

// fs.readFile("b.txt", "UTF-8", (err, data2)=>{
//     console.log(data2);
// });

//--------------------------Functional Arguments-----------------------
// #####################-Approach-1-###################

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

// const ans = sum(1, 5);
// console.log(ans);

// #######################-Approach-2-######################

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
//     return op(a, b);
// }

// const ans = doOperation(1, 8, sum);
// console.log(ans);                  //-----one way of execution------

// console.log(sum(12, 8));          //----other way of execution------

// -------------------Asynchronous Code and Callbacks()----------------

// const fs = require('fs');

// function print(err, data) {           // read file => op(err, content)
//     console.log(data);
// }
// fs.readFile("a.txt", "UTF-8", print);
// fs.readFile("b.txt", "UTF-8", print);  //function readfile(filepath, encoding, operation);

// function readfile(filepath, encoding, op){
//     op("err", "content");
// }

//-------------------if error occurs and doesn't occur in a code----------------

// ###################################--------Approach-1-----####################

// const fs = require("fs");

// function print(err, data){
//     console.log("error is");
//     console.log(err);
//     console.log("data is");
//     console.log(data);
// }
// fs.readFile('a.txt', 'UTF-8', print);
// fs.readFile('c.txt', 'UTF-8', print);

// ################################-------------Approach-2-----#######################

// const fs = require('fs')

// function print(err, data){

//   if(err){
//         console.log(err);
//   }
//     else{
//         console.log(data);
//   }
// }
// fs.readFile('a.txt', 'UTF-8', print);

