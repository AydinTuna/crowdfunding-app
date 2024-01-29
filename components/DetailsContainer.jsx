"use client"
import { useSearchParams } from 'next/navigation'

function DetailsContainer({ pledgeCampaign }) {
    const searchParams = useSearchParams()
    const rawData = searchParams.get('campaign')
    const campaign = rawData ? JSON.parse(decodeURIComponent(rawData)) : {};

    return (
        <div className='min-h-screen bg-white flex flex-col justify-start items-center'>
            <h1 className="text-3xl text-gray-900 dark:text-white text-center">Welcome to Campaign Details Page</h1>
            <div className='max-w-md mt-8'>
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{campaign.title}</h3>
                <h3 className="mb-2 text-xl font-normal tracking-tight text-gray-900">{campaign.campaignDescription}</h3>
                <div className='mx-6 mt-4 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
                    <a onClick={() => pledgeCampaign(0.0003)}>Pledge</a>
                </div>
            </div>
        </div>
    )
}

export default DetailsContainer