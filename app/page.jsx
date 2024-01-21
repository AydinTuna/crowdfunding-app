

import Campaigns from "@/components/Campaigns";
require('dotenv').config({ path: '.env.local' })
const { Web3 } = require('web3');
const fs = require("fs-extra");



export default async function Home() {
  let jsonData
  try {
    const data = fs.readFileSync('db/db.json', 'utf-8');
    jsonData = data.trim() === '' ? {} : JSON.parse(data);
  } catch (error) {
    console.error(`Error occurred while reading file: ${error}`);
  }

  console.log(jsonData);
  function initialize() {
    const contractAddress = process.env.CROWDFUND_CONTRACT_ADDRESS
    const { abi } = JSON.parse(fs.readFileSync("ethereum/build/CrowdFund.json"));
    const web3 = new Web3(
      `https://eth-${process.env.ETHEREUM_NETWORK}.g.alchemy.com/v2/${process.env.ALCHEMY_ID}`
    )
    const contract = new web3.eth.Contract(abi, contractAddress);
    return { abi, contract }
  }
  const { abi, contract } = initialize()

  async function getCampaignCount(crowdFundContract) {
    const count = await crowdFundContract.methods.count().call()
    return count
  }
  const campaignCount = await getCampaignCount(contract)
  console.log("CAMPAIGN COUNT", campaignCount);

  for (let i = 0; i < campaignCount; i++) {
    return (
      <main className="flex min-h-screen bg-white flex-col items-center justify-start">
        <Campaigns jsonData={jsonData} />
      </main>
    )
  }


}
