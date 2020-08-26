let array = [1, 2, 3, 4, 5, 6];
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