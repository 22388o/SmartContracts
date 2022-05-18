// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

contract CounterContract {
    uint256 public counter;

    constructor(uint256 count) {
        counter = count;
    } 

    function addValue() public {
        counter += 1;
    }
    function getCount() public view returns(uint256 totalCount){
        return totalCount = counter;
    }
    function removeValue() public{
        require(counter > 0, "Value is set to zero");
        counter -= 1;
    }

}