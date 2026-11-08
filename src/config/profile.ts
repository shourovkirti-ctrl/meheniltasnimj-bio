import { ProfileConfig } from "@/types";

/**
 * 🌟 এখানে আপনার নিজের তথ্য ও লিংকগুলো বসিয়ে দিন।
 * কোনো কোডিং জানা লাগবে না! শুধু টেক্সট এবং লিংক পরিবর্তন করলেই সাইট আপডেট হয়ে যাবে।
 */
export const profileConfig: ProfileConfig = {
  // আপনার নাম ও ইউজারনেম
  name: "তানভীর আহমেদ",
  handle: "@tanvir_dev",
  
  // প্রোফাইল ছবি (আপনার ছবি public ফোল্ডারে রেখে "/avatar.jpg" দিতে পারেন অথবা যেকোনো অনলাইন ইমেজ লিংক)
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
  
  // আপনার উপাধি / প্রফেশনাল টাইটেল
  title: "Full-Stack Developer & Creator 🚀",
  
  // ছোট বায়ো
  bio: "ক্রিয়েটিভ ওয়েব ও মোবাইল অ্যাপ্লিকেশন ডেভেলপ করি। আধুনিক টেকনোলজি এবং ইউজার এক্সপেরিয়েন্স নিয়ে কাজ করতে ভালোবাসি।",
  
  // আপনার লোকেশন (ঐচ্ছিক)
  location: "ঢাকা, বাংলাদেশ",
  
  // ভেরিফায়েড টিক মার্ক দেখাবেন কি না? (true / false)
  verified: true,
  
  // বর্তমান স্ট্যাটাস ব্যাজ (ঐচ্ছিক)
  status: {
    emoji: "💡",
    text: "নতুন প্রজেক্টের জন্য উন্মুক্ত",
    color: "emerald",
  },

  // সোশ্যাল মিডিয়া লিংকগুলো
  socials: [
    { platform: "facebook", url: "https://facebook.com", label: "Facebook" },
    { platform: "instagram", url: "https://instagram.com", label: "Instagram" },
    { platform: "x", url: "https://x.com", label: "X (Twitter)" },
    { platform: "youtube", url: "https://youtube.com", label: "YouTube" },
    { platform: "linkedin", url: "https://linkedin.com", label: "LinkedIn" },
    { platform: "github", url: "https://github.com", label: "GitHub" },
    { platform: "whatsapp", url: "https://wa.me/8801700000000", label: "WhatsApp" },
    { platform: "email", url: "mailto:hello@example.com", label: "Email" },
  ],

  // ক্যাটাগরি ফিল্টার (যদি ক্যাটাগরি অনুযায়ী সাজাতে চান)
  categories: ["সবগুলো", "প্রজেক্ট", "সার্ভিস", "কনটেন্ট"],

  // আপনার মূল লিংকগুলো (যেগুলো ভিজিটররা ক্লিক করবে)
  links: [
    {
      id: "featured-portfolio",
      title: "🌐 আমার পার্সোনাল পোর্টফোলিও",
      subtitle: "আমার সাম্প্রতিক প্রজেক্ট ও কাজের ডেমো দেখুন",
      url: "https://example.com/portfolio",
      icon: "Globe",
      badge: "FEATURED",
      highlight: true, // বিশেষ অ্যানিমেটেড গ্লো ইফেক্ট
      pinned: true,
      category: "প্রজেক্ট",
    },
    {
      id: "book-meeting",
      title: "📅 ফ্রি কনসালটেশন বা মিটিং বুক করুন",
      subtitle: "১৫ মিনিটের ওয়ান-অন-ওয়ান ফ্রি ডিসকাশন",
      url: "https://calendly.com",
      icon: "CalendarCheck",
      badge: "FREE",
      highlight: false,
      category: "সার্ভিস",
    },
    {
      id: "youtube-latest",
      title: "🎥 সর্বশেষ ইউটিউব ভিডিও টিউটোরিয়াল",
      subtitle: "কিভাবে মাত্র ১০ মিনিটে ফ্রিতে নিজের ওয়েবসাইট বানাবেন",
      url: "https://youtube.com",
      icon: "Youtube",
      badge: "NEW",
      highlight: false,
      category: "কনটেন্ট",
    },
    {
      id: "github-repos",
      title: "💻 গিটহাব ওপেন সোর্স প্রজেক্টস",
      subtitle: "আমার ওপেন সোর্স কোড ও রিপোজিটরিগুলো এক্সপ্লোর করুন",
      url: "https://github.com",
      icon: "Github",
      highlight: false,
      category: "প্রজেক্ট",
    },
    {
      id: "whatsapp-chat",
      title: "💬 সরাসরি হোয়াটসঅ্যাপে যোগাযোগ",
      subtitle: "যেকোনো প্রজেক্ট ইনকোয়ারি বা সাপোর্টের জন্য সরাসরি টেক্সট দিন",
      url: "https://wa.me/8801700000000",
      icon: "MessageCircle",
      highlight: false,
      category: "সার্ভিস",
    },
    {
      id: "buy-me-coffee",
      title: "☕ আমাকে একটি কফি ট্রিট দিন",
      subtitle: "আমার কাজ ভালো লাগলে সাপোর্ট করতে পারেন",
      url: "https://buymeacoffee.com",
      icon: "Coffee",
      badge: "SUPPORT",
      highlight: false,
      category: "কনটেন্ট",
    },
  ],

  // ভিজিটররা এক ক্লিকে আপনার কন্টাক্ট ফোনে সেভ করতে পারবে (vCard)
  vcard: {
    enabled: true,
    fullName: "তানভীর আহমেদ",
    phone: "+8801700000000",
    email: "hello@example.com",
    organization: "Dev Studio",
    title: "Software Engineer",
    website: "https://example.com",
  },

  // এসইও (গুগল সার্চ ও সোশ্যাল প্রিভিউ অপ্টিমাইজেশন)
  seo: {
    title: "তানভীর আহমেদ | অফিসিয়াল লিঙ্কস ও সোশ্যাল বায়ো",
    description: "তানভীর আহমেদের অফিসিয়াল লিঙ্কট্রি বিকল্প বায়ো পেজ। সোশ্যাল মিডিয়া, প্রজেক্ট এবং কন্টাক্ট লিংকসমূহ এক জায়গায়।",
    keywords: ["Tanvir Ahmed", "Bio Links", "Developer", "Portfolio", "Linktree Alternative"],
  },

  footerText: "© 2026 Tanvir Ahmed. Zero monthly fees, 100% self-hosted.",
};
