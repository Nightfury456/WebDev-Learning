// this
const obj = {
    name: "Aditya",
    gender: "Male",
    university: "srm",
    rollNo: 1993,
    details(){
        console.log(this); // will print every object
        let d = [this.name,this.gender,this.rollNo];
        return d;
    }
}
console.log(obj);

// try & catch
console.log("hello");
console.log("hello");
    //console.log(a);// will gice error and program will stop here
try {
    console.log(a);
} catch(err) {
    console.log(err);
}
console.log("hello");
console.log("hello");

// Miscellaneous Topics
// ----Arrow Function
const sum = (a, b) => {
    console.log(a+b);
}
sum(2,3);

const pow = (a, b)=>{
    return a**b;
}
console.log(pow(2,3));

    // implicit return
    const mul = (a, b) => a*b;
    console.log(mul(2,3));

// Set Timeout
console.log("Hi there");

setTimeout( () => {
    console.log("ApnaCollege");
}, 4000);

console.log("Welcome to");

// Set Interval - indefinite times execution after given time
console.log("Hi there");

let id = setInterval( () => {
    console.log("Aditya");
}, 2000);
    // clearInterval(id) in console to stop 
console.log(id);

// this with arrow Function
const student = {
    name: "Aditya",
    marks: 95,
    prop: this, // global scope
    getName: function() {
        console.log(this);
        return this.name;
    },
    getMarks: () =>{
        console.log(this); //parent's scope -> window 
        return this.marks;
    },
    getInfo1: function () {
        setTimeout( function (){
            console.log(this); //window
        },2000);
    },
    getInfo2: function () {
        setTimeout( () => {
            console.log(this); //student
        },2000);
    }
};

// Practice question 1

const square = (n)=>(n*n)
console.log(square(4));

// Practice question 2

let id3 = setInterval(()=>{
    console.log("hello World");
},2000);

setTimeout(() => {
    clearInterval(id3);
    console.log("clear interval used");
},10000);