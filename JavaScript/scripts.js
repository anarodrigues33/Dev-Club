const convertButton = document.getElementById("convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
  const currencyValueToConverted = document.querySelector(".currency-value")

  const dolarToday = 4.99
  const euroToday = 5.55

  
  console.log(currencySelect.value)

   if(currencySelect.value == "dolar"){
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US",{
      style: "currency",
      currency: "USD"
    }).format(inputCurrencyValue / dolarToday)
   }

   if(currencySelect.value == "euro"){
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style:"currency",
      currency: "EUR"
    }).format(inputCurrencyValue /euroToday )
   }

   

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
    style:"currency",
    currency:"BRL"

  } ).format(inputCurrencyValue)
  currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US",{
    style: "currency",
    currency: "USD"
  }).format(convertedValeu)
  
  

  
  console.log(convertedValeu)


}


function changeCurency(){
  const currencyName = document.getElementById("currency-name")
  const currencyImage = document.querySelector(".currency-img")

  if(currencySelect.value == "dolar"){
    currencyName.innerHTML = "Dólar americano"
    currencyImage.src = "./assets/dolar.png"
  }
  if(currencySelect.value == "euro"){
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/euro.png"

    
  }

}

currencySelect.addEventListener("change",changeCurency)

convertButton.addEventListener("click", convertValues)