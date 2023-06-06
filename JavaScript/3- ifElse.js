/* Controlador de Fluxo

-IF(Se)
-ELSE(Se não)

Operadores de comparação
> maior que 
< menor que
== igual que
*/

const notaDoAluno = 10
const notaDeCorte = 5

if(notaDoAluno > notaDeCorte){
    // o que será Executado, SE O IF for verdadeiro

    console.log("Parabens, você passou de ano")
}
else{
    // SE O IF FOR FALSO, ELE ENTRA AQUI 
    console.log("você foi reprovado")
}