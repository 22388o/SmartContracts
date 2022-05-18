import { ethers } from "ethers";

export const readSmartContractEvents = async() => {
  const INFURA_ID = process.env.INFURA_ID;

  const provider = new ethers.providers.JsonRpcProvider(
    `https://mainnet.infura.io/v3/${INFURA_ID}`
  );

  const tokenAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
  const abiCode = [
    "function name() view returns(string)",
    "event Transfer(address indexed _from, address indexed _to, uint amount)",
  ];
  const fromBlockNumber = 14697457;
  const toBlockNumber = 14697470;
  const contract = new ethers.Contract(tokenAddress, abiCode, provider);
  const transferEvents = await contract.queryFilter("Transfer", fromBlockNumber, toBlockNumber);
  // transferEvents is the every single events/transactions of DAI stable coins 
  return transferEvents;

}