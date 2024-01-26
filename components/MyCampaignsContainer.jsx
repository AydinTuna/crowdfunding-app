"use client"
import { useAccount } from 'wagmi'
import Campaigns from './Campaigns';

function MyCampaignsContainer({ campaignDatas }) {
    const { address } = useAccount()
    const foundCampaigns = campaignDatas.campaigns.filter(campaign => campaign.userAddress === address);

    return (
        <>
            {foundCampaigns.map(campaignData => <Campaigns key={campaignData.id} campaignData={campaignData} />)}
        </>
    )
}

export default MyCampaignsContainer