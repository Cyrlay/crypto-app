const searchInput = document.querySelector('.searchInput')
const searchButton = document.querySelector('.searchButton')

const getCoinDetails = () => {

    if (searchInput.value === '') {
        alert('Type a symbol...')
    } else {

        const API_LINK = `https://api.binance.com/api/v1/ticker/24hr?symbol=${(searchInput.value).toUpperCase()}USDT`

        axios.get(API_LINK).then(res => {

            console.log(res)

            const symbol = document.querySelector('.symbol-details')
            const askPrice = document.querySelector('.askPrice')
            const askQty = document.querySelector('.askQty')
            const bidPrice = document.querySelector('.bidPrice')
            const bidQty = document.querySelector('.bidQty')
            const closeTime = document.querySelector('.closeTime')
            const count = document.querySelector('.count')
            const firstId = document.querySelector('.firstId')
            const highPrice = document.querySelector('.highPrice')
            const lastId = document.querySelector('.lastId')
            const lastPrice = document.querySelector('.lastPrice')
            const lastQty = document.querySelector('.lastQty')
            const lowPrice = document.querySelector('.lowPrice')
            const openPrice = document.querySelector('.openPrice')
            const openTime = document.querySelector('.openTime')
            const prevClosePrice = document.querySelector('.prevClosePrice')
            const priceChange = document.querySelector('.priceChange')
            const priceChangePercent = document.querySelector('.priceChangePercent')
            const quoteVolume = document.querySelector('.quoteVolume')
            const volume = document.querySelector('.volume')
            const weightedAvgPrice = document.querySelector('.weightedAvgPrice')

            symbol.textContent = `symbol: ${res.data.symbol} `
            lastPrice.textContent = `actual price: ${Math.round(res.data.lastPrice * 1000) / 1000} $`
            askPrice.textContent = `askPrice: ${Math.round(res.data.askPrice * 1000) / 1000}`
            askQty.textContent = `askQty: ${Math.round(res.data.askQty * 1000) / 1000}`
            bidPrice.textContent = `bidPrice: ${Math.round(res.data.bidPrice * 1000) / 1000}`
            bidQty.textContent = `bidQty: ${Math.round(res.data.bidQty * 1000) / 1000}`
            closeTime.textContent = `closeTime: ${Math.round(res.data.closeTime * 1000) / 1000}`
            count.textContent = `count: ${Math.round(res.data.count * 1000) / 1000}`
            firstId.textContent = `firstId: ${Math.round(res.data.firstId * 1000) / 1000}`
            highPrice.textContent = `highPrice: ${Math.round(res.data.highPrice * 1000) / 1000}`
            lastId.textContent = `lastId: ${Math.round(res.data.lastId * 1000) / 1000}`
            lastQty.textContent = `lastQty: ${Math.round(res.data.lastQty * 1000) / 1000}`
            lowPrice.textContent = `lowPrice: ${Math.round(res.data.lowPrice * 1000) / 1000}`
            openPrice.textContent = `openPrice: ${Math.round(res.data.openPrice * 1000) / 1000}`
            openTime.textContent = `openTime: ${Math.round(res.data.openTime * 1000) / 1000}`
            prevClosePrice.textContent = `prevClosePrice: ${Math.round(res.data.prevClosePrice * 1000) / 1000}`
            priceChange.textContent = `priceChange: ${Math.round(res.data.priceChange * 1000) / 1000}`
            priceChangePercent.textContent = `priceChangePercent: ${Math.round(res.data.priceChangePercent * 1000) / 1000}%`
            quoteVolume.textContent = `quoteVolume: ${Math.round(res.data.quoteVolume * 1000) / 1000}`
            volume.textContent = `volume: ${Math.round(res.data.volume * 1000) / 1000}`
            weightedAvgPrice.textContent = `weightedAvgPrice: ${Math.round(res.data.weightedAvgPrice * 1000) / 1000}`

        }).catch(error => {
            return (`Something went wrong: ${error}`)
        })
    }
}

const enterCheck = (e) => {
    if (e.key === 'Enter') {
        getCoinDetails()
    }
}

searchInput.addEventListener('keyup', enterCheck)
searchButton.addEventListener('click', getCoinDetails)

