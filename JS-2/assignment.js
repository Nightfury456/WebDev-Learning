// Q1
let num = 20;
let div = num%10;
if (div == 0){
    console.log("good");
}
else {
    console.log("bad");
}

// // Q2
// let yourName = prompt("enter your name :");
// let yourAge = prompt("enter your age :");
// console.log(yourName,"is",yourAge,"years old.");

// Q3
let quarter = 2;
switch(quarter){
    case 1:
        console.log("January,February,March");
        break;
    case 2:
        console.log("April,May,June");
        break;
    case 3:
        console.log("July,August,September");
        break;
    case 4:
        console.log("October,November,December");
        break;
    default:
        console.log("Invalid!");
}

// Q4
let str="Aditya";
if((str[0]=='A' || str[0]=='a') && str.length>5){
    console.log("golden string");
}
else {
    console.log("not a golden string");
}

// Q5
let a = 5;
let b = 10;
let c = 15;
if(a>b){
    if(a>c){
        console.log("a is the largest number");
    }
    else {
        console.log("c is the largest number");
    }
}
else {
    if(b>c){
        console.log("b is the largest number");
    }
    else {
        console.log("c is the largest number");
    }
}

// Q6
let num1 = 4567;
let num2 = 3467;
if(num1%10==num2%10){
    console.log(num1%10);
}
else {
    console.log("Invalid");
}