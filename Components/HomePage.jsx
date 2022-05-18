import React, { useEffect, useState } from 'react';
import { getUserBalance } from './examples/1_account';
import { ethers } from 'ethers';
import { readSmartContract } from './examples/2_read_smart_contracts';
import { readSmartContractEvents } from './examples/4_read_events';
import { readBlock } from './examples/5_read_block';

const HomePage = () => {


    const requestAccount = async() => {
        await window.ethereum.request({ method: "eth_requestAccounts" });
    };


    const [userBalance, setUserBalance] = useState("");
    const [userAccount, setUserAccount] = useState("");
    
    useEffect(async() => {
        await requestAccount()
        // const balance = await getUserBalance();
        // const [ account ] = await window.ethereum.request({
        //   method: "eth_requestAccounts",
        // });
        // setUserAccount(account);
        // setUserBalance(balance);

        // const data = await readSmartContractEvents();
        // console.log(data, 'data')

        const data = await readBlock();
        console.log(data.transactions, 'transactions hash')
    });
    return (
      <div>
        <p className="text-4xl text-center my-6">Introduction to Ether.js</p>
        <hr />
        <div className='text-center mx-auto md:w-2/5 p-4'>
            <p>User account: {userAccount} </p>
            <p>User balance: {userBalance}</p>
        </div>
      </div>
    );
};
export default HomePage;
