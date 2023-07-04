


const users = [
    { name: "Ana Rodrigues", age: 33, contact: "(11) 96969-2514" },
    { name: "Lucas Rodrigues", age: 33, contact: "(11) 96967-3214" },
    { name: "Miriã Beatriz", age: 30, contact: "(11) 99769-1314" },
    { name: "Bruna Priscila", age: 28, contact: "(11) 99569-1851" },
]

users.forEach(function (item,index) {
   console.log(`${index + 1}) Nome: ${item.name}, Idade: ${item.age}, Contact: ${item.contact}`)
});