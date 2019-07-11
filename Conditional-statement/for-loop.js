for (var i = 1; i<= 10; i++) {
    console.log('2 * '+i+' = '+2*i);
}

// array 

var arr = [23,45,67,89,09,85,55,66];

console.log(arr.length) 

for(var i = 0; i< 8; i++) {
    console.log(arr[i]);
}

//WAP to create a new array where elements are multiplied by 2 from given array

var newarr = [];

for (var i = 0; i < arr.length; i++) {
    var ele = arr[i] * 2;
    newarr.push(ele);
}

console.log(newarr);

// Reverse a given array

var arrnew = [] //

for (var i = arr.length-1; i >= 0 ; i--) {
    arrnew.push(arr[i]);
}

console.log(arrnew)


