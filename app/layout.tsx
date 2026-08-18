import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { siteConfig, siteUrl } from '@/lib/constants';

/**
 * Guidebook §4.1 — two fonts, no more.
 * Self-hosted through next/font so there is no render-blocking request to
 * Google and no layout shift when the face swaps in.
 */
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

const pageTitle = `${siteConfig.name} | ${siteConfig.role}`;

/** Guidebook §9: titles, descriptions, alt text, clean URLs. */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: pageTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.summary,
  applicationName: `${siteConfig.name} Portfolio`,
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  keywords: [
    'Anurag Kumar',
    'Software Developer',
    'Backend Developer',
    'Full Stack Developer',
    'Distributed Systems',
    'REST API',
    'Node.js',
    'Next.js',
    'Python',
    'FastAPI',
    'Kubernetes',
    'Open Source Contributor',
    'Newton School of Technology',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    url: siteUrl,
    siteName: `${siteConfig.name} Portfolio`,
    title: pageTitle,
    description: siteConfig.subheadline,
    locale: 'en_IN',
    images: [
      {
        url: '/images/profile-pic.webp',
        width: 1000,
        height: 1502,
        alt: `${siteConfig.name}, ${siteConfig.role}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: siteConfig.subheadline,
    images: ['/images/profile-pic.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  category: 'technology',
};

export const viewport: Viewport = {
  themeColor: '#08090b',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

/** Structured data so search engines can render a rich person card. */
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  description: siteConfig.summary,
  url: siteUrl,
  image: `${siteUrl}/images/profile-pic.webp`,
  email: siteConfig.links.emailAddress,
  telephone: '+918210816017',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sonipat',
    addressRegion: 'Haryana',
    addressCountry: 'IN',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Newton School of Technology, Rishihood University',
  },
  knowsAbout: [
    'Backend Engineering',
    'Distributed Systems',
    'REST API Development',
    'Full Stack Development',
    'Kubernetes',
    'Data Structures and Algorithms',
  ],
  sameAs: [
    siteConfig.links.github,
    siteConfig.links.linkedin,
    siteConfig.links.leetcode,
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          // Static, author-controlled object — not user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
