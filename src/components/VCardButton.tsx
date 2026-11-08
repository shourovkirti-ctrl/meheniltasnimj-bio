"use client";

import React, { useState } from "react";
import { ProfileConfig, ThemeConfig } from "@/types";
import { downloadVCard } from "@/lib/utils";
import { UserPlus, Check } from "lucide-react";
import confetti from "canvas-confetti";

interface VCardButtonProps {
  vcard?: ProfileConfig["vcard"];
  theme: ThemeConfig;
}

export const VCardButton: React.FC<VCardButtonProps> = ({ vcard, theme }) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!vcard || !vcard.enabled) return null;

  const handleDownload = () => {
    downloadVCard(vcard);
    setDownloaded(true);
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.5 },
    });
    setTimeout(() => setDownloaded(false), 2500);
  };

  return (
    <button
      onClick={handleDownload}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-300 hover:scale-105 active:scale-95 ${
        downloaded
          ? "bg-emerald-600 text-white border-emerald-500"
          : `${theme.cardClass} ${theme.textPrimary}`
      }`}
      title="ফোনে কন্টাক্ট সেভ করুন"
    >
      {downloaded ? (
        <>
          <Check className="w-3.5 h-3.5" />
          <span>কন্টাক্ট সেভ হয়েছে!</span>
        </>
      ) : (
        <>
          <UserPlus className="w-3.5 h-3.5 text-blue-400" />
          <span>কন্টাক্ট সেভ করুন</span>
        </>
      )}
    </button>
  );
};
