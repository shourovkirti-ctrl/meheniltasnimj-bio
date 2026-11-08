/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "meheniltasnimj-bio";
const basePath = isGithubPages ? `/${repoName}` : undefined;

const nextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: isGithubPages ? `/${repoName}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? `/${repoName}` : "",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
