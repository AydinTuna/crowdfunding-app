import PageContainer from "@/components/PageContainer";
require('dotenv').config({ path: '.env.local' })
const { Web3 } = require('web3');
const fs = require("fs-extra");
import { readJsonData } from "@/scripts/readJsonFile";



export default async function Home() {
  let jsonData = readJsonData().campaigns
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


  return (
    <>
      {jsonData.map((campaign) => <PageContainer key={campaign.id} campaignData={campaign} />)}
    </>
  )



}
