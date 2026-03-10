'use client';

import { Disc3 } from 'lucide-react';

type PlaylistTickerProps = {
  items: string[];
};

export function PlaylistTicker({ items }: PlaylistTickerProps) {
  const track = [...items, ...items];

  return (
    <div className='mt-3 rounded-[24px] border border-white/10 bg-black/20 px-4 py-3 backdrop-blur-sm'>
      <div className='mb-2 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.24em] text-white/45'>
        <Disc3 className='h-3.5 w-3.5 text-sky-100' />
        Veteran anisong energy
      </div>

      <div className='overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]'>
        <div className='marquee-track flex w-max gap-2'>
          {track.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className='rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70'
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
