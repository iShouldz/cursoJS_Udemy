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

//Setando um valor de parametro default
function carLoan(loan, rate, year = 5){
    return ((loan * rate) / 100) * year;
}

console.log(carLoan(20000, 2.5))