const convertButton = document.querySelector(".convert-button")
const decurrencyselect = document.querySelector(".de-currency-select")
const currencySelect = document.querySelector(".currency-select")

async function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")
    
    const data = await fetch("https://cdn.moeda.info/api/latest.json").then(response => response.json())
// TUDO BASEADO A PARTIR DO VALOR DO DOLAR//
console.log(data)
    const dolarBRL = data.rates.BRL
    const dolarEUR = data.rates.EUR      //se 1 usd = 0.93 eur //
    const dolarGBP = data.rates.GBP     //  e 1 usd = 5.08 brl -> EUR BRL = 5.08/0.93 = 5.46//
    const dolarBTC = data.rates.BTC
    const dolarUSD = data.rates.USD
    const decurrencyname = document.getElementById("de-currency-name")
    const decurrencyImage = document.querySelector(".de-currency-img")


    if(decurrencyselect.value == "dereal") {

        decurrencyname.innerHTML = "Real"
        decurrencyImage.src = "./assets/brasil 2Real.png"

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarBRL)
    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / (dolarBRL/dolarEUR))
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / (dolarBRL/dolarGBP))
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / (dolarBRL/dolarBTC))
    }

    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

    if(decurrencyselect.value == "dedolar") {

    decurrencyname.innerHTML = "Dolar Americano"
    decurrencyImage.src = "./assets/estados-unidos (1) 1usa.png"
        

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * dolarEUR)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * dolarGBP)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * dolarBTC)
    }

    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(dolarBRL * inputCurrencyValue)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue)

}

    if(decurrencyselect.value == "deeuro") {

    decurrencyname.innerHTML = "Euro"
    decurrencyImage.src = "./assets/Design sem nome 3euro.png"
        

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarEUR)
    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / (dolarEUR / dolarGBP))
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / (dolarEUR / dolarBTC))
    }

    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / (dolarEUR / dolarBRL))
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue)

}

    if(decurrencyselect.value == "delibra") {

    decurrencyname.innerHTML = "Libra Esterlina"
    decurrencyImage.src = "./assets/libra 1libra.png"
        

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / (dolarGBP / dolarUSD))
    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / (dolarGBP / dolarEUR))
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / (dolarGBP / dolarBTC))
    }

    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / (dolarGBP / dolarBRL))
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValue)

}

    if(decurrencyselect.value == "debitcoin") {

    decurrencyname.innerHTML = "Bitcoin"
    decurrencyImage.src = "./assets/bitcoin 1bitcoin.png"
        

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / (dolarBTC / dolarUSD))
    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / (dolarBTC / dolarEUR))
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / (dolarBTC / dolarGBP))
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
    }

    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / (dolarBTC / dolarBRL))
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC"
    }).format(inputCurrencyValue)

}
}

const seletor = document.querySelector("#seletor-moedas")
const deseletor = document.querySelector("#de-seletor-moedas")
function change() {
    const currencyname = document.getElementById("currency-name")
    
    const currencyImage = document.querySelector(".currency-img")
    
    if (seletor.value == "dolar") {
        currencyname.innerHTML = "Dolar Americano"
        currencyImage.src = "./assets/estados-unidos (1) 1usa.png"
    }
    if (seletor.value == "euro") {
        currencyname.innerHTML = "Euro"
        currencyImage.src = "./assets/Design sem nome 3euro.png"
    }

    if (seletor.value == "libra") {
        currencyname.innerHTML = "Libra Esterlina"
        currencyImage.src = "./assets/libra 1libra.png"
    }

    if (seletor.value == "bitcoin") {
        currencyname.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin 1bitcoin.png"
    }

    if (seletor.value == "real") {
        currencyname.innerHTML = "Real"
        currencyImage.src = "./assets/brasil 2Real.png"
    }

    

    convertValues()
}
seletor.addEventListener("change", change);
convertButton.addEventListener("click", convertValues)