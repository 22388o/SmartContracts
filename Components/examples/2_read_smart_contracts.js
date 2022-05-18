import { ethers } from "ethers";


export const readSmartContract = async() => {

    const INFURA_ID = process.env.INFURA_ID;

    const provider = new ethers.providers.JsonRpcProvider(
      `https://mainnet.infura.io/v3/${INFURA_ID}`
    );

    

    const ERCAbi = [
        "function name() view returns(string)"
    ];

    const tokenAddress = "";

    const contract = new ethers.Contract(tokenAddress, ERCAbi, provider);
    return contract
}