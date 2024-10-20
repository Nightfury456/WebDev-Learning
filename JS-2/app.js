console.log("Hello World!");
console.log("Aditya Kiran Choudhary");
let a =10;
let b =5;
let sum = "Sum is : "+(a+b)+" rupees";
console.log(sum);
console.log("Sum is : ",a+b,"rupees");
console.log(`Sub is : ${a-b} rupees`);

// comparison operator
let age =15;
console.log(age>18);//false
console.log(age<18);//true
//== only value
//=== type and value both
if (age>=18) {
    console.log("You can vote");
}else {
    console.log("You can not vote");
}

// trafic light using if
let color = "green";
if(color=="red"){
    console.log("Stop");
}
else if(color=="yellow"){
    console.log("be Ready");
}
else if(color=="green"){
    console.log("Go");
}

//practice question 

let day = 2;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid!");
}

// alert, error, warning

// alert("This is an alert");
console.error("This is an error");
console.warning("This is a warning");

// prompt
let myname = prompt("enter your name : ");
console.log(myname);