//Declaração de funcao

function movie(){
    console.log("The matrix")
}

movie()


//Funcion expression

const car = function(){
    console.log("Tesla")
}

car()

const truck = car

truck()

function price(){
    let total = 0;
    //Permite criar uma função com infinitos argumentos, 
    //sem ter q declarar, ou seja, uma função dinamica
    for(let value of arguments){
        total += value;
    }
    return total;
}

console.log(price(10, 20, 30, 40))