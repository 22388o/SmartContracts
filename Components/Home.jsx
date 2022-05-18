import React, { useState, useEffect } from 'react';
import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json';
import Token from './artifacts/contracts/Token.sol/Token.json';
import { ethers } from 'ethers';


const greeterAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
const tokenAddress = "0x0165878A594ca255338adfa4d48449f69242Eb8F";

const Home = () => {

    const [greet, setGreet] = useState("");
    const [userAccount, setUserAccount] = useState("");
    const [amount, setAmount] = useState(0);

    const requestAccount = async() => {
        // request account information from metamask wallet;
        await window.ethereum.request({ method: "eth_requestAccounts" });
    };


    const fetchGreeting = async() => {
        if(window.ethereum !== undefined){
            const providers = new ethers.providers.Web3Provider(window.ethereum);
            const contract = new ethers.Contract(greeterAddress, Greeter.abi, providers);
            try{
                const data = await contract.greet();
                console.log(data);
            }catch(e){
                console.log('error', e);

            };
        };
    };
    
    const setGreeting = async() => {
        if(!greet) return 
        if(window.ethereum !== undefined){
            await requestAccount();
            const providers = new ethers.providers.Web3Provider(window.ethereum);
            const signer = await providers.getSigner();
            const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer);
            const transaction = await contract.setGreeting(greet);
            setGreet("")
            await transaction.wait();
            fetchGreeting()
        };

    };

    const sendTokens = async() => {
        if (typeof window.ethereum !== 'undefined') {
            await requestAccount();
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                tokenAddress,
                Token.abi,
                signer
            );
            const transaction = await contract.transfer(userAccount, amount);
            await transaction.wait();
            console.log(`coins send to ${userAccount}`);
        };
    };

    const getBalance = async() => {
        if (window.ethereum !== undefined) {
            await requestAccount();
            const [account] = await window.ethereum.request({ method: 'eth_requestAccounts'})
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const contract = new ethers.Contract(tokenAddress, Token.abi, provider);
            const data = await contract.balanceOf(account);
            console.log(`Balance: ${data.toString()}`);
        };
    }

    return (
      <div>
        <h2 className="text-center text-2xl my-4">
          {" "}
          Web3 Full Stack Applications
        </h2>
        <div className="p-5 text-center md:w-1/5 mx-auto">
          <button
            onClick={fetchGreeting}
            className="p-2 bg-blue-600 my-2 w-full rounded-md"
          >
            Fetch Greeting
          </button>
          <br />
          <input
            placeholder="Enter new greeting"
            value={greet}
            onChange={(e) => {
              const val = e.target.value;
              setGreet(val);
            }}
            className="p-2 border border-gray-200 rounded-md focus:outline-none w-full"
          />
          <br />
          <button
            className="p-2 bg-blue-600 my-2 w-full rounded-md"
            onClick={setGreeting}
          >
            Set Greeting
          </button>
        </div>
        <hr />
        <div className="p-5 text-center md:w-1/5 mx-auto">
          <button
            className="p-2 bg-blue-600 my-2 w-full rounded-md"
            onClick={getBalance}
          >
            Get balance
          </button>
          <br />
          <input
            placeholder="Enter user address"
            value={userAccount}
            onChange={(e) => {
              const val = e.target.value;
              setUserAccount(val);
            }}
            className="p-2 border border-gray-200 my-2 rounded-md focus:outline-none w-full"
          />
          <br />
          <input
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => {
              const val = e.target.value;
              setAmount(val);
            }}
            className="p-2 border border-gray-200 rounded-md focus:outline-none w-full"
          />
          <br />
          <button
            className="p-2 bg-blue-600 my-2 w-full rounded-md"
            onClick={sendTokens}
          >
            Send token
          </button>
        </div>
      </div>
    );
}
export default Home;
