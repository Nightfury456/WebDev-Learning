// Q1
function lNumber(n){
    let arr = [5,8,15,26,1,2,4];
    for(let i=0; i<arr.length; i++){
        if(arr[i]>n){
            console.log(arr[i]);
        }
    }
}
lNumber(6);

// Q2
let str = "abcdabcdefgggh";
let ans = "";
function uChar(str){
    for(let i=0; i<str.length; i++){
        let curr = str[i];
        if(ans.indexOf(curr) == -1){
            ans += curr;
        }
    }
    return ans;
}
console.log(uChar(str));

// Q3
let country = ["Australia", "Germany", "United States of America"];
function lCountry(country){
    let longestC = country[0];
    for(let i=0; i<country.length; i++){
        if(longestC.length < country[i].length){
            longestC = country[i];
        }
    }
    return longestC;
}
console.log(lCountry(country));

// Q4
let name = "aditya Kiran Choudhary";
function countV(name){
    let count = 0;
    for(let i=0; i<name.length; i++){
        if(name[i]=="a"|| name[i]=="e"|| name[i]=="i"|| name[i]=="o"|| name[i]=="u"){
            count++;
        }
    }
    return count;
}
console.log(countV(name));

// Q5
function range(start,end){
    let randomN = Math.floor(Math.random()*(end-start))+100;
    return randomN;
}
console.log(range(100,200));