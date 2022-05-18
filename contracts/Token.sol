// SPDX-License-Identifier: MIT
pragma solidity ^0.8;


contract Token {
    string public name = "LinkToken";
    string public symbol = "LT";
    uint public totalSupply =  1000000;

    mapping(address => uint256) public balances;

    constructor(){
        balances[msg.sender] = totalSupply;
    }

    function transfer(address _to, uint amount) external{
       require(balances[msg.sender] > amount,  "Not enough tokens");
       balances[msg.sender] -= amount;
       balances[_to] += amount;
    }

    function balanceOf(address account) external view returns(uint){
        return balances[account];
    }
}