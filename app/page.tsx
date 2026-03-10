import { Headphones } from 'lucide-react';
import { MusicLink } from '@/components/music-link';
import { PlaylistTicker } from '@/components/playlist-ticker';
import { ReferralsSection } from '@/components/referrals-section';
import { SiteHeader } from '@/components/site-header';
import { content } from '@/data/content';

export default function Home() {
  return (
    <main className='page-shell relative min-h-screen overflow-hidden'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.18)_1px,transparent_0)] [background-size:22px_22px]'
      />
      <div
        aria-hidden='true'
        className='grid-noise pointer-events-none absolute inset-x-0 top-0 h-80 opacity-40'
      />
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -left-24 top-28 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl'
      />
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -right-28 top-14 h-72 w-72 rounded-full bg-rose-500/10 blur-3xl'
      />

      <div className='relative mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-6 sm:px-6 lg:px-8 lg:py-8'>
        <SiteHeader profile={content.profile} />

        <section
          id='playlist'
          className='glass-panel rounded-[30px] border border-white/10 p-4 sm:p-5'
        >
          <div className='mb-4 flex items-center gap-3'>
            <div className='flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5'>
              <Headphones className='h-[18px] w-[18px] text-white' />
            </div>
            <div>
              <p className='text-xs uppercase tracking-[0.32em] text-white/45'>
                Playlist
              </p>
              <h2 className='heading-display text-2xl font-black text-white'>
                Satu playlist, dua platform, full battle mode
              </h2>
            </div>
          </div>
          <p className='max-w-3xl text-sm leading-6 text-white/65 sm:text-base'>
            Bukan playlist santai. Isinya anthem buat ngoding, nyetir, nge-push
            deadline, atau sekadar masuk mode karakter utama. Playlist-nya sama,
            tinggal pilih platform yang paling enak buat kamu.
          </p>

          <div className='mt-4 grid gap-3 sm:grid-cols-2'>
            {content.links.map((link) => (
              <MusicLink key={link.type} link={link} />
            ))}
          </div>

          <PlaylistTicker items={content.playlistPreview} />
        </section>

        <ReferralsSection
          section={content.referralsSection}
          items={content.referrals}
        />
      </div>
    </main>
  );
}
