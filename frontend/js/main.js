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
console.log (window.web3.currentProvider);

var contractAddress = '0xB302F922B24420f3A3048ddDC4E2761CE37Ea098';
var abi = JSON.parse('[{"inputs": [{"internalType": "address","name": "_token","type": "address"}],"stateMutability": "payable","type": "constructor"},{"inputs": [],"name": "buy","outputs": [],"stateMutability": "payable","type": "function"},{"inputs": [{"internalType": "uint256","name": "amount","type": "uint256"}],"name": "sell","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"name": "tokenAddress","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"}]');

//contract = new web3.eth.Contract(abi, contractAddress);