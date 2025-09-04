import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages용 정적 내보내기
  output: 'export',

    // 이미지 최적화는 정적 사이트에서 작동 안 함
  images: {
    unoptimized: true,
  },
  
  // 선택사항: trailing slash 추가
  trailingSlash: true,
};

export default nextConfig;
