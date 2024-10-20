// Function
function hello(){
    console.log("Hello");
}

hello(); // calling function hello()

function printName(){
    console.log("Aditya");
    console.log("Kiran");
}

printName();

function print(){
    for(let i=1; i<=5; i++){
        console.log(i);
    }
}

print();

// practice Question
function poem(){
    console.log("Twinkle Twinkle little star");
    console.log("How I wonder what you are.");
}

poem();

// practice question
function dice(){
    let num = Math.floor(Math.random()*6) + 1;
    console.log(num);
}

dice();

// Parameters
function printName1(name, age){
    console.log(`${name}'s age is ${age}.`);
}

printName1("Aditya", 19);
printName1("Ravi"); // Ravi's age is undefined.
printName1(19); // 19's age is undefined

// practice question
function average(a, b, c){
    let avg = (a+b+c)/3;
    console.log(`average of the numbers are ${avg}`);
}

average(3,6,9);

// practice question multiplication table
function mulTable(n){
    for(let i=1; i<=10; i++){
        let mul = n*i;
        console.log(`${n} X ${i} = ${mul}`);
    }
}

mulTable(4);

// Return Keyword
function sum(a, b){
    console.log("Hello");
    return a+b;
    console.log("hello"); // this statement will not get executed after return
}
    // let s = sum(1,2);
    // sum(sum(1,2),3) will print 6
console.log(sum(1,2));

// Practice Question
function sum1(n){
    let s1=0;
    for(let i=1; i<=n; i++){
        s1 += i;
    }
    return s1;
}
console.log(sum1(10));

// Practice question
let arr2 = ["My ", "name ", "is ", "Aditya."];
function concat(arr2){
    let concat1 = "";
    for(let i=0; i<arr2.length; i++){ 
        concat1 += arr2[i];
    }
    return concat1;
}
console.log(concat(arr2));

// Scope
let sum2 =54;// Global Scope- can be used anywhere

function calcSum(a,b){
    let sum2 = a+b; // Function Scope - can be used inside only function
    console.log(sum2);
}
calcSum(1,2);
    // block scope
    // Lexical Scope - function inside another function


// Function Expressions
let sum3 = function(a,b){
    return a+b
}
console.log(sum3(5,7));

// Higher Order Functions
function mulGreet(func, count){
    for(let i=1; i<=count; i++){
        func();
    }
}
let greet = function (){
    console.log("Hello");
}
mulGreet(greet, 10);

let request = "";
let oddEven = function(request){
    if(request == "odd"){
        return function(n){
            console.log(!(n%2 == 0));
        }
    }
    else if(request == "even"){
        return function(n){
            console.log(n%2 == 0);
        }
    }
    else{
        console.log("wrong request");
    }
}

// Methods
const calculator = {
    add: function(a,b){
        return a+b;
    },
    sub: function(c,d){
        return c-d;
    },
    mul: function(e,f){
        return e*f;
    }
}
    // shorthand
    const calculator1 = {
        add(a,b){
            return a+b;
        },
        sub(c,d){
            return c-d;
        },
        mul(e,f){
            return e*f;
        }
    }