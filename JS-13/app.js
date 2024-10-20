// axios - removes parse step

    // let url = "https://catfact.ninja/fact";

    // let btn = document.querySelector("button");
    // let p = document.querySelector("p")

    // btn.addEventListener("click", async ()=> {
    //     let fact = await getFacts();
    //     console.log(fact);
    //     p.innerText = fact;
    // });

    // async function getFacts() {  
    //     try{
    //         let res = await axios.get(url);
    //         return res.data.fact;
    //     } catch (error){
    //         console.log("Error - ", error);
    //         return "No facts found";
    //     }   
    // }



// sending headers with API request

    // const url = "https://icanhazdadjoke.com/";

    // async function getJokes() {
    //     try {
    //         const config = { headers: { Accept: "application/json"} };
    //         let res = await axios.get(url, config);
    //         console.log(res.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // getJokes();



// Query string

    // let url = "http://universities.hipolabs.com/search?name=";
    // let btn = document.querySelector("#submit");

    // btn.addEventListener("click", async ()=> {
    //     let country = document.querySelector("input").value;
    //     console.log(country);
    //     let colArr = await getColleges(country);
    //     show(colArr);
    // });

    // function show(colArr) {
    //     let list = document.querySelector("#list");
    //     list.innerText = "";
    //     for(col of colArr) {
    //         console.log(col.name);

    //         let li = document.createElement("li");
    //         li.innerText = col.name;
    //         list.appendChild(li);
    //     }

    // }

    // async function getColleges(country) {
    //     try {
    //         let res = await axios.get(url + country);
    //         return res.data;
    //     } catch(error) {
    //         console.log("Error - ", error);
    //         return [];
    //     }
    // }


// homework for above problem with states name