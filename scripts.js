const convertButton = document.querySelector(".convert-button")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const currencySelect = document.querySelector(".currency-select")
    console.log(currencySelect.value)
    const dolarToday = 5.00
    const euroToday = 6.00
    const libraToday = 6.36
    const bitcoinToday = 323500.00

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }
    
    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
    
}

const seletor = document.querySelector("#seletor-moedas")

function change() {
    const currencyname = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if(seletor.value == "dolar") {
        currencyname.innerHTML = "Dolar Americano"
        currencyImage.src = "./assets/estados-unidos (1) 1usa.png"
    }

    if(seletor.value == "euro") {
        currencyname.innerHTML = "Euro"
        currencyImage.src = "./assets/Design sem nome 3euro.png"
    }

    if(seletor.value == "libra") {
        currencyname.innerHTML = "Libra Esterlina"
        currencyImage.src = "./assets/libra 1libra.png"
    }

    if(seletor.value == "bitcoin") {
        currencyname.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin 1bitcoin.png"
    }

    convertValues()
}
seletor.addEventListener("change", change);

convertButton.addEventListener("click", convertValues)



