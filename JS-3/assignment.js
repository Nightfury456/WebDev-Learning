// q1

let arr = [7,9,0,-2];
let n = 3;
console.log(arr.slice(0,n));

// q2

console.log(arr.splice(1,3));

// q3

if(arr.length == 0){
    console.log("It's blank");
}
else {
    console.log("It's not blank");
}

// q4

let arr1 = ['A','b','C','d'];
let idx = 2;
if(arr1[idx] == arr1[idx].toLowerCase()){
    console.log("yes");
}
else{
    console.log("No");
}


// q5

let arr2 = "   Hello   ";
console.log(arr2.trim());

// q6

let b = 'b';
if(arr1.includes(b)== true){
    console.log("Yes");
}
else {
    console.log("No");
}
