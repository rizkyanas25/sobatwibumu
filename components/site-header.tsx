'use client';

import Image from 'next/image';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import type { Profile } from '@/data/content';

type SiteHeaderProps = {
  profile: Profile;
};

export function SiteHeader({ profile }: SiteHeaderProps) {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className='glass-panel relative overflow-hidden rounded-[32px] border border-white/10 px-4 py-4 sm:px-5 sm:py-5'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,36,60,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.12),transparent_24%),linear-gradient(160deg,rgba(255,255,255,0.04),transparent_40%)]'
      />
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-x-5 top-0 h-px bg-white/10'
      />

      <div className='relative grid gap-4 lg:grid-cols-[1fr_320px] lg:items-center'>
        <div className='flex min-w-0 items-center gap-4 sm:flex-row'>
          {/* Left: Avatar (50% on mobile, fixed size on sm+) */}
          <div className='relative aspect-square w-1/2 overflow-hidden rounded-full border border-white/10 sm:h-20 sm:w-20 sm:shrink-0 lg:h-24 lg:w-24'>
            <Image
              src={profile.avatar}
              alt={`${profile.name} avatar`}
              fill
              priority
              sizes='(max-width: 640px) 50vw, 80px'
              className='object-cover object-center'
            />
          </div>

          {/* Right: Info (50% on mobile, fluid on sm+) */}
          <div className='flex w-1/2 min-w-0 flex-col space-y-1.5 sm:w-auto sm:flex-1 sm:space-y-2'>
            <h1 className='heading-display text-2xl font-black text-white sm:text-3xl lg:text-4xl'>
              {profile.name}
            </h1>
            <div className='flex flex-col gap-1'>
              {profile.bio.split('\n').map((line, index) => (
                <p
                  key={index}
                  className='text-xs leading-5 text-white/70 sm:text-sm sm:leading-6'
                >
                  {line}
                </p>
              ))}
            </div>
            <div className='flex flex-wrap gap-1.5 sm:gap-2'>
              <span className='rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/75 sm:px-3 sm:py-1.5 sm:text-xs'>
                {`📍 ${profile.location}`}
              </span>
            </div>
          </div>
        </div>

        <div className='rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(56,189,248,0.08),rgba(250,36,60,0.08))] p-4 backdrop-blur-sm'>
          <h2 className='mt-2 text-lg font-semibold text-white'>
            {profile.portfolioPrompt}
          </h2>
          <p className='mt-2 text-sm leading-6 text-white/65'>
            {profile.portfolioDescription}
          </p>
          <a
            href={profile.portfolioUrl}
            target='_blank'
            rel='noreferrer'
            className='mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-4 py-3 text-sm font-medium text-white/90 backdrop-blur-sm'
          >
            <span>Lihat Portfolio</span>
            <ArrowUpRight className='h-4 w-4' />
          </a>
        </div>
      </div>

      <div className='mt-4 flex flex-col gap-3 lg:hidden'>
        <a
          href='#playlist'
          onClick={(e) => scrollTo(e, 'playlist')}
          className='inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/10'
        >
          Lihat Playlist
          <ArrowDownRight className='h-4 w-4' />
        </a>
        <a
          href='#racun'
          onClick={(e) => scrollTo(e, 'racun')}
          className='inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/10'
        >
          Lihat Racun
          <ArrowDownRight className='h-4 w-4' />
        </a>
      </div>
    </header>
  );
}
