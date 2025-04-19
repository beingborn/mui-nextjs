/** @type {import('next').NextConfig} */
const nextConfig = {
    turbopack: {
        rules: {
            '*.svg': {
            loaders: ['@svgr/webpack'],
            as: '*.js',
            },
        },
    },
    // webpack 설정
    webpack: config => {
        config.module.rules.push({
            test: /\.svg$/,             // 1. .svg 확장자 파일만 적용
            use: ["@svgr/webpack"],     // 2. 해당 파일을 @svgr/webpack 로더로 처리
        });
    
        return config;                  // 3. 수정된 config를 반환
    },
};

export default nextConfig;
