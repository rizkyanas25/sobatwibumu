'use client';

import { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { ReferralCard } from '@/components/referral-card';
import { ReferralCardSkeleton } from '@/components/referral-card-skeleton';
import type {
  ReferralItem,
  ReferralsSection as ReferralsSectionType,
} from '@/data/content';

type Filter = ReferralItem['category'] | null;

type ReferralsSectionProps = {
  section: ReferralsSectionType;
  items: ReferralItem[];
};

export function ReferralsSection({ section, items }: ReferralsSectionProps) {
  const isAffiliate = false;
  const [activeFilter, setActiveFilter] = useState<Filter>(null);
  const [displayFilter, setDisplayFilter] = useState<Filter>(null);
  const [isLoading, setIsLoading] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const filters = [...new Set(items.map((item) => item.category))];

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const visibleItems = displayFilter
    ? items.filter((item) => item.category === displayFilter)
    : items;

  function handleFilterClick(filter: string) {
    const nextFilter = activeFilter === filter ? null : filter;

    setActiveFilter(nextFilter);
    setIsLoading(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setDisplayFilter(nextFilter);
      setIsLoading(false);
    }, 240);
  }

  return (
    <section
      id='racun'
      className='glass-panel rounded-[32px] border border-white/10 p-5 sm:p-6'
    >
      <div className='mb-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between'>
        <div className='space-y-3'>
          <div className='inline-flex items-center gap-2 rounded-full border border-sky-300/15 bg-sky-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-sky-100'>
            <Sparkles className='h-3.5 w-3.5' />
            {section.eyebrow}
          </div>
          <h2 className='heading-display max-w-3xl text-3xl font-black text-white sm:text-4xl'>
            {section.title}
          </h2>
          <p className='max-w-2xl text-sm leading-7 text-white/65 sm:text-base'>
            {section.description}
          </p>
        </div>

        {isAffiliate && (
          <div className='flex flex-wrap gap-2'>
            {filters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type='button'
                  onClick={() => handleFilterClick(filter)}
                  className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] transition ${
                    isActive
                      ? 'border-sky-300/25 bg-sky-300/12 text-sky-100'
                      : 'border-white/10 bg-white/5 text-white/65 hover:border-white/20 hover:text-white/85'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {isAffiliate ? (
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3'>
          {isLoading
            ? Array.from({ length: 3 }).map((_, index) => (
                <ReferralCardSkeleton key={`skeleton-${index}`} />
              ))
            : visibleItems.map((item) => (
                <ReferralCard key={item.id} item={item} />
              ))}
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center rounded-[24px] border border-dashed border-white/20 bg-white/5 py-16 text-center'>
          <p className='text-sm font-medium text-white/60 sm:text-base'>
            Belum affiliate gaes, kalo udah affiliate nanti product racun
            ditambahin ke sini yaa 🙏
          </p>
        </div>
      )}
    </section>
  );
}
