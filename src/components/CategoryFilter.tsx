"use client";

import React from "react";
import { ThemeConfig } from "@/types";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  theme: ThemeConfig;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  theme,
}) => {
  if (!categories || categories.length <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 overflow-x-auto py-2 px-1 max-w-full no-scrollbar">
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
              isActive
                ? "bg-white text-zinc-900 shadow-md font-semibold"
                : `bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/5`
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};
