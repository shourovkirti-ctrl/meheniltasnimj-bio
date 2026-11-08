"use client";

import React, { useState } from "react";
import { ThemeId, ThemeConfig } from "@/types";
import { THEMES } from "@/config/themes";
import { Palette, Check, Sparkles } from "lucide-react";

interface ThemeSelectorProps {
  currentTheme: ThemeId;
  onThemeChange: (themeId: ThemeId) => void;
  activeThemeConfig: ThemeConfig;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  currentTheme,
  onThemeChange,
  activeThemeConfig,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change Theme"
        className={`p-2.5 rounded-full border transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-2 ${activeThemeConfig.cardClass}`}
        title="Change Theme"
      >
        <Palette className="w-4 h-4 text-current" />
        <span className="text-xs font-medium hidden sm:inline">Theme</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-xs"
            onClick={() => setIsOpen(false)}
          />

          <div className="absolute right-0 mt-2 w-56 p-2 rounded-2xl bg-zinc-900/95 border border-zinc-700/60 shadow-2xl backdrop-blur-xl z-50 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-800">
              <span className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" /> Select Theme
              </span>
            </div>

            <div className="mt-1 space-y-1">
              {(Object.keys(THEMES) as ThemeId[]).map((themeKey) => {
                const item = THEMES[themeKey];
                const isSelected = currentTheme === themeKey;

                return (
                  <button
                    key={themeKey}
                    onClick={() => {
                      onThemeChange(themeKey);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                      isSelected
                        ? "bg-blue-600/20 text-blue-300 border border-blue-500/30"
                        : "text-zinc-300 hover:bg-zinc-800/80"
                    }`}
                  >
                    <span>{item.name}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-blue-400" />}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
