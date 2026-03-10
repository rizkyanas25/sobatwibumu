'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SiApplemusic, SiSpotify } from 'react-icons/si';
import { trackEvent } from '@/lib/gtag';
import type { LinkItem } from '@/data/content';

type MusicLinkProps = {
  link: LinkItem;
};

const palettes = {
  'apple-music': {
    wrapper:
      'bg-[#FA243C] text-white shadow-[0_18px_50px_rgba(250,36,60,0.24)]',
    button: 'bg-black/12 text-white',
    label: 'Apple Music',
  },
  spotify: {
    wrapper:
      'bg-[#1DB954] text-[#03150A] shadow-[0_18px_50px_rgba(29,185,84,0.24)]',
    button: 'bg-black/10 text-[#03150A]',
    label: 'Spotify',
  },
} as const;

const icons = {
  'apple-music': SiApplemusic,
  spotify: SiSpotify,
} as const;

export function MusicLink({ link }: MusicLinkProps) {
  const palette = palettes[link.type];
  const Icon = icons[link.type];

  return (
    <motion.a
      href={link.url}
      target='_blank'
      rel='noreferrer'
      onClick={() =>
        trackEvent('click_playlist_link', {
          platform: palette.label,
          link_url: link.url,
        })
      }
      whileHover={{ y: -2, scale: 1.005 }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className={`group relative flex items-center justify-between gap-3 overflow-hidden rounded-[24px] border border-white/10 px-4 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.18)] sm:px-5 ${palette.wrapper}`}
    >
      <div className='absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.14),transparent_42%,rgba(255,255,255,0.06))] opacity-80' />

      <div className='relative flex min-w-0 items-center gap-3'>
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${palette.button}`}
        >
          <Icon className='h-5 w-5' />
        </div>
        <div className='min-w-0'>
          <p className='text-[11px] font-medium uppercase tracking-[0.28em] opacity-65'>
            {palette.label}
          </p>
          <p className='truncate text-base font-semibold sm:text-lg'>{`Dengerin di ${palette.label}`}</p>
        </div>
      </div>

      <div
        className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${palette.button}`}
      >
        <ArrowUpRight className='h-4 w-4 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
      </div>
    </motion.a>
  );
}
