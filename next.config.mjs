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
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**'
      }
    ],
    dangerouslyAllowSVG: true
  }
  // missingSuspenseWithCSRBailout: true
};

export default nextConfig;
