/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        ALCHEMY_ID: process.env.ALCHEMY_ID,
        WALLET_CONNECT_ID: process.env.WALLET_CONNECT_ID,
        SIGNER_PRIVATE_KEY: process.env.SIGNER_PRIVATE_KEY,
        ETHEREUM_NETWORK: process.env.ETHEREUM_NETWORK
    }
};

export default nextConfig;
