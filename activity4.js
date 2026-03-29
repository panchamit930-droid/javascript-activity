// Nested loops
// Print numbers from 1 to 3, three times each using nested loops
for(let i=1;i<=3;i++){
    for(let j=1;j<=3;j++){
        console.log(i," ",j)
    }
}

// Print a 3 x 3 square of stars.
for(let a=1; a<=3;a++){
    let row=" "
    for(let b=1; b<=3 ;b++){
        row += "*"
    }
    console.log(row)
}

// Write a loop that prints multiplication pairs from 1 to 2 and 1 to 4.
for(let m=1; m<=2; m++){
    for(let n=1; n<=4; n++){
        console.log(m,"*",n);
    }
}

// Arrow functions
// Create an arrow function that returns the square of a number.
const square=(x)=>x*x
console.log(square(10));

// Write an arrow function that checks whether a number is even.
const isEven = (y) => {
    if(y % 2 === 0){
        console.log("True");
    }
    else{
        console.log("False");
    }
}
isEven(6)

// Make an arrow function that joins first name and last name
const joinName=(name1,name2) => name1+" "+name2
console.log(joinName("Lakshmi","Raj"));

// Anonymous Functions
// Store an anonymous function in a variable and print your name.
const printName= function(name){
    console.log("Im ",name);
}
printName("Panchami")

// print a message after 2 seconds.
setTimeout(()=>{
    console.log("Time Out");
}, 5000)

// Intermediate
// Write an IIFE that prints 'Welcome to JavaScript'.
// (function(){
//     console.log('Welcome to JavaScript');
// })();

// Create an IIFE that stores a secret number and prints it.
// (function(){
//     let num=44;
//     console.log("secret : ", num);
    
// })

// callbacks
// Create a function that takes a number and a callback, then passes the doubled value to the callback.
function processNumber(num, callback) {
    let doubled = num * 2;
    callback(doubled);
}

// Using the function
processNumber(5, (result) => {
    console.log(result); // 10
});

// Write a function that prints 'Task done' after a custom callback runs


// Mixed Practice
// Use an arrow function inside a loop to print 1 to 5.
const printNum=(num)=>{
    console.log(num);
}
for(let i=1;i<=5;i++){
    printNum(i)
}

// Write a nested loop that prints a 4-row triangle of stars.
for(let h=1;h<=4;h++){
    let r=" "
    for(let j=1;j<=h;j++){
        r += "*"
    }
    console.log(r); 
}

// Advanced Level




