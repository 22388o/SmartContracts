// SPDX-License-Identifier: MIT
pragma solidity ^0.8;


contract VotingApp {

    mapping(address => uint256) public votesReceived;

    address[] public candidateList;

    constructor(address[] memory candidateNames){
        candidateList = candidateNames;
    }

    function totalVotesFor(address candidate) view public returns(uint256){
        require(validateCandidate(candidate), "Not a valid candidate");
        return votesReceived[candidate];
    }

    function voteForCandidates(address candidate) public{
         require(validateCandidate(candidate), "Not a valid candidate");
        votesReceived[candidate] += 1; 
    }

    function validateCandidate(address candidate) view public returns(bool isCandidateValid){
        for(uint i= 0; i < candidateList.length; i++){
            if(candidateList[i] == candidate){
                return isCandidateValid = true;
            }else {
                return isCandidateValid = false;
            }
        }
    }
    
}