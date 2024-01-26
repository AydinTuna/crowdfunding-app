"use client"
import { useSearchParams } from 'next/navigation'

function DetailsContainer() {
    const searchParams = useSearchParams()
    const rawData = searchParams.get('campaign')
    const campaign = rawData ? JSON.parse(decodeURIComponent(rawData)) : {};

    return (
        <div className='min-h-screen bg-white flex flex-col justify-start items-center'>
            <h1 className="text-3xl text-gray-900 dark:text-white text-center">Welcome to Campaign Details Page</h1>
            <div>
                <img className="rounded-t-lg" src="" alt="campaign image" />
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{campaign.title}</h3>
            </div>
        </div>
    )
}

export default DetailsContainer