import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://synaptiq.systems";
  const routes = ["/en", "/fr", "/en/privacy", "/fr/privacy", "/en/terms", "/fr/terms", "/en/cookies", "/fr/cookies"];
  return routes.map((p) => ({ url: `${base}${p}`, lastModified: new Date() }));
}


