var total ='50'
console.log(typeof total);

// Var isUser = "true";
// console.log(typeof isUser);

// Escape character
var learning = " I 'm learning \"Javascript\" ";
console.log(learning);

// new line \n
var ques = "what is the use of JS ? \nIs it worth learning?";
console.log(ques);

// tab
var fullstack = "HTML\tCSS\tJS \tnODE\tMongoDb";
console.log(fullstack);

// unicode
var uni = "\u0026"
console.log(uni);

var name = "anjali" + " " + "adith";
console.log(name);

var intro = "Hello myself "+ name+ " "+ "I AM "+ "age"+" 56 years old."
console.log(intro);

var concatbool = "1"+ true;
console.log(concatbool);

// Implicit type casting converting boolean to number

var concatboolNum = 1 + true;
console.log(typeof concatboolNum);

// String literals
var a = `Consider me as a string`
console.log(typeof a);
console.log(a);

// ${} adds the string to other string
var learn = `I'm learning ${a}. very easy`
console.log(learn);

// Undefined type will be undefined data type. specifies empty
// Null is a type of object (wont be assigned by JS, user needs to assign this)

var a = null;
console.log(typeof a);

// Data structure: a way to organise data
var array = [50,60,40,59];
console.log(typeof array);
console.log(array[1]);

var array = ['hell', 'heaven', 56 , true];
array[4] = 40;
array[15] = false;
array[0] = 20;
console.log(array[14]); //Undefined displays
console.log(array);
console.log(array.length); //Provides the length of array

// add to the end of array 
array.push(100);
console.log(array);

// To remove the element from the array
array.pop(); //array.pop(100) one and the same
console.log(array);



