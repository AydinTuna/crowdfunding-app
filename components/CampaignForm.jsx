"use client"
import DatePicker from "./DatePicker"
import { useAccount } from 'wagmi'


function CampaignForm({ createFormData }) {
    const { address } = useAccount()

    return (
        <>
            <form action={async (e) => await createFormData(e, address)} className="max-w-md mx-auto my-12 w-full">
                <div className="mb-10">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                    <input type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter title" required />
                </div>

                <div className="mb-10">
                    <label htmlFor="shortDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Short description</label>
                    <input type="text" name="shortDescription" id="shortDescription" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter short description" required />
                </div>

                <div className="mb-10">
                    <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select category</label>
                    <select id="category" name="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option>Tech</option>
                        <option>Video game</option>
                        <option>Book</option>
                        <option>Toy</option>
                    </select>
                </div>

                <div className='mb-10 text-black'>
                    <label htmlFor="campaignDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select campaign date</label>
                    <DatePicker />
                </div>

                <div className="w-full mb-10">
                    <label htmlFor="campaignGoal" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select campaign goal</label>
                    <div className="flex justify-start items-center">
                        <input type="number" name="campaignGoal" id="campaignGoal" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-xs" placeholder="0" min={0} step="0.0001" required />
                        <span className="ml-2 text-md font-medium text-gray-900 dark:text-white">ETH</span>
                    </div>
                </div>

                <div className='mb-10'>
                    <label htmlFor="campaignDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Campaign Description</label>
                    <textarea id="campaignDescription" name="campaignDescription" rows="12" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter campaign description..."></textarea>
                </div>

                <div className='mb-10'>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="fileInput">Upload file</label>
                    <input name="fileUrl" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="fileInputHelp" id="fileInput" type="file" />
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Campaign</button>
            </form>
        </>


    )
}

export default CampaignForm