const getBtcData = async () => {
    fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD')
   .then(response => response.json())
   .then(data => {
        console.log(data);
    });
}

getBtcData();