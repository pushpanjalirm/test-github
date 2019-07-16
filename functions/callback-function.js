//call back function : Passing of one function to another function.

// function substract (x,y,) {
//     return x-y;
// }

// function square (a) {
//     return a*a;
// }

// var sub = substract(10,5);
// var sq = square(sub);
// console.log(sq);

// example 2

function square (a) {
    return a*a;
} 

function substract (x,y,cb) {
 if(typeof x == 'number' && typeof y == 'number'){
     return cb(x-y)
 }else {
     return 'please enter a number'
 }
};

// var rs = substract(10,5,square);
// console.log(rs);

// here instead of sqaure in line 29 you can pass other anonymous function i.e function(a)
var rs = substract(10,5, function(a) {
return a*a;
});

console.log(rs);
