

/*

Calcula Desconto:
Todos os Produtos acima de R$ 30,00 tem desconto de 10%.
*/

const cart = [10, 244, 99, 2, 20, 33, 250]
let finalValueWithDiscount = 0

function calculateDiscount(price, discount){
    const result = (price * discount) / 100
    return result

}



cart.forEach(value => {
    if(value > 30){
        const discount = calculateDiscount (value, 10)
        finalValueWithDiscount = finalValueWithDiscount + (value - discount)

    } else{
        finalValueWithDiscount += value
    }
});
console.log(`O valor final da compra foi de R$ ${finalValueWithDiscount} porém você teve desconto, irá pagar apenas R$ ${finalValueWithDiscount}
você economizou ${finalValueWithDiscount}`)