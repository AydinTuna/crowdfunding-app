const { Web3 } = require("web3");


// Loading the contract ABI and Bytecode
// (the results of a previous compilation step)
const fs = require("fs-extra");
const { abi, bytecode } = JSON.parse(fs.readFileSync("ethereum/build/CrowdFund.json"));
console.log(fs.readFileSync("ethereum/build/CrowdFund.json"));
console.log("abi: ", abi);
console.log("bytecode: ", bytecode);

async function main() {
    const network = process.env.ETHEREUM_NETWORK;
    // Configuring the connection to an Ethereum node
    const web3 = new Web3(
        new Web3.providers.HttpProvider(
            `https://eth-${network}.g.alchemy.com/v2/${process.env.ALCHEMY_ID}`
        ),
    );
    // Creating a signing account from a private key
    const signer = web3.eth.accounts.privateKeyToAccount(
        '0x' + process.env.SIGNER_PRIVATE_KEY,
    );
    web3.eth.accounts.wallet.add(signer);

    // Using the signing account to deploy the contract
    const contract = new web3.eth.Contract(abi);
    contract.options.data = bytecode;
    const deployTx = contract.deploy({ arguments: [signer.address] });
    const deployedContract = await deployTx
        .send({
            from: signer.address,
            gas: await deployTx.estimateGas(),
        })
        .once("transactionHash", (txhash) => {
            console.log(`Mining deployment transaction ...`);
            console.log(`https://${network}.etherscan.io/tx/${txhash}`);
        });
    // The contract is now deployed on chain!
    console.log(`Contract deployed at ${deployedContract.options.address}`);
    console.log(
        `Add CROWDFUND_CONTRACT_ADDRESS to the.env file to store the contract address: ${deployedContract.options.address}`,
    );
}
require('dotenv').config({ path: '.env.local' })
main();