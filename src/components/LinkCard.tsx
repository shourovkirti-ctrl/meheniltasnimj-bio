"use client";

import React, { useState, useEffect } from "react";
import { LinkItem, ThemeConfig } from "@/types";
import { DynamicIcon } from "./DynamicIcon";
import { ArrowUpRight, Pin } from "lucide-react";
import { trackLinkClick, getLinkClicks } from "@/lib/utils";
import confetti from "canvas-confetti";

interface LinkCardProps {
  link: LinkItem;
  theme: ThemeConfig;
  showClickCount?: boolean;
}

export const LinkCard: React.FC<LinkCardProps> = ({
  link,
  theme,
  showClickCount = false,
}) => {
  const [clicks, setClicks] = useState<number>(0);

  useEffect(() => {
    setClicks(getLinkClicks(link.id));
  }, [link.id]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const updated = trackLinkClick(link.id);
    setClicks(updated);

    // Trigger celebration confetti if it's a support / featured link
    if (link.highlight || link.badge === "SUPPORT") {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#3b82f6", "#8b5cf6", "#ec4899", "#10b981"],
      });
    }
  };

  const isHighlighted = link.highlight;

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`group relative flex items-center justify-between w-full p-4 md:p-5 rounded-2xl border transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl active:scale-[0.99] ${
        isHighlighted ? theme.highlightClass : theme.cardClass
      }`}
    >
      {/* Ambient background glow for highlighted items */}
      {isHighlighted && (
        <span className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-sm -z-10 animate-pulse-subtle" />
      )}

      {/* Left side: Icon + Titles */}
      <div className="flex items-center gap-4 min-w-0 pr-3">
        <div
          className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
            isHighlighted
              ? "bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/30"
              : "bg-white/10 dark:bg-white/10 text-current"
          }`}
        >
          <DynamicIcon name={link.icon} className="w-5 h-5" />
        </div>

        <div className="min-w-0 text-left">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className={`font-semibold text-sm md:text-base tracking-wide truncate ${theme.textPrimary}`}>
              {link.title}
            </h3>
            {link.pinned && (
              <Pin className="w-3.5 h-3.5 text-amber-400 rotate-45 flex-shrink-0" />
            )}
            {link.badge && (
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border border-blue-500/30 flex-shrink-0">
                {link.badge}
              </span>
            )}
          </div>

          {link.subtitle && (
            <p className={`text-xs md:text-sm mt-0.5 line-clamp-1 ${theme.textSecondary}`}>
              {link.subtitle}
            </p>
          )}

          {showClickCount && clicks > 0 && (
            <span className="text-[10px] text-zinc-500 mt-1 inline-block">
              {clicks} {clicks === 1 ? "ক্লিক" : "ক্লিক"}
            </span>
          )}
        </div>
      </div>

      {/* Right side: Arrow indicator */}
      <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-white/5 group-hover:bg-white/15 transition-all duration-300">
        <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
      </div>
    </a>
  );
};
