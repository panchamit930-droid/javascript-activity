// if else practice
// Exercise 1
let score = 70;
if (score >= 90){
    console.log("Grade A");   
}
else if (score >= 80){
    console.log("Grade B");   
}
else if (score >= 70){
    console.log("Grade C");   
}
else {
    console.log("Grade F");   
}

// Exercise 2 
let num = 10;
if(num % 2 === 0){
    console.log(num, ' is even');  
}
else{
    console.log(num, ' is odd');
}

// Exercise 3 
let age = 15;
if (age >= 18){
    console.log("R-rated movie allowed");  
}
else if (age >= 13){
    console.log("PG-13 movie allowed");  
}
else{
    console.log("Pnly G movies allowed");  
}

// Exercise 4
let temp = 20;
if (temp > 30){
    console.log("Wear light clothes and sunscreen");
}
else if (temp <= 30 && temp >= 20){
    console.log("Wear casual clothes");
}
else if (temp <= 19 && temp > 10){
    console.log("Wear a jacket");
}
else{
    console.log("Wear heavy winter gear"); 
}

// Exercise 5 
let username = "admin";
let password = "wrong123";
if (username === "admin" && password === "password123"){
    console.log("Login successful");
}
else if (username !== "admin" && password === "password123"){
    console.log("Username incorrect");
}
else {
    console.log("Password incorrect");
}

// Exercise 6 
let light = "red";
if (light == "red"){
    console.log("STOP!");
}
else if(light == "yellow"){
    console.log("SLOW DOWN!");
}
else{
    console.log("GO!");
}

// Exercise 7
// let amount=600;
// let member=true;


// Switchcase problems

// Exercise 1
let day=5;
switch(day){
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break;
    case 3:
        console.log("WEDNESDAY");
        break;
    case 4:
        console.log("THURSDAY");
        break;
    case 5:
        console.log("FRIDAY");
        break;
    case 6:
        console.log("SATURDAY");
        break;
    case 7:
        console.log("SUNDAY");
        break;
    default:
        console.log("...Invalid day...");    
}

// Exercise 2 
let fruit = "banana"
switch(fruit){
    case 'apple':
        console.log('red');
        break;
    case 'banana':
        console.log('yellow');
        break;
    case 'grape':
        console.log('purple');
        break;
    case 'lime':
        console.log('green');
        break;
    default:
        console.log('Unknown fruit');
}

// Exercise 3 
let browser = "Edge";
switch (browser){
    case 'chrome':
        console.log("V8 Engine");
        break;
    case 'firefox':
        console.log("SpiderMonkey");
        break;
    case 'safari':
        console.log("JavaScriptCore");
        break;
    case 'Edge':
        console.log("V8 Engine");
        break;
    default:
        console.log("Unknown browser");       
}

// Exercise 4 
let char = "E";
switch(char){
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("Vowel");
        break;
    default:
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')){
            console.log("Consonants");
        }
        else{
            console.log("Invalid input");
        }     
}

// Exercise 5  
let num1 = 10;
let num2 = 5;
let operator = "*";
switch(operator){
    case '+':
        console.log( num1 , " + ", num2 , " = " , num1+num2 );
        break;
    case '-':
        console.log( num1 , " - ", num2 , " = " , num1-num2 );
        break;
    case '*':
        console.log( num1 , " x ", num2 , " = " , num1*num2 );
        break;
    case '/':
        console.log( num1 , " / ", num2 , " = " , num1/num2 );
        break;
    default:
        console.log('Invalid operator');
}

// Exercise 6
let month = "February"
let isLeapYear = true
switch (month){
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
        console.log("31 Days");
        break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
        console.log("30 Days");
        break;
    case 'February':
        if (isLeapYear == true){
            console.log("29 Days");
        }
        else{
            console.log("28 Days");
        }
        break;
    default:
        console.log("Invalid Month");
}

// Exercise 7
let grade = "b";

switch (grade.toUpperCase()) {
  case "A":
    console.log('GPA : 4.0');
    break;
  case "B":
    console.log('GPA : 3.0');
    break;
  case "C":
    console.log('GPA : 2.0');
    break;
  case "D":
    console.log('GPA : 1.0');
    break;
  case "F":
    console.log('GPA : 0.0');
    break;
  default:
    console.log('Invalid grade');
}

