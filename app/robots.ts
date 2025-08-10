import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://synaptiq.systems";
  return {
    rules: {
      userAgent: "*",
      allow: ["/en", "/fr"],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}


