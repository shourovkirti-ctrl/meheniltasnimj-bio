import { ProfileConfig } from "@/types";

/**
 * 🌟 মেহেনিল তাসনিম জয়া (@meheniltasnimj) এর অফিসিয়াল বায়ো-লিংক কনফিগারেশন
 */
export const profileConfig: ProfileConfig = {
  // নাম ও সোশ্যাল হ্যান্ডেল
  name: "Mehenil Tasnim Joya",
  handle: "@meheniltasnimj",
  
  // প্রোফাইল ছবি (public/avatar.jpg থেকে সরাসরি নেওয়া হয়েছে)
  avatar: "/avatar.jpg",
  
  // প্রফেশনাল টাইটেল / বায়ো
  title: "Fashion & Lifestyle Muse ✨",
  
  // সংক্ষিপ্ত বায়ো
  bio: "Unfiltered aesthetics, modern fashion, and daily musings. Welcome to my official links space 🕊️🤍",
  
  // লোকেশন
  location: "Dhaka, Bangladesh",
  
  // ভেরিফায়েড ব্যাজ (True থাকলে ব্লু টিক দেখাবে)
  verified: true,
  
  // স্ট্যাটাস পিল
  status: {
    emoji: "✨",
    text: "Open for PR & Brand Collaborations",
    color: "emerald",
  },

  // সোশ্যাল মিডিয়া লিংকগুলো (উপরের সারিতে শো করবে)
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

  // ক্যাটাগরি ফিল্টার ট্যাব
  categories: ["সবগুলো", "সোশ্যাল মিডিয়া", "কলাবোরেশন", "এক্সক্লুসিভ"],

  // মূল লিংক কার্ডগুলো
  links: [
    {
      id: "instagram-main",
      title: "📸 Instagram Official",
      subtitle: "@meheniltasnimj07 • ডেইলি লাইফস্টাইল, রিলস ও ফ্যাশন লুকস",
      url: "https://www.instagram.com/meheniltasnimj07/",
      icon: "Instagram",
      badge: "ACTIVE",
      highlight: true, // বিশেষ অ্যানিমেটেড গ্লো ইফেক্ট
      pinned: true,
      category: "সোশ্যাল মিডিয়া",
    },
    {
      id: "x-twitter-main",
      title: "🐦 X (Twitter) Profile",
      subtitle: "@meheniltasnimj • এক্সক্লুসিভ ফটো ড্রপস, থ্রেডস ও থটস",
      url: "https://x.com/meheniltasnimj",
      icon: "Twitter",
      badge: "VERIFIED",
      highlight: true,
      pinned: true,
      category: "সোশ্যাল মিডিয়া",
    },
    {
      id: "facebook-page-main",
      title: "📘 Facebook Page",
      subtitle: "অফিসিয়াল ফেসবুক পেজে যুক্ত থাকুন ও ফলো করুন",
      url: "https://www.facebook.com/profile.php?id=61595995216646",
      icon: "Facebook",
      highlight: false,
      category: "সোশ্যাল মিডিয়া",
    },
    {
      id: "brand-collab",
      title: "💼 Brand Collaboration & PR",
      subtitle: "ব্র্যান্ড স্পনসরশিপ, ফটোশুট ও প্রমোশনাল ইনকোয়ারির জন্য ইমেইল করুন",
      url: "mailto:contact.meheniltasnimj@gmail.com?subject=Brand%20Collaboration%20Inquiry",
      icon: "Briefcase",
      badge: "INQUIRY",
      highlight: false,
      category: "কলাবোরেশন",
    },
    {
      id: "exclusive-feed",
      title: "✨ Exclusive Photo Drops & Archives",
      subtitle: "আমার আনরিলিজড ফটো আর্কাইভ ও হাই-রেস লুকবুক",
      url: "https://x.com/meheniltasnimj",
      icon: "Sparkles",
      badge: "NEW",
      highlight: false,
      category: "এক্সক্লুসিভ",
    },
  ],

  // ভিজিটররা যাতে ১ ক্লিকে ফোনে কন্টাক্ট সেভ করতে পারে
  vcard: {
    enabled: true,
    fullName: "Mehenil Tasnim Joya",
    email: "contact.meheniltasnimj@gmail.com",
    organization: "Creator / Fashion Influencer",
    title: "Fashion & Lifestyle Muse",
    website: "https://x.com/meheniltasnimj",
  },

  // এসইও এবং সোশ্যাল মিডিয়া প্রিভিউ (OpenGraph)
  seo: {
    title: "Mehenil Tasnim Joya (@meheniltasnimj) | Official Links",
    description: "Official bio links of Mehenil Tasnim Joya. Connect on Instagram, X (Twitter), Facebook, and explore collaboration inquiries.",
    keywords: [
      "Mehenil Tasnim Joya",
      "meheniltasnimj",
      "meheniltasnimj07",
      "Fashion Influencer",
      "Lifestyle Muse",
      "Bio Links",
      "Tasnim Joya",
    ],
  },

  footerText: "© 2026 Mehenil Tasnim Joya. All rights reserved.",
};
