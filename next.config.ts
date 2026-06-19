import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.rossenterprises.in" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "www.parker.com" },
      { protocol: "https", hostname: "www.nitto-kohki.co.jp" },
      { protocol: "https", hostname: "logos-download.com" },
      { protocol: "https", hostname: "www.pneumaxspa.com" },
      { protocol: "https", hostname: "www.luthrapneumsys.com" },
      { protocol: "https", hostname: "www.cmatic.com" },
      { protocol: "https", hostname: "www.uflowautomation.com" },
      { protocol: "https", hostname: "logodownload.org" },
      { protocol: "https", hostname: "static.cdnlogo.com" },
      { protocol: "https", hostname: "www.freepnglogos.com" },
      { protocol: "https", hostname: "corporate.apollotyres.com" },
      { protocol: "https", hostname: "bancoindia.com" },
      { protocol: "https", hostname: "companieslogo.com" },
      { protocol: "https", hostname: "www.rpggroup.com" },
      { protocol: "https", hostname: "realbites.com" },
      { protocol: "https", hostname: "rotexautomation.com" },
      { protocol: "https", hostname: "amul.com" },
      { protocol: "https", hostname: "www.adityabirla.com" },
      { protocol: "https", hostname: "www.baumer.com" },
    ],
  },
};

export default nextConfig;
