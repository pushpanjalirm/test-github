function add(a,b,c) {
    console.log(a+b+c);
    
    return a+b+c;
}

var res = add(2,3,4) ;//untill and unless you call the function ntg will work out in function
//add(2,4,6,7); //no parameter is present to hold the value it ignores simply
// funtion add (a,b,c) and parameter is (2,3) output will be Nan

// function will returns the values

console.log(res);

// return keyword will also return from the body of the function 

//using return will returns only one value even if you have used multiple return keywords


function add (a,b,c) {

    if (a && b && c) {
        console.log(a)
    }else {
        console.log(b)
    }

    console.log('ends')
}

var res = add (2,3,4);
console.log(res);