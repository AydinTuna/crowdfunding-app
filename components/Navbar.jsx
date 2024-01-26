"use client"
import { ConnectButton } from '@rainbow-me/rainbowkit';
function Navbar() {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 w-full text-black">
            <div className="flex flex-col items-center justify-center mx-auto py-12">
                <ConnectButton />
                <ul className='flex items-center justify-between mt-8 font-medium'>
                    <li className='py-2 px-3 mx-3 text-blue-600 dark:text-blue-500 hover:underline'>
                        <a href="/">Home</a>
                    </li>
                    <li className='py-2 px-3 mx-3 text-blue-600 dark:text-blue-500 hover:underline'>
                        <a href="/my-campaigns">My Campaigns</a>
                    </li>
                    <li className='mx-6 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
                        <a href="/create-campaign">Create Campaign</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar