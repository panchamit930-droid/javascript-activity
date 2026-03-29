// foreach()
//  Print all elements of an array.
// let arr=[5,9,10]
// let newArr=arr.forEach(num=>console.log(num));

//  Print each number after adding 10.
// let arr=[5,8,7,3]
// let newArr=arr.forEach((item)=>console.log(item+10));

//  Print the square of each number.
// let arr=[5,8,7,3]
// arr.forEach(item=>console.log(item*item))

//  Print all strings in uppercase.
let name =["Manu","Sai","Lakshmi"]
name.forEach(item=>console.log(item.toUpperCase()))

// Count the total elements using an external variable.
let arr=[5,8,7,3]
let count=0
arr.forEach(item=>count++)
console.log(count);


// intermediate
//  Sum all numbers using an external variable
let values=[51,23,98,41]
let sum=0
values.forEach(item=>sum+=item)
console.log(sum)

//  Count how many even numbers are in the array.
let numbers=[51,23,98,41]
let evnCount=0
numbers.forEach(item=>{
    if(item % 2 === 0){
        evnCount++
    }
})
console.log(evnCount);

//  Push doubled values into a new array.
let array=[4,9,7,5,3]
let newArray=[]
array.forEach(item=>{
    newArray.push(item*2)
})
console.log(newArray);

// Print each index along with its value.
let arrSet=[52,63,78,45]
arrSet.forEach((item,index)=>{
    console.log(index ,":" ,item);  
})

//  Convert an array of words into their lengths.
let words= ['book', 'pen', 'notebook']
let lenArray=[]
words.forEach(item=>lenArray.push(item.length))
console.log(lenArray);

// map()
// basic
//  Double each number in an array.
// let ar=[4,9,7,5,3];
// let newAr=ar.map(item=>item*2)
// console.log(newAr);

//  Convert numbers into strings.
// let ar=[4,9,7,5,3];
// let newAr=ar.map(item=>item.toString())
// console.log(newAr);

//  Convert all strings to uppercase.
// let str=['mang','rj','tata']
// let newAr=str.map(item=>item.toUpperCase())
// console.log(newAr);

//  Get the length of each word.
// let str=['mang','rj','tata']
// let newAr=str.map(item=>item.length)
// console.log(newAr);

// Add 5 to every element.
// let ar=[4,9,7,5,3];
// let newAr=ar.map(item=>item+5)
// console.log(newAr);

// Extract only the names from an array of objects.
// let objArray= [{ name: 'A' }, { name: 'B' }]
// let newArr=objArray.map(item=>item.name)
// console.log(newArr);

//  Add GST to each product price.
// let proPrice = [{ price: 500 }, { price: 1000 }]
// let newArr=proPrice.map(item=>item.price+(item.price * 0.18))
// console.log(newArr);

//  Format first name and last name into full names.
// let n = [1, 2, 3, 4, 5];
// let result = n.map(num => num % 2 === 0);
// console.log(result);

//  Convert an array into objects like { value: x }.
let a = [1, 2, 3, 4];
let result = a.map(num => ({ value: num }));
console.log(result);