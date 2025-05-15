const hre = require("hardhat");

const main = async () => {
  const transactionsFactory = await hre.ethers.getContractFactory("Transactions");
  const transactionsContract = await transactionsFactory.deploy();

  // Wait for deployment to be completed
  await transactionsContract.waitForDeployment();

  // Get the deployed contract address
  const contractAddress = await transactionsContract.getAddress();

  console.log("Transactions address:", contractAddress);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
