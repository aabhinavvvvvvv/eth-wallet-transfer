import abi from "./Transactions.json";

const contractAddress = import.meta.env.VITE_ADDRESS;
const contractABI = abi.abi;

export { contractAddress, contractABI };
