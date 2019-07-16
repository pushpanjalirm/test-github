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

//arguments: It's an object like array not definetly array as it
// stores the value in the form of index

// WAP a prgm to check number is even or odd

var num = 34;

function isEven(a) {
    if(a%2 == 0){
        return true
    }
    else{
        return false
    }
}

var even = isEven(33);
console.log(even)

if(isEven(44)) {
    console.log('Do something when it is even')
}else{
    console.log('not even');
}

// default parameters

function multiplication (a=3,b=4){
    return a*b;
}
console.log(multiplication(2)) 
//if you pass it will take these values,but if you pass any 
//values say a=2 and b=empty it assigns a value 2 and multiples default value 4 and gets results


//Wap to reverse the array using function

var arr = [3,5,8,9,10]


function reversearr(){
    for(var i = arr.length-1; i >= 0; i--) {
        return true;
    }
}
var arrnew = reversearr (3,4,6,68);
console.log(arrnew);

