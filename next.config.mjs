import { protocol } from 'socket.io-client';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname: "randomuser.me",
            },
        ],
    },
};



export default nextConfig;
