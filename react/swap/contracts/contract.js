import Web3 from "web3";

const provider =  new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/c0c94a1f9a3545c38868017ddcd0af02");

const web3 = new Web3(provider);
const abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount_to_be_sent",
				"type": "uint256"
			}
		],
		"name": "buy",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "sell",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			}
		],
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "set_Price",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokenAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const vmContract = new web3.eth.Contract(abi,'0xAD0f708a3bb45719058EdEa255a745B112052897');

export default vmContract