import { ethers } from "ethers";


export const sendTransaction = async() => {
    
    const abiCode = [];
    const tokenAddress = "";
    const userAccount = "0x51D3Ff1D169A12c496001825f8931c031B1257ac";
    const adminAccount = "";
    const INFURA_ID = process.env.INFURA_ID;


    const provider = new ethers.providers.JsonRpcProvider(
    `https://mainnet.infura.io/v3/${INFURA_ID}`
    );
    const signer = provider.getSigner();
    const contract = new ethers.Contract(tokenAddress, abiCode, signer);
    const transaction = await contract.transfer(userAccount, 1);
    await transaction.wait();
    console.log(await provider.getBalance(userAccount))
    // create provider
    // create signer using provider
    // create contract using signer 
    // make transaction or trasnfer
}