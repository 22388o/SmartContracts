import { ethers } from "ethers";


export const getUserBalance = async() => {
    const INFURA_ID = process.env.INFURA_ID;
    
    const provider = new ethers.providers.JsonRpcProvider(
      `https://mainnet.infura.io/v3/${INFURA_ID}`
    );
    
    const balance = await provider.getBalance("0x51D3Ff1D169A12c496001825f8931c031B1257ac");
    return ethers.utils.formatEther(balance)
};
