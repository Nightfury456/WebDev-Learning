let todo = [];
// console.log(todo);

let req = prompt("enter your request:");

while(true){
    if(req == "quit"){
        console.log("you quit");
        break;
    }
    if(req == "list"){
        for(list of todo){
            console.log(list);
        }
    } else if(req == "add"){
        while(true){
            let task = prompt("enter the index where you want to add:");
            todo.splice(idx,0,task);
            console.log("element added");
            for(list of todo){
                console.log(list);
            }
            break;
        }
        req = prompt("enter your request:");
    } else if(req == "delete"){
        while(true){
            let idx = prompt("enter index to delete");
            todo.splice(idx,1);
            console.log("index element deleted");
            for(list of todo){
                console.log(list);
            }
            break;
        }
    } else {
        console.log("invalid request");
    }
}