/** @type {import('next').NextConfig} */
const nextConfig = {
  // image support for next js
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**'
      }
    ],
    dangerouslyAllowSVG: true
  }
};

export default nextConfig;
