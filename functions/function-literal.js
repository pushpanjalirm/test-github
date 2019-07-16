// var foo = function faa() { //you cannot use this way.
//     console.log('literal notaion')
// }

// faa();

//2. second example 

// foo ();  //you get result as undefined as hoisting occurs here as only declaration part of 
          //var foo is moved above foo().

// sum  : // result we will get though we moved above, because it is a declared in built function

// var foo = function faa() { 
//   console.log('literal notaion')
// }

// function sum () {
//     console.log('add fun')
// }

//here var foo = function faa() { 
    // console.log('literal notaion')
// } is function literal

// function faa() { 
    // console.log('literal notaion')
// } is function expression 

// use cases of Anonymous function 

// 1. Self executing function 

(function () {
    console.log('Anonymous function')
})();

// can pass the value to this.

(function (a,b) {
    console.log(a);
    console.log(b);
    console.log('Anonymous function')
})(1,2);

