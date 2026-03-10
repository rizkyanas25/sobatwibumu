import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';

const SITE_URL = 'https://sobatwibumu.vercel.app';
const SITE_NAME = 'Sobat Wibu Mu';
const SITE_DESCRIPTION =
  'Kerja demi nafkah, wibu demi jiwa. Playlist anisong, racun setup & merch, plus portofolio dev — semua dijadiin satu tempat.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${SITE_NAME} — Kerja demi nafkah, wibu demi jiwa`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'sobat wibu',
    'wibu indonesia',
    'anisong playlist',
    'anime playlist',
    'setup wibu',
    'merch anime',
    'figure anime',
    'developer wibu',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,

  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Kerja demi nafkah, wibu demi jiwa`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Kerja demi nafkah, wibu demi jiwa`,
    description: SITE_DESCRIPTION,
    images: ['/opengraph-image.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sobat Wibu Mu',
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  sameAs: [
    'https://nyunk-dev.vercel.app/',
    'https://music.apple.com/id/playlist/anisongs/pl.u-ZmblxbmsV19eKaj',
    'https://open.spotify.com/playlist/5PTu1Hm8TvHhRKKBp1NAE1',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='id'>
      <body className='min-h-screen bg-[#0A0A0A] text-[#F6F1E8] antialiased'>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
    </html>
  );
}
