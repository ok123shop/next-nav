import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    transpilePackages: ['next-mdx-remote'],
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
            }, {
              protocol: 'https',
              hostname: 'www.bilibili.com',
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

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)
