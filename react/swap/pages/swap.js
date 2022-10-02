import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
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
                web3 = new Web3(window.web3.currentProvider.enable());
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
        web3 = new Web3(window.ethereum);
        await vmContract.methods.buy(1).call();
    }


    const sell = async () =>
    {
        await vmContract.methods.sell(1).call();
    }
    
    return(
        <div className='bg-info bg-gradient'>
            <div className='m-auto p-2 ' style={{width:400+'px',height:100+'px'}}>
                <h1 className='m-auto'>Trading</h1>
            </div>
            <div class="container m-auto">
                <div className='row m-auto p-2 ' style={{width:400+'px',height:100+'px'}}>
                    <button className="btn btn-primary m-auto" onClick={connectWalletHandler}>Connect to Wallet</button>
                </div>
                <div className='row m-auto p-2' style={{width:400+'px',height:100+'px'}}>
                    <button className="btn btn-success m-auto" onClick={buy}>Buy</button>
                </div>
                <div className='row m-auto p-2' style={{width:400+'px',height:100+'px'}}>
                    <button className="btn btn-danger m-auto" onClick={sell}>Sell</button>
                </div>
            </div>
        </div>
        
    )
}