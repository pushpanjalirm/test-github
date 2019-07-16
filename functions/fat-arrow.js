// Fat arrow function : short form of writing the functions
var add = function (a,b) {
    return a+b;
}

//conversion above to fat arrow, here we elliminated function keyword and return also.
var addition = (a,b) => a+b;

var square = b => b*b;
   
console.log(addition (1,2));
console.log(square(2));

//you may use anonymous function in fat arrow way.refer to function-literla.js file and 
//execute the below steps
var rs = substract(10,5,(a) => a*a);
console.log(rs);

//ex: 2 To pass no parameter.

var fn = () => console.log('hello')
fn();

