import rawContent from '@/data/content.json';

export type Profile = {
  name: string;
  bio: string;
  location: string;
  avatar: string;
  portfolioUrl: string;
  portfolioPrompt: string;
  portfolioDescription: string;
};

export type LinkItem = {
  label: string;
  url: string;
  type: 'apple-music' | 'spotify';
  eyebrow: string;
  description: string;
};

export type ReferralsSection = {
  eyebrow: string;
  title: string;
  description: string;
};

export type ReferralItem = {
  id: number;
  category: string;
  title: string;
  desc: string;
  url: string;
  image: string;
};

export type Content = {
  profile: Profile;
  playlistPreview: string[];
  links: LinkItem[];
  referralsSection: ReferralsSection;
  referrals: ReferralItem[];
};

export const content = rawContent as Content;
