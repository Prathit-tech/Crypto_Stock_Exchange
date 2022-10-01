import Head from 'next/head';
import Web3 from 'web3';
import vmContract from '../contracts/contract';
export default function swap()
{
    let web3;
    const connectWalletHandler = async  () =>
    {
        if(typeof window !== 'undefined' && typeof window.ethereum !== 'undefined')
        {
            try
            {
                await window.ethereum.request({method : "eth_requestAccounts"})
                web3 = new Web3(window.ethereum);
            }
            catch(err)
            {
                console.log(err);
            }
        }
        else
        {
            console.log("Install Metamax");
        }
    }

    const test = async () =>
    {
        const int = vmContract.methods.set_Price().call().then((val) =>{
            console.log(val);
        });
    }

    const buy = async () =>
    {
        vmContract.buy({from: web3.eth.accounts[0], gas: 3000000, value: 100}, function(err, res){});
    }
    return(
        <div>
            <h1>Hello world</h1>
            <button onClick={connectWalletHandler}>Metamax</button>
            <button onClick={buy}>Buy</button>
        </div>
        
    )
}