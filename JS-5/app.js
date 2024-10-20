// object literals - can use let keyword

        const student = {
            name: "Aditya",
            age: 19,
            cgpa: 9.5,
        };

        const item = {
            price: 100,
            discount: 50,
            color: ["red","pink"],
        };

// thread/twitter post
        const post = {
            username: "@adityakiran",
            content: "This is my post",
            like: 150,
            reposts: 5,
            tags: ["@ravi","@arun"],
        };

// get values

        post["username"]; //or
        post.username;

// add/update values
        post.username = "@kiran"; //username will get updated
        post.earning = 450; // new element will be added
        delete postMessage.earning; //to delete

// object of objects

        const classInfo = {
                aditya : {
                        grade : "A+",
                        city : "Delhi"
                },
                ravi : {
                        grade : "A",
                        city : "Bangalore"
                },
        }

        classInfo.aditya;
        classInfo.aditya.city;

// array of objects

        const classStudents = [
                {
                        name : "Aditya",
                        grade : "A+",
                        city : "Delhi"
                },
                {
                        name : "Ravi",
                        grade : "A",
                        city : "Bangalore"
                },
        ]

        classStudents[0];
        classStudents[1].city;

// Math Object
        // properties
                Math.PI;
                Math.E;
        // methods
                Math.abs(12);// will print 12
                Math.abs(-12);// will print 12. Prints positive number
                Math.pow(2,4)// 16
                Math.floor(11.6);// 11. prints round of to nearest smallest int value
                Math.floor(-11.5)// -12
                Math.ceil(5.1)// 6. prints nearest largest int value
                Math.ceil(-5.1)// -5
                Math.random()// any random value between 0 to 1 with not 1 included.

// generate random integer

        let num = Math.random();
        num = num*10;
        num = Math.floor(b);
        num = num+1;// since range is 0-9 and to generate 10 we add 1.
        // single step 
        let num1 = Math.floor(Math.random()*10) + 1;