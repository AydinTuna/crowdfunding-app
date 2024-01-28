"use client"
import Link from 'next/link'
const { Web3 } = require('web3');




function Campaigns({ campaignData }) {
    const web3 = new Web3(
        `https://eth-${process.env.ETHEREUM_NETWORK}.g.alchemy.com/v2/${process.env.ALCHEMY_ID}`
    )
    const unixToDate = (unixTimestamp) => {
        const date = new Date(unixTimestamp * 1000);
        const day = ('0' + date.getDate()).slice(-2);
        const formattedDate = day;
        return formattedDate;
    }

    const totalPledgedEth = parseFloat(web3.utils.fromWei(campaignData.totalPledged, 'ether'))
    const formattedTime = unixToDate(campaignData.endDate - campaignData.startDate)


    const queryString = encodeURIComponent(JSON.stringify(campaignData))

    return (
        <Link href={`/campaign-details?campaign=${queryString}`} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-12 mt-8 w-full">
            <div>
                <img className="rounded-t-lg" src="" alt="campaign image" />
            </div>
            <div className="p-5">
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{campaignData.title}</h3>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{campaignData.shortDescription}</p>
                <p className="mb-3 font-medium text-gray-700 dark:text-gray-400 text-lg">{campaignData.category}</p>
                <div className="mb-3 flex items-center justify-between text-gray-700 dark:text-gray-400 text-lg">
                    <p className="font-medium">${totalPledgedEth.toFixed(3)} ETH raised</p> {/* wei to eth */}
                    {/* <p className="font-bold">100%</p> */}
                </div>
                <p className="mb-3 font-medium text-gray-700 dark:text-gray-400 text-lg">{formattedTime} days left</p> {/* unix to utc */}
            </div>
        </Link>
    )
}

export default Campaigns