var obj = {};
console.log(obj);
console.log(typeof obj);

var std1 = {
    math :60,
    English : 75,
    Science :90,
    EVS :34
}
console.log(std1);

// Dot notation
console.log(std1.English);
var scoreInMath = std1.math;
console.log(scoreInMath);

// var std2 = {
//     "social science ": 89,//Shld keep in " "
//     12:36
// }

// console.log(std2["social science"]);
//console.log(std2.12); Throws error.

var person = {
    name:"Anjali",
    gender:"Female",
    age:25,
    hobbies:['music','reading books'],

    bestFriend: {
        name: 'maria',
        gender: 'female'
    },

    education: [
        {
         name: 'high school',
         passover: 2007
        },
        {
            name : 'graduation',
            passover: 2015
        }
    ]
}

console.log(person.name);
console.log(person.bestFriend.name);
console.log(person.education[0].passover) //since education is array type and we need to call by using index

// Adding a property

person.married = false;
console.log(person);

// Update a existing value

person.name = 'js';
console.log(person);

// Delete a property
delete person.married;
console.log(person);

// Bracket notation
console.log(person['name'])
console.log(person['bestFriend']['name'])

var std2 = {
    "social science" : 89, //Shld keep in " "
    12:36
}

// Using bracket notation to call the property separated by space
console.log(std2["social science"])

var query = 'name';
console.log('using bracket notation', person[query])  //can also access the 'key'
console.log('using dot notation', person.query)  //tries to find query parameter inside person property


var k = 'married';
var value = false;

person[k] = value;    //When you are unsure of the value what user will give so it is good to have key property
person.married = value; //Both are same

console.log(person);

// a value remains same (parseby value)
var a = 10;
var b = a;
b = 20;
console.log(a);
console.log(b);

// using object a value changed (parse by refrence)
 var obj = {
     a : 50,
     b : 70
 }

 var obj2 = obj
    obj2.a = 60;

    console.log(obj.a)
    console.log(obj2.a)
 