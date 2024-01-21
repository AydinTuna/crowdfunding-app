"use server"
import Toast from '@/components/Toast';
import uploadData from '@/scripts/uploadData'
require('dotenv').config({ path: '.env.local' })
const { Web3 } = require('web3');
const fs = require("fs-extra");

const { abi } = JSON.parse(fs.readFileSync("ethereum/build/CrowdFund.json"));
const web3 = new Web3(
    `https://eth-${process.env.ETHEREUM_NETWORK}.g.alchemy.com/v2/${process.env.ALCHEMY_ID}`
)

const dateToUnixTimestamp = (dateString) => {
    const currentUnixTimestamp = Date.now()
    const currentDate = new Date(currentUnixTimestamp * 1000);
    const date = new Date(dateString);
    if (date.getDate() === currentDate.getDate()) {
        const unixTimestamp = Math.floor(currentDate.getTime() / 1000);
        return unixTimestamp;
    } else {
        const unixTimestamp = Math.floor(date.getTime() / 1000);
        return unixTimestamp
    }

}


const createInvoice = async (formData, address) => {
    let signature

    //Uniswap token address in mainnet
    const contractAddress = process.env.CROWDFUND_CONTRACT_ADDRESS

    //instantiate the contract
    const crowdFundContract = new web3.eth.Contract(abi, contractAddress);

    const account = web3.eth.accounts.wallet.add("0x" + process.env.SIGNER_PRIVATE_KEY);
    const value = web3.utils.toWei(formData.get('campaignGoal'), 'ether');


    const send = async () => {
        const _from = account[0].address
        const tx = {
            from: _from,
            to: contractAddress,
            gas: 1000000,
            gasPrice: await web3.eth.getGasPrice(),
            data: crowdFundContract.methods.launch(value, dateToUnixTimestamp(formData.get("dateFrom")),
                dateToUnixTimestamp(formData.get("dateTo"))).encodeABI()
        }
        signature = await web3.eth.accounts.signTransaction(tx, process.env.SIGNER_PRIVATE_KEY)
        console.log("SIGNATURE", signature.transactionHash);

        web3.eth.sendSignedTransaction(signature.rawTransaction).on(
            "receipt", async () => {
                const events = await crowdFundContract.getPastEvents("Launch", { fromBlock: 0, toBlock: "latest" })
                console.log(events);
            }
        ).on("error", async (err) => <Toast message={err.message} type={"error"} />)

        const rawFormData = {
            userAddress: address,
            title: formData.get('title'),
            shortDescription: formData.get('shortDescription'),
            category: formData.get('category'),
            startDate: dateToUnixTimestamp(formData.get("dateFrom")),
            endDate: dateToUnixTimestamp(formData.get("dateTo")),
            campaignGoal: formData.get('campaignGoal'),
            campaignDescription: formData.get('campaignDescription'),
            fileUrl: formData.get('fileUrl'),
            txReceipt: signature // signature.transactionHash
        }

        await uploadData(rawFormData)
    }
    send()



}

export default createInvoice