"use client"

import '@rainbow-me/rainbowkit/styles.css';
import {
    getDefaultWallets,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
    mainnet,
    goerli,
    polygon,
    optimism,
    arbitrum,
    base,
    zora,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

function WalletProvider({ children }) {
    const { chains, publicClient } = configureChains(
        [mainnet, goerli, polygon, optimism, arbitrum, base, zora],
        [
            alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
            publicProvider()
        ]
    );

    const { connectors } = getDefaultWallets({
        appName: 'Crowdfunding',
        projectId: process.env.WALLET_CONNECT_ID,
        chains
    });

    const wagmiConfig = createConfig({
        autoConnect: true,
        connectors,
        publicClient
    })

    return (
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains}>
                {children}
            </RainbowKitProvider>
        </WagmiConfig>
    )
}

export default WalletProvider