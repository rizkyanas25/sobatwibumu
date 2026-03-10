'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { trackEvent } from '@/lib/gtag';
import type { ReferralItem } from '@/data/content';

type ReferralCardProps = {
  item: ReferralItem;
};

const categoryStyles = {
  Setup: 'border-sky-300/20 bg-sky-300/10 text-sky-100',
  Merch: 'border-rose-300/20 bg-rose-300/10 text-rose-100',
  Toys: 'border-amber-300/20 bg-amber-300/10 text-amber-100',
} as const;

function getCategoryStyle(category: string) {
  return (
    categoryStyles[category as keyof typeof categoryStyles] ??
    'border-white/10 bg-white/5 text-white/80'
  );
}

export function ReferralCard({ item }: ReferralCardProps) {
  return (
    <motion.a
      href={item.url}
      target='_blank'
      rel='noreferrer'
      onClick={() =>
        trackEvent('click_cek_racun', {
          product_name: item.title,
          link_url: item.url,
        })
      }
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className='group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] shadow-[0_20px_60px_rgba(0,0,0,0.22)]'
    >
      {/* Mobile Background Image */}
      <div className='absolute inset-0 z-0 sm:hidden'>
        <img
          src={item.image}
          alt={item.title}
          className='h-full w-full object-cover transition duration-500 group-hover:scale-105'
        />
        {/* Dark overlay for text readability + thin white overlay as requested */}
        <div className='absolute inset-0 bg-black/60' />
        <div className='absolute inset-0 bg-white/5 backdrop-blur-[2px]' />
      </div>

      {/* Desktop Image */}
      <div className='relative z-10 hidden aspect-square w-full shrink-0 overflow-hidden border-b border-white/10 sm:block'>
        <div className='absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(5,5,5,0.04),rgba(5,5,5,0.28))]' />
        <img
          src={item.image}
          alt={item.title}
          className='h-full w-full object-cover transition duration-500 group-hover:scale-105'
        />
      </div>

      {/* Content wrapper */}
      <div className='relative z-10 flex flex-1 flex-col gap-3 p-5 sm:gap-4 sm:p-5'>
        <div>
          <span
            className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${getCategoryStyle(item.category)}`}
          >
            {item.category}
          </span>
        </div>

        <div className='space-y-2'>
          <h3 className='text-base font-semibold leading-tight text-white sm:text-lg'>
            {item.title}
          </h3>
          <p className='text-sm leading-6 text-white/70 line-clamp-3 sm:line-clamp-none'>
            {item.desc}
          </p>
        </div>

        <div className='mt-auto inline-flex items-center gap-2 pt-2 text-sm font-medium text-white'>
          <span>Cek racunnya</span>
          <ArrowUpRight className='h-4 w-4 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
        </div>
      </div>
    </motion.a>
  );
}
