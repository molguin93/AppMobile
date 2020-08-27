let array = [1, 2, 3, 4, 5, 6];

// Solucion 1

/*
var cont = 0;

var cuantosCumplen = function (){
    for (let i of array){
        if (i % 2 === 0){
            cont++;
        }
    }
    return cont;
}
console.log(cuantosCumplen());
*/

// Solucion 2

// var even = (element) => element % 2 === 0;
// var cuantosCumplen = array.filter(even);

// console.log(cuantosCumplen.length);

// Solucion Final!!!

var even = (element) => element % 2 === 0;

function cuantosCumplen (arr, par){
    arr = array.filter(par);

    return console.log(arr.length);
} 
    
cuantosCumplen(array, even);