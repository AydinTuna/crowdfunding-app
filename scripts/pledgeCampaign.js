"use server"
import Toast from '@/components/Toast';
require('dotenv').config({ path: '.env.local' })
const { Web3 } = require('web3');
const fs = require("fs-extra");

const { abi } = JSON.parse(fs.readFileSync("ethereum/build/CrowdFund.json"));
const web3 = new Web3(
    `https://eth-${process.env.ETHEREUM_NETWORK}.g.alchemy.com/v2/${process.env.ALCHEMY_ID}`
)




const pledgeCampaign = async (ethAmount) => {
    let signature

    const contractAddress = process.env.CROWDFUND_CONTRACT_ADDRESS

    //instantiate the contract
    const crowdFundContract = new web3.eth.Contract(abi, contractAddress);

    const account = web3.eth.accounts.wallet.add("0x" + process.env.SIGNER_PRIVATE_KEY);


    const send = async (ethAmount) => {
        const _from = account[0].address
        const tx = {
            from: _from,
            to: contractAddress,
            gas: 1000000,
            gasPrice: await web3.eth.getGasPrice(),
            data: crowdFundContract.methods.pledge(1, web3.utils.toWei(`${ethAmount}`, "ether")).encodeABI()
        };

        signature = await web3.eth.accounts.signTransaction(tx, process.env.SIGNER_PRIVATE_KEY)

        web3.eth.sendSignedTransaction(signature.rawTransaction).on(
            "receipt", async () => {
                const events = await crowdFundContract.getPastEvents("Pledge", { fromBlock: 0, toBlock: "latest" })
                console.log(events);
            }
        ).on("error", async (err) => <Toast message={err.message} type={"error"} />)

    }
    send(ethAmount)

}

export default pledgeCampaign