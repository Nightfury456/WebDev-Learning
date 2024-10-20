// async function - generates a promise automatically

    // async function greet() {
    //     // throw "some random error";
    //     return "hello!";
    // }

    // greet()
    // .then((result)=> {
    //     console.log("promise was resolved");
    //     console.log("result was : ", result);
    // })
    // .catch((error)=> {
    //     console.log("promise was rejected with error : ", error);
    // });

// await keyword

    // function getNum() {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(()=> {
    //             let num = Math.floor(Math.random()*10) + 1;
    //             console.log(num);
    //             resolve();
    //         }, 1000);
    //     });
    // }

    // async function demo() {
    //     await getNum();
    //     await getNum();
    //     getNum();
    // }



// color fucntion JS-11

    // let h1 = document.querySelector("h1");

    // function changeColor(color,delay) {
    //     return new Promise((resolve, reject)=> {
    //         setTimeout(()=>{
    //             h1.style.color = color;
    //             console.log(`color is changed to ${color}`);
    //             resolve("Color changed");
    //         }, delay); 
    //     });
    // }

    // async function demo() {
    //     await changeColor("red",1000);
    //     await changeColor("blue",1000);
    //     await changeColor("green",1000);
    //     changeColor("purple",1000);
    // }
    // demo();



// access json data

    // let jsonRes = '{"fact":this is a cat, "length": 13}';

    // let validRes = JSON.parse(jsonRes);
    // console.log(validRes.fact);

    // let student = {
    //     name: "Aditya",
    //     marks: 95,
    // };

    // console.log(JSON.stringify(student));



// First API request

    // let url = "https://catfact.ninja/fact";

    // fetch(url)
    //     .then((res)=> {
    //         return res.json();
    //     })
    //     .then((data)=> {
    //         console.log("fact 1: ",data.fact);
    //         return fetch(url);
    //     })
    //     .then((res)=> {
    //         return res.json();
    //     })
    //     .then((data2)=> {
    //         console.log("fact 2: ",data2.fact)
    //     })
    //     .catch((err)=> {
    //         console.log("ERROR - ",err);
    //     });



// above api using async/await

    let url = "https://catfact.ninja/fact";

    async function getFacts() {
        try{
            let res = await fetch(url);
            let data = await res.json();
            console.log(data.fact);

            let res2 = await fetch(url);
            let data2 = await res2.json();
            console.log(data2.fact);
        } catch (error){
            console.log("Error - ", error);
        }
    }
    getFacts();