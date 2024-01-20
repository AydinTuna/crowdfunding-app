/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        ALCHEMY_ID: process.env.ALCHEMY_ID,
        WALLET_CONNECT_ID: process.env.WALLET_CONNECT_ID
    }
};

export default nextConfig;
