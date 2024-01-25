"use client"
import CampaignForm from '@/components/CampaignForm'
import Toast from '@/components/Toast'
import createInvoice from '@/scripts/createFormData'

function Page() {
    return (
        <>
            <Toast message={"hataaaa"} type={"error"} />
            <div className='min-h-screen bg-white flex flex-col justify-start items-center'>
                <h1 className="text-3xl text-gray-900 dark:text-white text-center">Welcome to Create Campaign Page</h1>
                <CampaignForm createInvoice={createInvoice} />
            </div>
        </>
    )
}

export default Page