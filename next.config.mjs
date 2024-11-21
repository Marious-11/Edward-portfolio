const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Cho phép mọi hostname
        pathname: "/**", // Cho phép tất cả các đường dẫn
      },
    ],
  },
};

export default nextConfig;
