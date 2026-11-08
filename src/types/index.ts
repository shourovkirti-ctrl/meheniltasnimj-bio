export type SocialPlatform =
  | "facebook"
  | "instagram"
  | "twitter"
  | "x"
  | "youtube"
  | "linkedin"
  | "github"
  | "whatsapp"
  | "telegram"
  | "discord"
  | "tiktok"
  | "spotify"
  | "email"
  | "phone"
  | "twitch"
  | "pinterest"
  | "medium"
  | "threads";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  label?: string;
}

export interface LinkItem {
  id: string;
  title: string;
  url: string;
  subtitle?: string;
  icon?: string; // Lucide icon name or emoji
  badge?: string; // e.g. "NEW", "HOT", "SAVE 20%"
  highlight?: boolean; // Glowing border animation
  pinned?: boolean;
  category?: string; // For grouping
}

export interface ProfileConfig {
  name: string;
  handle: string;
  avatar: string;
  title: string;
  bio: string;
  location?: string;
  verified?: boolean;
  status?: {
    text: string;
    emoji?: string;
    color?: string;
  };
  socials: SocialLink[];
  categories?: string[];
  links: LinkItem[];
  vcard?: {
    enabled: boolean;
    fullName: string;
    phone?: string;
    email?: string;
    organization?: string;
    title?: string;
    website?: string;
  };
  seo: {
    title: string;
    description: string;
    ogImage?: string;
    keywords?: string[];
  };
  footerText?: string;
}

export type ThemeId =
  | "dark-glass"
  | "amoled-midnight"
  | "sunset-glow"
  | "emerald-forest"
  | "minimal-light"
  | "cyber-violet";

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  bgClass: string;
  cardClass: string;
  textPrimary: string;
  textSecondary: string;
  accentClass: string;
  highlightClass: string;
}
