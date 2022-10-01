

const getBtcData = async () => {
    fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD')
   .then(response => response.json())
   .then(data => {
        document.getElementById("btc").innerHTML = "$"+data['USD'];
    });
}

const getEthData = async () => {
    fetch('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD')
   .then(response => response.json())
   .then(data => {
        document.getElementById("eth").innerHTML = "$"+data['USD'];
    });
}

const getAdaData = async () => {
    fetch('https://min-api.cryptocompare.com/data/price?fsym=ADA&tsyms=USD')
   .then(response => response.json())
   .then(data => {
        document.getElementById("ada").innerHTML = "$"+data['USD'];
    });
}

const getSolData = async () => {
    fetch('https://min-api.cryptocompare.com/data/price?fsym=SOL&tsyms=USD')
   .then(response => response.json())
   .then(data => {
        document.getElementById("sol").innerHTML = "$"+data['USD'];
    });
}

const getMaticData = async () => {
    fetch('https://min-api.cryptocompare.com/data/price?fsym=MATIC&tsyms=USD')
   .then(response => response.json())
   .then(data => {
        document.getElementById("matic").innerHTML = "$"+data['USD'];
    });
}

getBtcData();
getEthData();
getAdaData();
getSolData();
getMaticData();

async  function  connect() 
{
        if (typeof  window.ethereum !== "undefined")
        {
            try 
            {
                console.log("connecting");
                await  ethereum.request({ method:  "eth_requestAccounts" });
            } catch (error) 
            {
                console.log(error);
            }
            document.getElementById("b1").innerHTML = "Connected";
        } 
}

