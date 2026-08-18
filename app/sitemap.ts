import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/constants';

/** Required by `output: 'export'` — these are generated once at build time. */
export const dynamic = 'force-static';

/** Guidebook §9 — clean URLs, discoverable by crawlers. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
