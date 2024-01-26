import MyCampaignsContainer from "@/components/MyCampaignsContainer"
import { readJsonData } from "@/scripts/readJsonFile";


function page() {
    let campaignDatas = readJsonData()

    return (
        <div className='min-h-screen bg-white flex flex-col justify-start items-center'>
            <MyCampaignsContainer campaignDatas={campaignDatas} />
        </div>
    )
}

export default page