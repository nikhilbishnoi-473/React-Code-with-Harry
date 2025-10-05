//Artimetic operators
//block { }
// {
//     let a = 5;
//     let b = 6;
//     console.log("a + b = ", a + b);
//     console.log("a + b = ", a - b);
//     console.log("a * b = ", a * b);
//     console.log("a ** b = ", a ** b);
//     console.log("a % b = ", a % b);
//     console.log("a = ", a + 1);

// }
// let mode = prompt("white")
// let color;
// if (mode === "dark") {
//     color = ("dark");
// } else if (mode === "white") {
//     color = ("white");
// }
// else if (mode === "blue") {
//     color = ("blue");
// } else {
//     color: "red";
// }
// console.log(color);

// let number = prompt();
// if (number % 5 === 0) {
//     console.log("it is devided by 5 =", number);
// }
// else {
//     console.log("it is not devided by 5 = ", number);

// }
// let name = prompt("text write");
// console.log(name);
// for (let i = 1; i <= 19; i++) {
//     console.log("apna collage");
// }

// let sum = 0;
// for (let ii = 0; ii <= 5; ii++) {
//     sum = sum + ii
// }
// console.log("sum = ", sum);

// for (let iii = 0; iii <= 6; iii++) {
//     console.log("iii = ", iii);

// }
// console.log(iii);

// Infinity loop
// for(let y = 0; y >= 0; y++){
//     console.log("y = " , y);
// }
// console.log(y);

// let yy = 1;
// while(yy <= 10){
//     console.log("apna Collage");
//     yy++
// }
// let y = 1;
// do{
//     console.log('y =' , y);
//     y++
// } while(y = 10)
// let yyy = 1;
// do{
//     console.log("collage");
//     yyy++
// } while(yyy <= 20)

// let str = "apna collage";
// let size = 0;
// for(let val of str){
//     console.log("val = ", val);
// size++
// }
// console.log("string size =", size);

// let student = {
//     name: "nikhil bishnoi",
//     age: 20,
//     band: 7.5,
//     isPass: true,
// }
// for (let key in student) {
//     console.log("key = ", key, "value = ", student[key]);
// }
// for(let num = 0; num <= 100; num++){
//     if(num%2 === 0){
//         console.log("it is even number = ", num);
//     } else{

//     }
// }
// let gameNum = 25;
// let userNum = prompt("guess one number :");
// while(userNum != gameNum){
//     userNum= prompt("you number is wrong try again :")
// }
// console.log("congratulations your number is right");

//  let a = "apna collage";
//  console.log(a.toUpperCase());

//  let aa = "apna";
//  let bb = "Collage";
//  console.log(aa.concat(bb));


// let text = ["abc", "cde", "fgh", "soirtu", "ojsfngbvu"]
// for(let txt of text){
//     console.log(txt)
// }
// for( ii = 0; ii < text.length; ii++){
//     console.log(text[ii].toUpperCase());
// }
// let marks = [85, 97,44, 37, 76, 60];
// sum = 0;
// for(let total of marks){
//     sum = sum + total
// }
// let avg = sum/marks.length;
// console.log(`the average marks of all student of class = ${avg}`);


let items = [250, 645, 300, 900, 50];
for (i = 0; i < items.length; i++) {
    let offer = items[i] / 10;
    items[i] -= offer;
}
console.log(items);


let arr = [1, 2, 3, 4, 5, 6]
arr.forEach((val, idx, arr) => {
    console.log(val, idx, arr);

});
let square = [2, 3, 45, 47, 90];
square.forEach((val) => {
    console.log(val * val);

});

let num_b = [30, 40, 50];
let newArr = num_b.map((val) => {
    return val * 2
})
console.log(newArr);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let filterarr = numbers.filter((val) => {
    return val % 2 === 0
})
console.log(filterarr);

let reduceval = [1, 2, 3, 4]
let reducev = reduceval.reduce((res, curr) => {
    return res > curr ? res : curr;
})

console.log(reducev);

let marks = [91, 89, 99, 85, 94, 90];
let marksAll = marks.filter((val) => {
    return val >= 90
})
console.log(marksAll);


let newbtn = document.createElement("button")
newbtn.innerHTML = "click me"
console.log(newbtn);
let box = document.querySelector(".box")
box.append(newbtn)

let nextbtn = document.createElement("button")
nextbtn.innerHTML = "click next btn"
console.log(nextbtn);
let box_2 = document.querySelector(".box_2")
box_2.prepend(nextbtn)


let btnbody = document.createElement("button");
btnbody.innerText = "body button";
btnbody.style.backgroundColor = "red";
btnbody.style.color = "white";
document.querySelector("body").prepend(btnbody);

let click_me = document.querySelector(".click_me");
click_me.onclick = () => {
    console.log("click me button work in console");
    let a = 25;
    a++;
    console.log(a);
    alert("hello")
}
click_me.addEventListener("click", () => {
    console.log("button on click ");
})
click_me.addEventListener("click", () => {
    console.log("button on click-2 ");
})
const heading_3 = () => {
    console.log("button on click-3");
}

click_me.addEventListener("click", () => {
    console.log("button on click-4");
})
click_me.removeEventListener("click", heading_3)
//dark mode or light mode
let modesbtn = document.querySelector(".modesbtn");
let body = document.querySelector("body")
let colorMode = "dark";
modesbtn.addEventListener("click", () => {
    if (colorMode === "light") {
        colorMode = "dark"
        body.classList.add("dark")
        body.classList.remove("light");
    } else {
        colorMode = "light"
        body.classList.add("light")
        body.classList.remove("dark");
    }
    console.log(colorMode);
})

 