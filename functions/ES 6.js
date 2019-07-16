// if you create a variable using const keyword you wont bq able to change it

const PI = 3.14;
console.log(PI);

// using const keyword for obj holds the refrence not the value, so we can use const for obj
const obj = {
    name : 'JS', version : 'ES6'
}

obj.name = 'Javascript';

console.log(obj)

//Here obj refrence is changing to obj2 so, we get error in this
// obj = obj2;
// console.log(obj)


// let keyword : if you dont want to use let declared value from any where outside has a
// block scope

let v = 20;
console.log('value of v: ' ,v);

//block scope : executes with in block only
if (true) {
    let g = 123;
    console.log(g);
}
//console.log(g);

//Hosting with let keyword

let b1 = 30;

 
function foo1 () {
    console.log(b1); // here b1 is not going to check in global block, hoisting is
    //happening but we need to intialize for 'let' keyword.
    
    let b1 = 20;
    console.log(b1);
}

foo1();

//Ex: 2
let b = 30;
let yz = 20;
 
function foo2 () {
    console.log('value of yz', yz)
    console.log(b);

    let b = 20;
    console.log(b);
}

foo2();