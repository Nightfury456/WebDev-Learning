// // DOM Manipulation
//     // Query Selectors
//     document.querySelector('p'); // Selects first p elemenet
//     document.querySelector('#myId'); // Select first element with id = myId
//     document.querySelector('.myClass'); // selects first element with class = myClass

//     document.querySelectorAll("p"); // selects all p elements

//     // innerText - shows the visible text 
//     // textContent - shows full text including hidden texts
//     // innerHTML - shows full mark like b tag, a tag, styling etc

// // Attributes Manipulation
//     let img = document.querySelector('img');
//     img.getAttribute('id'); // myimg
//     img.setAttribute('id', 'spidermanImg'); // new id is 'spidermanImg'

// // Manipulating Styling - inline styling
//     let heading = document.querySelector('h1');
//     heading.style;
//     heading.style.color = 'purple';
//     heading.style.backgroundColor = 'yellow';

//     let links = document.querySelectorAll('.box a');
//     // for(let i = 0; i<links.length; i++) {
//     //     links[i].style.color = "red";
//     // }

//     for(link of links) {
//         link.style.color = "red";
//     }

//     // classList
//     heading.classList; // shows all classes for heading
//     heading.classList.add("abc") // class abc is added
//     heading.classList.remove("abc");
//     heading.classList.contains("abc"); // true/false
//     heading.classList.toggle("abc"); //removes abc if its there
//     heading.classList.toggle("abc"); //added abc if not there
    
// // Navigation
//     let h4 = document.querySelector('h4');
//     h4.parentElement; // div
//     h4.children; // empty

//     let box = document.querySelector('.box');
//     box.children; // 2, [h4,ul]
//     box.childElementCount; // 2
//     box.children[0]; //h4

//     box.children[1].previousElementSibling; // h4
//     box.children[0].nextElementSibling; // ul

// // Adding Elements
//     document.createElement('p');
//     let newP = document.createElement('p');
//     newP.innerText = "Hi, I am a new P.";

//     // appenChild()
//     let box1 = document.querySelector('box');
//     box1.appendChild(newP); // goes to the last in body tag

//     // append()
//     newP.append("Give me some space.");

//     // prepend()
//     box1.prepend(newP); // adds at the top

//     // insertAdjacentElement(position, element)
//     let btn = document.createElement("button");
//     btn.innerText = "Click me!"
//     let p = querySelector('p');
//     p.insertAdjacentElement('beforebegin', btn); // inserts before p starts
//     p.insertAdjacentElement('afterbegin', btn); // inserts at top of p inside p
//     p.insertAdjacentElement('beforeend', btn); // inserts at bottom of p inside p
//     p.insertAdjacentElement('afterend', btn); // inserts after p is finished

// // Remove Elements
//     // removeChild()
//     let body = document.querySelector('body');
//     body.removeChild(btn);

//     // remove(element)
//     btn.remove();

// Practice qyestions
// 1.
let p1 = document.createElement("p");
p1.innerText = "Hey I'm red!";
let body = document.querySelector('body');
body.append(p1);
p1.classList.add("red");

// 2.
let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3!";
body.append(h3);
h3.classList.add("blue");

// 3
let div1 = document.createElement("div");
let h1 = document.createElement("h1");
h1.innerText = "I'm in a div";
let p3 = document.createElement("p");
p3.innerText = "ME TOO!"

div1.classList.add("black");
div1.append(h1);
div1.append(p3);

body.append(div1);