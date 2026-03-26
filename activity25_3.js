// Exercise 1: Sum All Numbers (for loop)
let array = [4,7,5,9,10,6];
let sum = 0;
for(let i=0 ; i<array.length ; i++){
    sum += array[i];
}
console.log(sum);

// Exercise 2: Print Array (for-of loop)
let animals = ['cat','dog','elephant','monkey'];
for(let animal of animals){
    console.log(animal);  
}

// Exercise 3: Object Properties (for-in loop)
let person =  {name: "Alice", age: 25, city: "NYC"};
for(let key in person){
    console.log(key, ":", person[key]);
}

// Exercise 4: Character Count (for-of loop)
let string = "Hello World";
let count = 0;
for(let char of string){
    if(char !== " "){
        count += char.length
    }
}
console.log(count);

// intermediate
// Exercise 5: Multiplication Table (for loop)
// for (let i = 1; i <= 5; i++) {
//     let row = "";
    
//     for (let j = 1; j <= 5; j++) {
//         row += `${i}x${j}=${i * j} `;
//     }
    
//     console.log(row);
// }

// Exercise 6: Find Maximum (for loop)
let arr1 = [5, 2, 8, 1, 9, 3];
let maxValue = arr1[0];
let index = 0;
for(let i=0 ; i<arr1.length ; i++){
    if(arr1[i]>arr1[i+1]){
        maxValue = arr1[i];
        index=i;
    }
}
console.log('Max. value is ', maxValue);
console.log('index is',index);

// Exercise 7: Filter Even Numbers (for-of loop)
let numbers =  [1, 2, 3, 4, 5, 6];
let newArray = [];
for(let number of numbers){
    if(number % 2 === 0){
        newArray.push(number);
    }
}
console.log(newArray);

// Exercise 8: Count Property Values (for-in loop)
// let objArray =  [{status: "active"}, {status: "active"}, {status: "inactive"}];
// let cnt = 0;
// for(let elements of objArray){
//     for(let key in elements){
//         let value = key
//     }
    
// }



