"use client"

function Campaigns({ campaignData }) {
    return (
        <a href="/campaign-details" className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-12 mt-8 w-full">
            <div href="/campaign-details">
                <img className="rounded-t-lg" src="" alt="campaign image" />
            </div>
            <div className="p-5">
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{campaignData.title}</h3>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{campaignData.shortDescription}</p>
                <p className="mb-3 font-medium text-gray-700 dark:text-gray-400 text-lg">{campaignData.category}</p>
                <div className="mb-3 flex items-center justify-between text-gray-700 dark:text-gray-400 text-lg">
                    <p className="font-medium">${campaignData.totalPledged} ETH raised</p> {/* wei to eth */}
                    <p className="font-bold">100%</p>
                </div>
                <p className="mb-3 font-medium text-gray-700 dark:text-gray-400 text-lg">{campaignData.endDate - campaignData.startDate} days left</p> {/* unix to utc */}
            </div>
        </a>
    )
}

export default Campaigns