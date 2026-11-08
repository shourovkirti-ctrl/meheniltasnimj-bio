import { ProfileConfig } from "@/types";

/**
 * 🌟 Mehenil Tasnim Joya (@meheniltasnimj) Official Bio Configuration
 */
export const profileConfig: ProfileConfig = {
  // Name and Handle
  name: "Mehenil Tasnim Joya",
  handle: "@meheniltasnimj",
  
  // Profile Avatar
  avatar: "/avatar.jpg",
  
  // Title & Bio
  title: "Fashion & Lifestyle Muse ✨",
  bio: "Unfiltered aesthetics, modern fashion, and daily musings. Welcome to my official links space 🕊️🤍",
  
  // Location
  location: "Melbourne, Australia",
  
  // Verified Badge
  verified: true,
  
  // Status Pill
  status: {
    emoji: "✨",
    text: "Open for PR & Brand Collaborations",
    color: "emerald",
  },

  // Social Links
  socials: [
    {
      platform: "instagram",
      url: "https://www.instagram.com/meheniltasnimj07/",
      label: "Instagram",
    },
    {
      platform: "x",
      url: "https://x.com/meheniltasnimj",
      label: "X (Twitter)",
    },
    {
      platform: "facebook",
      url: "https://www.facebook.com/profile.php?id=61595995216646",
      label: "Facebook",
    },
    {
      platform: "email",
      url: "mailto:contact.meheniltasnimj@gmail.com",
      label: "Email",
    },
  ],

  // Category Tabs
  categories: ["All", "Socials", "Collaborations", "Exclusive"],

  // Main Links
  links: [
    {
      id: "instagram-main",
      title: "📸 Instagram Official",
      subtitle: "@meheniltasnimj07 • Daily aesthetics, reels & fashion looks",
      url: "https://www.instagram.com/meheniltasnimj07/",
      icon: "Instagram",
      badge: "ACTIVE",
      highlight: true,
      pinned: true,
      category: "Socials",
    },
    {
      id: "x-twitter-main",
      title: "🐦 X (Twitter) Profile",
      subtitle: "@meheniltasnimj • Unfiltered thoughts, photo sets & threads",
      url: "https://x.com/meheniltasnimj",
      icon: "Twitter",
      badge: "VERIFIED",
      highlight: true,
      pinned: true,
      category: "Socials",
    },
    {
      id: "facebook-page-main",
      title: "📘 Facebook Page",
      subtitle: "Official Facebook community • Updates & media drops",
      url: "https://www.facebook.com/profile.php?id=61595995216646",
      icon: "Facebook",
      highlight: false,
      category: "Socials",
    },
    {
      id: "brand-collab",
      title: "💼 Brand Collaboration & PR",
      subtitle: "Commercial inquiries, sponsorships & editorial bookings",
      url: "mailto:contact.meheniltasnimj@gmail.com?subject=Brand%20Collaboration%20Inquiry",
      icon: "Briefcase",
      badge: "INQUIRY",
      highlight: false,
      category: "Collaborations",
    },
    {
      id: "exclusive-feed",
      title: "✨ Exclusive Lookbook & Archives",
      subtitle: "Unreleased high-res photo archives & editorial sets",
      url: "https://x.com/meheniltasnimj",
      icon: "Sparkles",
      badge: "EXCLUSIVE",
      highlight: false,
      category: "Exclusive",
    },
  ],

  // Save Contact (vCard) disabled per user request
  vcard: {
    enabled: false,
    fullName: "Mehenil Tasnim Joya",
    email: "contact.meheniltasnimj@gmail.com",
    organization: "Creator / Fashion Influencer",
    title: "Fashion & Lifestyle Muse",
    website: "https://x.com/meheniltasnimj",
  },

  // SEO & Social OpenGraph
  seo: {
    title: "Mehenil Tasnim Joya (@meheniltasnimj) | Official Bio Links",
    description: "Official bio links of Mehenil Tasnim Joya. Connect on Instagram, X (Twitter), Facebook, and explore collaboration inquiries.",
    keywords: [
      "Mehenil Tasnim Joya",
      "meheniltasnimj",
      "meheniltasnimj07",
      "Fashion Influencer",
      "Lifestyle Muse",
      "Melbourne",
      "Bio Links",
      "Tasnim Joya",
    ],
  },

  footerText: "© 2026 Mehenil Tasnim Joya. All rights reserved.",
};
