require("@nomicfoundation/hardhat-toolbox"); // ✅ Use this instead

require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const RPC_URL = process.env.RPC_URL;
module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: RPC_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};