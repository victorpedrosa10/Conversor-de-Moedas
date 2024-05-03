const convertButton = document.querySelector(".convert-button")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const currencySelect = document.querySelector(".currency-select")
    console.log(currencySelect.value)
    const dolarToday = 5.00
    const euroToday = 6.00

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

    convertValues()
}
seletor.addEventListener("change", change);

convertButton.addEventListener("click", convertValues)



