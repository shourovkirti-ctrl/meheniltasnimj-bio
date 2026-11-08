"use client";

import React, { useState, useEffect } from "react";
import { profileConfig } from "@/config/profile";
import { THEMES } from "@/config/themes";
import { ThemeId } from "@/types";
import { ProfileHeader } from "@/components/ProfileHeader";
import { SocialBar } from "@/components/SocialBar";
import { LinkCard } from "@/components/LinkCard";
import { ThemeSelector } from "@/components/ThemeSelector";
import { ShareModal } from "@/components/ShareModal";
import { CategoryFilter } from "@/components/CategoryFilter";
import { Eye, EyeOff } from "lucide-react";

export default function BioPage() {
  const [currentTheme, setCurrentTheme] = useState<ThemeId>("dark-glass");
  const [activeCategory, setActiveCategory] = useState<string>("সবগুলো");
  const [showStats, setShowStats] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  // Load saved theme preference
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("preferred_bio_theme") as ThemeId;
    if (saved && THEMES[saved]) {
      setCurrentTheme(saved);
    }
  }, []);

  const handleThemeChange = (themeId: ThemeId) => {
    setCurrentTheme(themeId);
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred_bio_theme", themeId);
    }
  };

  const activeThemeConfig = THEMES[currentTheme] || THEMES["dark-glass"];

  // Filter links based on category
  const filteredLinks = profileConfig.links.filter((link) => {
    if (activeCategory === "সবগুলো") return true;
    return link.category === activeCategory;
  });

  return (
    <main
      className={`min-h-screen transition-colors duration-500 flex flex-col justify-between ${activeThemeConfig.bgClass}`}
    >
      {/* Top Floating Controls Bar */}
      <header className="w-full max-w-xl mx-auto px-4 pt-6 pb-2 flex items-center justify-between z-20">
        <div className="flex items-center gap-2">
          {/* Owner click-stats toggle */}
          <button
            onClick={() => setShowStats(!showStats)}
            className={`p-2.5 rounded-full border transition-all duration-200 hover:scale-105 active:scale-95 ${activeThemeConfig.cardClass}`}
            title={showStats ? "অ্যানালিটিক্স লুকান" : "ক্লিক কাউন্টার দেখুন"}
          >
            {showStats ? (
              <EyeOff className="w-4 h-4 text-blue-400" />
            ) : (
              <Eye className="w-4 h-4 text-zinc-400" />
            )}
          </button>
        </div>

        <div className="flex items-center gap-2">
          <ThemeSelector
            currentTheme={currentTheme}
            onThemeChange={handleThemeChange}
            activeThemeConfig={activeThemeConfig}
          />
          <ShareModal
            name={profileConfig.name}
            handle={profileConfig.handle}
            theme={activeThemeConfig}
          />
        </div>
      </header>

      {/* Main Content Area */}
      <div className="w-full max-w-xl mx-auto px-4 py-4 flex-1 flex flex-col items-center">
        {/* Profile Card Header */}
        <ProfileHeader profile={profileConfig} theme={activeThemeConfig} />

        {/* Social Icons Bar */}
        <SocialBar socials={profileConfig.socials} theme={activeThemeConfig} />

        {/* Category Tabs */}
        {profileConfig.categories && profileConfig.categories.length > 1 && (
          <div className="w-full my-4">
            <CategoryFilter
              categories={profileConfig.categories}
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
              theme={activeThemeConfig}
            />
          </div>
        )}

        {/* Links Stack */}
        <section className="w-full space-y-3.5 mt-2">
          {filteredLinks.map((link) => (
            <LinkCard
              key={link.id}
              link={link}
              theme={activeThemeConfig}
              showClickCount={showStats}
            />
          ))}

          {filteredLinks.length === 0 && (
            <div className="text-center py-8 text-zinc-500 text-sm">
              এই ক্যাটাগরিতে এখনো কোনো লিংক যুক্ত করা হয়নি।
            </div>
          )}
        </section>
      </div>

      {/* Footer */}
      <footer className="w-full max-w-xl mx-auto px-4 py-8 text-center text-xs text-zinc-500">
        <p>{profileConfig.footerText}</p>
        <p className="mt-1 text-[11px] text-zinc-600">
          Powered by Next.js & Tailwind CSS • 100% Free & Open Source
        </p>
      </footer>
    </main>
  );
}
