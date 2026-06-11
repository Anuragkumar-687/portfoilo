import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anurag Kumar — Full Stack Developer & AI Engineer',
  description:
    'Portfolio of Anurag Kumar — Full Stack Developer & AI Undergraduate. Building scalable web applications with Next.js, Node.js, and MongoDB. Open to software engineering internships and full-stack roles.',
  keywords: [
    'Anurag Kumar',
    'Full Stack Developer',
    'Software Engineer',
    'Next.js',
    'React',
    'Node.js',
    'MongoDB',
    'AI',
    'Portfolio',
  ],
  authors: [{ name: 'Anurag Kumar' }],
  openGraph: {
    title: 'Anurag Kumar — Full Stack Developer & AI Engineer',
    description: 'Building scalable web applications and solving complex problems.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="https://cdn-icons-png.freepik.com/256/12539/12539811.png" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning style={{ background: '#050505' }}>
        {children}
      </body>
    </html>
  );
}