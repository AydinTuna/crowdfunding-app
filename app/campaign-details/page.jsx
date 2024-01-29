import CampaignForm from '@/components/CampaignForm'
import DetailsContainer from '@/components/DetailsContainer';
import pledgeCampaign from '@/scripts/pledgeCampaign'


function Page() {
    return (
        <DetailsContainer pledgeCampaign={pledgeCampaign} />
    )
}

export default Page