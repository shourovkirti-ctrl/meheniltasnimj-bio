"use client";

import React from "react";
import { SocialLink, ThemeConfig } from "@/types";
import { DynamicIcon } from "./DynamicIcon";

interface SocialBarProps {
  socials: SocialLink[];
  theme: ThemeConfig;
}

export const SocialBar: React.FC<SocialBarProps> = ({ socials, theme }) => {
  if (!socials || socials.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 my-4">
      {socials.map((social, index) => (
        <a
          key={`${social.platform}-${index}`}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label || social.platform}
          className={`group relative p-3 rounded-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${theme.cardClass}`}
        >
          <DynamicIcon
            name={social.platform}
            className={`w-5 h-5 transition-colors duration-200 group-hover:${theme.accentClass}`}
          />
          {social.label && (
            <span className="sr-only">{social.label}</span>
          )}
        </a>
      ))}
    </div>
  );
};
