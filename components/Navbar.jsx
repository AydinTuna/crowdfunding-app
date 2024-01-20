import { ConnectButton } from '@rainbow-me/rainbowkit';
function Navbar() {
    return (


        <nav className="bg-white border-gray-200 dark:bg-gray-900 w-full">
            <div className="flex items-center justify-center mx-auto py-12">
                <ConnectButton />
            </div>
        </nav>

    )
}

export default Navbar