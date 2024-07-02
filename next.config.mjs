/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.website-files.com",
        port: "",
        pathname: "/63904f663019b0d8edf8d57c/**",
      },
      {
        protocol: "https",
        hostname: "image.zenlesszonezerocharacters.com",
        port: "",
        pathname: "/image/**",
      },
    ],
  },
};

export default nextConfig;
