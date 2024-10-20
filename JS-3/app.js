let msg = "   hello   ";
// let pass = prompt("Enter your password");
// console.log(pass.trim());

console.log(msg.toUpperCase());
console.log(msg.toLowerCase());

console.log(msg.indexOf("llo"));// returns starting index
// returns -1 for not found

//for multiple methods (method chaining)
console.log(msg.toUpperCase().trim());

//slice - to get the perticuler words from the string
let str = "Aditya"
console.log(str.slice(0,4));//4 is not included

console.log(str.slice(2));// returns from 2 to last

console.log(str.slice(-2));// returns from length-2 to last

// replace
console.log(str.replace("A","a"));

// repeat
console.log(str.repeat(2));//prints 2 times

// array
let students = ["aditya","ravi","suraj"];
console.log(students);
console.log(students[2]);

console.log(students[1][0]);// will print "a" of "aditya"
console.log(students.push("aman"));// will print length after adding the given element in the end.
console.log(students.pop());// will print the last element of the array and remove it from the array.
console.log(students.unshift("ram"));// will print length after adding the given element in the start.
console.log(students.shift());// will print the first element of the array and remove it from the array.
console.log(students.iddexOf("aditya"));//returns index of the given element if found.
console.log(students.iddexOf("rahul"));// will give -1.
console.log(students.includes("aditya"));// will return true if the elemetn is present or false. 

let rollno = [1,2,3];
console.log(students.concat(rollno));// returns addition of both arrays.

console.log(students.reverse());// prints array in reverse order. Its permanent.
console.log(students.slice());// same as string slice.not permanent.

console.log(students.splice(startIndex,totalnumbers,item1,item2,item3..));// splice syntax. it is permanent
console.log(students.sort());// only for string elements.
