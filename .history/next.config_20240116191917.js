/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
        mdxRs: true,
        serverComponentsExternalPackages: ['mongoose']
    },
    images: {
        remotePatterns
    }
};

module.exports = nextConfig;