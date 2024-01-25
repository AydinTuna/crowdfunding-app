"use client"
import { useAccount } from "wagmi"
import Campaigns from "./Campaigns"

function PageContainer({ campaignData }) {
    const { isConnected } = useAccount()
    return (
        <main className="flex bg-white flex-col items-center justify-start">
            <Campaigns campaignData={campaignData} />
        </main>
    )
}

export default PageContainer