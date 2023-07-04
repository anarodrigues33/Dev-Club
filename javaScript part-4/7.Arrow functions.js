/*  

function padrão -> functin() {}
arrow function -> () => {|}


não escrevemos "function"
além disso, usamos o sinal "=>" para criá-la,
o que lembra uma flecha , fazendo jus ao nome "Arrow Functions".
*/

function sayMyName(name){
    return `Seu nome é ${name}`
}

const sayMyName2 = name => `Seu nome é ${name}`

console.log(sayMyName ("Ana"))
console.log(sayMyName2 ("Lucas"))