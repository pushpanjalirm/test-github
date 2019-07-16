// global scope
var a = 10;

// if(true) {
//     var b = 20;
// }

// console.log(a);
// console.log(b);

//Javascript is function scope
//function can access global value.

function foo(x,y) {

    var insidefunc = 30;

    faa = 30; 
    console.log('parameter value', x);
    console.log('global a', a)
    return insidefunc;
}
foo(2,3)
console.log('value of faa', faa);



// console.log(x);
//console.log(insidefunc)

//not defined : if its not available
//un defined : if variable is available and not defined 
// JIT: java script compiles your code.

//Hoisting 
// var  a = 20; -- //global scope

// function foo () {
//     console.log(a); //(undefined) any variable declared inside the function will be hosited
//     var a = 30;
//     console.log(a); //30
// }

// foo();

console.log (js); 

var js = 20; //hoisting happens(only for declaration part 'js') and it considers as global value 

console.log (js);


