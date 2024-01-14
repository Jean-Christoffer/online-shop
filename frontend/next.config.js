/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
              protocol: 'https',
              hostname: "static.noroff.dev",
            },
          ],
    }
}

module.exports = nextConfig
