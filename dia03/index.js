/*let friends = ["Marcos", "Ana", "Lucas"]

console.log(friends)
console.log(friends[1])
friends[2] = "Junior"
console.log(friends)
*/

let num = [7, 8, 9]
num.push(10)
num.unshift(1)
console.log(num.indexOf(7))
console.log(num)
num.pop()
console.log(num)
num.pop()
console.log(num)
num.splice(0, num.length)

let num2 = [7, 8, 9]
let num3 = [10, 11, 12]

total = num2.concat(num3)
console.log(total)
half = total.slice(2, 5)
console.log(half)
const movies = [
    {id: 1, movieName: 'Dejavu'},
    {id: 2, movieName: 'Back to the future'},
    {id: 3, movieName: 'The matrix'}
]


let cliente = ['Andre', 'Marcela', 'Jose']
console.log(cliente.sort())

const temLondon = [18, 13, 8, 2]
const tempPositive = temLondon.every(function(value){
    return value >= 0
})
const tempPositive2 = temLondon.filter(function(value){
    return value >= 0
})

//return value >= 0 é como um if value >= 0 return true 
//outra forma de escrever:
//const tempPositive2 = temLondon.filter(value => value >= 0){
   // return value >= 0
//})
//o filter retorna os valores não se tem ou não como o every
console.log(tempPositive2)

// Join serve para adicionar qualquer coisa a cada elemento do meu array,
// que ela converte para string
console.log(movies.find(movie => movie.movieName == "The matrix"))

