//Variaveis
const button = document.getElementById('convertButton');
const select = document.getElementById('currencySelect')
const dolar = 5.74
const euro = 6.19
const btc = 484682





// Função de conversão
function convertNowButton(){ 
    const inputPrimario = document.getElementById('convertInput').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')
    realValueText.innerHTML = inputPrimario
    
    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
      ).format(inputPrimario);



      if(select.value === "US$ - Dólar Americano"){
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
          ).format(inputPrimario / dolar); //nova maneira de fazer os icones de currency no texto gerado.
      } if (select.value === "GBP € - Euro"){
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
          ).format(inputPrimario / euro); //nova maneira de fazer os icones de currency no texto gerado.
      } if (select.value === "BTC ₿ - Bitcoin"){
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'BTC' }
          ).format(inputPrimario / btc); //nova maneira de fazer os icones de currency no texto gerado.
      }

      
   
      

}

function changeCurrency(){
    const currencyName = document.getElementById('currency-name')
    const currencyFlag = document.getElementById('currency-Flag')

    if (select.value === 'US$ - Dólar Americano'){


        currencyName.innerHTML = "Dólar Americano"
        currencyFlag.src = "./assets/EUA.png"

    }if (select.value === 'GBP € - Euro'){


        currencyName.innerHTML = "Euro"
        currencyFlag.src = "./assets/euro.png"

    }
    if (select.value === "BTC ₿ - Bitcoin"){

        currencyName.innerHTML = "Bitcoin"
        currencyFlag.src = "./assets/bitcoin.png"
    }


    convertNowButton() //sempre que trocar a moeda, vai recalcular antes de fazer a troca do select.
    //console.log(select.value)
}


//Eventos
button.addEventListener('click', convertNowButton) //Evento do butao de clique
select.addEventListener('change', changeCurrency) // Evento da mudança do Select no HTML