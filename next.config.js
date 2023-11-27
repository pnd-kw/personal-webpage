/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    basePath: isProd ? '/personal-webpage' : '',
    output: 'export',
}

module.exports = nextConfig
