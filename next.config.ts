import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["assets.aceternity.com", "img.freepik.com", "images.unsplash.com", "unsplash.com", "randomuser.me"], // Add allowed image domains here
  },
};

export default nextConfig;
