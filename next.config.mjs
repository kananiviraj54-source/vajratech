/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep the live development server independent of production build output.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
};
export default nextConfig;
