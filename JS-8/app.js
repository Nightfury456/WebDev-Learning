// forEach()
let arr = [1,2,3,4,5];
    // method1
arr.forEach(function (el) {
    console.log(el);
});
    // method2
arr.forEach((el) => {
    console.log(el);
});
    // method3
let print = function(el){
    console.log(el);
};
arr.forEach(print);

    // in objects
let arr1 = [{
    name: "Aditya",
    marks: 95,
},
{
    name: "Ravi",
    marks: 96,
},
{
    name: "Smita",
    marks: 99,
}]

arr1.forEach((students) => {
    console.log(students.marks);
});


// map
let num = [1,2,3,4,5];
let double = num.map((el) => {
    return el*2;
});
console.log(double); // returns an arr of same size
// 
let gpa = arr1.map((el) => {
    return el.marks/10;
})
console.log(gpa);

// filter - prints true values in an array
let nums = [1,2,3,4,5,6,7,8,9];
let ans = nums.filter((el) => {
    return el % 2 == 0;
});
console.log(ans);

// Every - returns true or false (logical AND)
let arr2 = [2,4,6,8];
let ans1 = arr2.every((el) => (el % 2 == 0));
console.log(ans1); // true

// Some - returns true or false (logical OR)

// Reduce - gives single value
let arr3 = [1,2,3,4];
let ans2 = arr3.reduce((res, el) => (res*el));
console.log(ans2);
    // find maximum
    let arr4 = [2,4,1,8,9,6];
    let max = arr4.reduce((max,el) => {
        if(max<el){
            return el;
        } else {
            return max;
        }
    });
    console.log(max);

// practice Question - check all numbers are multiple of 10
let arr5 = [10,20,30,40,50,];
let ans5 = arr5.every((el) => (el % 10 == 0));
console.log(ans5);

// practicr question - find minimum number
let arr6 = [4,5,9,3,10];
let ans6 = arr6.reduce((min, el) => {
    if(min>el){
        return el;
    } else {
        return min;
    }
});
console.log(ans6);
    // usinf function
    function getMin(arr6) {
        let ans6 = arr6.reduce((min, el) => {
            if(min>el){
                return el;
            } else {
                return min;
            }
        });
        return ans6;
    }
    console.log(getMin(arr6));

// Default Parameters
function sum1(a,b=2){
    return a+b;
}
console.log(sum1(1,4)) // 5
console.log(sum1(1)) // 3 since b = 2

// Spread
let arr7 = [1,2,3,4,5,6,7,8,9,0]
console.log(arr7);
console.log(...arr7); // will print the elements separately
console.log(Math.min(...arr7));
console.log(Math.max(...arr7));
console.log(..."Aditya");
    // array literals
let newarr = [...arr7]; // copying using spread
console.log(newarr);
let chars = [..."Aditya"] // storing string in array using spread
console.log(chars);
let odd = [1,3,5,7,9];
let even = [2,4,6,8];
let nums1 = [...odd, ...even]; // storing two arrays in a single array
console.log(nums1);
    // object literal
const detail = {
    email: "aditya@gmail.com",
    name: "Aditya"
};
const detail1 = {...detail, id: 123, country: "India"}; // storing object using spread
console.log(detail1);
let obj2 = {...arr7}; // storing array in object using spread.index becomes the keys
console.log(obj2);
let obj1 = {..."Aditya"} // index becomes the keys
console.log(obj1);

// Rest
function sum(...args) { // arguments
    for(let i=0; i<args.length; i++){
        console.log("you gave us:", args[i]);
    }
    return args.reduce((sum, el)=> sum + el);
}

// Destructuring
let names = ["Aditya", "Ravi", "Arun", "Jay", "Aakash", "Sahil"];
// let winner = names[0];
// let runnerup = names[1];
// let secondRunnerup = names[2];
let [winner, runnerup, ...others] = names;

    // for objects
    const student = {
        name: "aditya",
        class: 9,
        age: 14,
        subjects: ["Hindi", "English", "Math","Science"],
        username: "abc@2008",
        password: "nightfury"
    };
    // let username = student.username;
    // let password = student.password;
    let {username: user, password: pass, city = "Mumbai"} = student;

