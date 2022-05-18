import { ethers } from "ethers";

export const readBlock = async() => {
    const INFURA_ID = process.env.INFURA_ID;

    const provider = new ethers.providers.JsonRpcProvider(
      `https://mainnet.infura.io/v3/${INFURA_ID}`
    );

    const block = await provider.getBlockNumber();
    return provider.getBlock(block)
}