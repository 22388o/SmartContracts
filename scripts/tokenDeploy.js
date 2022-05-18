const hre = require('hardhat');

const main = async() => {

    const Token = await hre.ethers.getContractFactory("Token");
    const token = await Token.deploy();

    console.log(token.address);

}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });