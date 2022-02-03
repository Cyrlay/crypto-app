const showCryptoList = () => {

    const cryptoName = document.querySelector('.crypto-name')
    const actualPrice = document.querySelector('.actual-price')
    const priceChangePercent = document.querySelector('.price-change-percent')
    const priceChangeUSD = document.querySelector('.price-change-usd')

    const URL = 'https://api.binance.com/api/v1/ticker/24hr'

    axios.get(URL).then(res => {

        console.log(res)

        const cryptoInfo = document.querySelector('.bottom')

        for (let i = 0; i < res.data.length; i++) {
            if (res.data[i].symbol.includes('USDT')) {
                let newDiv = document.createElement("div")
                newDiv.classList.add(`crypto-info`)
                cryptoInfo.appendChild(newDiv)

                let cryptoName = document.createElement("p")
                let actualPrice = document.createElement("p")
                let priceChangePercent = document.createElement("p")
                let priceChangeUSD = document.createElement("p")

                cryptoName.classList.add('crypto-name')
                actualPrice.classList.add('actual-price')
                priceChangePercent.classList.add('price-change-percent')
                priceChangeUSD.classList.add('price-change-usd')

                newDiv.append(cryptoName, actualPrice, priceChangePercent, priceChangeUSD)

                cryptoName.textContent = res.data[i].symbol
                actualPrice.textContent = Math.round(res.data[i].lastPrice * 1000) / 1000
                priceChangePercent.textContent = res.data[i].priceChangePercent + ' %'
                priceChangeUSD.textContent = Math.round(res.data[i].priceChange * 1000) / 1000
            }
        }
    }).catch(function (error) {
        return `Something went wrong: ${error}`
    })
}

showCryptoList()