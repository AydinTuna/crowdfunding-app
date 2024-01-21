import CampaignForm from '@/components/CampaignForm'


function Page() {
    return (
        <div className='min-h-screen bg-white flex flex-col justify-start items-center'>
            <h1 className="text-3xl text-gray-900 dark:text-white text-center">Welcome to Create Campaign Page</h1>
            <CampaignForm />
        </div>
    )
}

export default Page