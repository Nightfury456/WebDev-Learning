// Call Stack
// Breakpoint

// js single Threaded - one thing at a time


// callback Hell -> callback nesting

// let h1 = document.querySelector("h1");

    // setTimeout(()=>{
    //     h1.style.color = "red";
    // },1000);

    // setTimeout(()=>{
    //     h1.style.color = "orange";
    // },2000);

    // setTimeout(()=>{
    //     h1.style.color = "green";
    // },3000);

// function changeColor(color,delay, nextColorChange) {
//     setTimeout(()=>{
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay);   
// }

// changeColor("red",1000, ()=>{
//     changeColor("orange",1000, ()=>{
//         changeColor("green",1000);
//     });
// });


// using promise for above callback hell

let h1 = document.querySelector("h1");

function changeColor(color,delay) {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            h1.style.color = color;
            resolve("Color changed");
        }, delay); 
    });
}

// changeColor("red",1000, ()=>{
//     changeColor("orange",1000, ()=>{
//         changeColor("green",1000);
//     });
// });

changeColor("red",1000)
.then(()=> {
    console.log("changed to red")
    return changeColor("orange",1000); 
})
.then(()=> {
    console.log("changed to orange")
    return changeColor("green",1000); 
})
.then(()=> {
    console.log("changed to green");
});


// function saveToDb(data, success, failure) {

//     let netSpeed = Math.floor(Math.random()*10) + 1;
//     if(netSpeed > 4){
//         success();
//     } else {
//         failure();
//     }
// }

// saveToDb("Aditya", ()=>{
//     console.log("Data is saved");
//     saveToDb("Ravi", ()=>{
//         console.log("Data is saved");
//         saveToDb("SMita", ()=>{
//             console.log("Data is saved");
//             saveToDb("Arun", ()=>{
//                 console.log("Data is saved");
//             }, ()=>{
//                 console.log("Weak connection. Data not saved")
//             });
//         }, ()=>{
//             console.log("Weak connection. Data not saved")
//         });
//     }, ()=>{
//         console.log("Weak connection. Data not saved")
//     });
// }, ()=>{
//     console.log("Weak connection. Data not saved")
// });



// Promise - fullfiled, rejected, pending

// function saveToDb(data) {
//     return new Promise((resolve, reject)=>{
//         let netSpeed = Math.floor(Math.random()*10) + 1;
//         if(netSpeed > 4){
//             resolve("Success: Data was saved");
//         } else {
//             reject("Failure: Weak connection");
//         }
//     });
// }

// saveToDb("Aditya")
// .then((result)=> {
//     console.log("data 1 saved");
//     console.log(result); // resolve
//     return saveToDb("Ravi");
// })
// .then((result)=> {
//     console.log("data 2 saved");
//     console.log(result);
// })
// .catch((error)=> {
//     console.log("Promise was rejected");
//     console.log(error); // reject
// });