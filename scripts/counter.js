const hre = require("hardhat");

const main = async() => {
    const CounterContract = await hre.ethers.getContractFactory("CounterContract");
    const contract = await CounterContract.deploy(4);
    console.log(contract.address);
}

main().then(() => {
    process.exit(0)
}).catch(error=> {
    console.log(error);
    process.exit(0)
})