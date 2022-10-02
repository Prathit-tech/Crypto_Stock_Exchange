// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./token.sol";

contract DEX {
   Token token;
   uint no_of_eth=1;
   uint no_of_erc20=10;
   uint k;
   address public tokenAddress;   
   constructor(address _token) payable{
      require(msg.value > 0 , "You have to at least deposit something to start a DEX");
      tokenAddress = _token;
      token = Token(address(tokenAddress));
   }
    function buy(uint256 _amount_to_be_sent) public {
      uint256 rate=set_Price();
      uint256 amountTobuy = _amount_to_be_sent;
      uint256 dexBalance = token.balanceOf(address(this));
      require(amountTobuy >= 0, "You need to send some Ether");
      require(amountTobuy <= dexBalance, "Not enough tokens in the reserve");
      token.transfer(msg.sender, amountTobuy);
      no_of_eth=no_of_eth+_amount_to_be_sent;
      no_of_erc20 = no_of_erc20-_amount_to_be_sent;
   }   

   function sell(uint256 amount) public {
      uint256 rate=set_Price();
      require(amount > 0, "You need to sell at least some tokens");
      uint256 approvedAmt = token.allowance(msg.sender, address(this));
      require(approvedAmt >= amount, "Check the token allowance");
      token.transferFrom(msg.sender, payable(address(this)), amount);
      payable(msg.sender).transfer(amount);
      no_of_eth=no_of_eth-amount;
      no_of_erc20=no_of_erc20+amount;
   }

   function set_Price() public returns(uint256){
       k = no_of_eth/no_of_erc20;
       return(k);
   }
}