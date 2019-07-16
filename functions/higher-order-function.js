function outer() { //1

    function inner () {    // wont call until you call this function 
        console.log('Inner function');
    }

    // inner();
}
//outer(inner()); // checks inner declared somewhere oustide 

outer();


// ex: 2

function outer() { 
 var outvar = 10;

    function inner () {  //here we can access the outvar from this function of global var also
        var innerVar = 20;    
        console.log('inner function');
        console.log(outvar)
    }

    inner(); // but you cannot access innervar from out side of function since it has 
    //its own scope.
}

outer();

//ex: 3 refer notes for execution explination 

function add (a,b) {

    function square (x) {  
        return x*x
    }

    var sum  = a + b; 

    return square(sum); 

}

var sq = add (5,5); 

console.log(sq)

//Ex: 3 

function add (a,b) {

    function square (x) {
        return x*x
    }

    var sum  = a + b;

    return square;

}

var sq = add (5,5); 

var s = sq(10);

console.log(s)

// we cannot use the function 'return' value from outside function.
//we can return function from this.

// EX: 4

function add (a,b) {

    function square (x) {
        return x*x
    }

    var sum  = a + b;

    return square;

}

var sq = add (5,5); 

var s = sq(10); //sq() here function returns the function 

console.log(s);


//EX: 5

function outer() {
    console.log('outer function');

    function inner() {
        console.log('inner function');
    }


console.log('about to return a function');

return inner;

}

var inn = outer();

inn();


