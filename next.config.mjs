/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'oss.ok123.shop',
              port: '',
              pathname: '/**',
            },
            {
              protocol: 'https',
              hostname: 'cdn2.yicanggongyi.com',
              port: '',
              pathname: '/**',
            },
          ],
    },
    async rewrites() {
        return [
          {
            source: '/users/:path*', // 匹配 /api 开头的所有请求
            destination: 'http://localhost:8782/users/:path*', // 转发到本地的 API 服务器
          },
        ];
      },
};

export default nextConfig;
