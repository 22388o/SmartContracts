// SPDX-License-Identifier: MIT
pragma solidity ^0.8;


// contract for adding money in bank account and withdrawing the money after the interest 

contract BankAccount {
    uint totalContractBalance = 0;
    mapping (address => uint256) balances;
    mapping (address => uint256) depositTimestamps;

    function getContractBalance() public view returns(uint){
        return totalContractBalance;
    }

    function addBalance() public payable {
        require(msg.value > 0, "amount should be more than zero");
        balances[msg.sender] += msg.value;
        totalContractBalance += msg.value;
        depositTimestamps[msg.sender] = block.timestamp;
    }

    function getBalance(address userAddress ) public view returns (uint){
        uint principal = balances[userAddress];
        uint timeElapsed = block.timestamp - depositTimestamps[userAddress];
        return principal + uint((principal * 7 * timeElapsed)/ 100 * 365 * 24 * 60 * 60);
    }

    function withdraw() public payable{
        // convert the sender address to payable 
        address payable withdrawTo = payable(msg.sender);
        uint withdrawAmount = getBalance(msg.sender);
        withdrawTo.transfer(withdrawAmount);
        totalContractBalance = totalContractBalance - withdrawAmount;
        balances[msg.sender] = 0;
    }
}