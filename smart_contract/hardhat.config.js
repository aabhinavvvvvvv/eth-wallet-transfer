require("@nomicfoundation/hardhat-toolbox"); // ✅ Use this instead


module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://go.getblock.io/fa4ffedc905e43319290a880430d8f40',
      accounts: ['e689f28edda402056884722cb672c2040af5c48a3e68c9c15d0d1130270daec6'],
    },
  },
};