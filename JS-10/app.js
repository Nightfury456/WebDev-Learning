// let btn = document.querySelector('button');
// console.dir(btn);
// btn.onclick = function () {
//     console.log("Button was clicked");
// }

// function sayHello() {
//     alert("Hello");
// }
// btn.onclick = sayHello;

let btns = document.querySelectorAll("button");

for(btn of btns){
    // btn.onclick = sayHello;
    // btn.onmouseenter = function () {
    //     console.log("you entered a button");
    // };
    btn.addEventListener("click", sayHello);
    btn.addEventListener("click", sayName);
}

function sayHello() {
    alert("Hello");
}

function sayName() {
    alert("Aditya");
}

// this in Event listener
let btn = document.querySelector("button");
btn.addEventListener("click", function() {
    // console.log(this); // this = btn
    this.style.backgroundColor = blue;
    console.dir(this);
});

let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

function changecolor() {
    this.style.backgroundColor = blue;
    console.dir(this);
}

p.addEventListener("clicked", changecolor());
h1.addEventListener("clicked", changecolor());
h3.addEventListener("clicked", changecolor());

// Keyboard Events
let inp = document.querySelector("input");

inp.addEventListener("keydown", function(){
    console.log("Key was Pressed");
});

inp.addEventListener("keyup", function(event){
    console.log(event);
    console.log(event.code);
    console.log(event.key);
    console.log("Key was released");
});

let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("form is submitted");
});

// Extracting Form Data
let form1 = document.querySelector("form");

form1.addEventListener("submit", function(event){
    event  .preventDefault();
    
    let inp1 = document.querySelector("input");
    console.dir(inp);
    console.log(inp.value);

    let user = document.querySelector("#user"); //this.element[0]
    let pass = document.querySelector("#pass"); //this.element[1]

    console.log(user.value);
    console.log(passvalue);

    alert(`Hi ${user.value}, your password is ${pass.value}`);
});

// change event - tracks initial and final value
let form2 = document.querySelector("form");

form1.addEventListener("submit", function(event){
    event  .preventDefault();
});

let user = document.querySelector("#user")
user.addEventListener("change", function (){
    console.log("Input changed");
    console.log("final value = ", this.value)
});

// input event - tracks word to word
let user = document.querySelector("#user")
user.addEventListener("input", function (){
    console.log("Input changed");
    console.log("final value = ", this.value)
});