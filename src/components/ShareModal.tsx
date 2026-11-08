"use client";

import React, { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import {
  Share2,
  Copy,
  Check,
  X,
  QrCode,
  Download,
  Send,
  MessageCircle,
} from "lucide-react";
import confetti from "canvas-confetti";
import { ThemeConfig } from "@/types";

interface ShareModalProps {
  name: string;
  handle: string;
  theme: ThemeConfig;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  name,
  handle,
  theme,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.6 },
      });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${name} (${handle})`,
          text: `Check out ${name}'s official bio links!`,
          url: currentUrl,
        });
      } catch {
        // User cancelled share
      }
    } else {
      setIsOpen(true);
    }
  };

  const shareToWhatsapp = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `Check out ${name}'s links: ${currentUrl}`
  )}`;

  const shareToX = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `Check out ${name}'s bio links: `
  )}&url=${encodeURIComponent(currentUrl)}`;

  const shareToFacebook = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    currentUrl
  )}`;

  const shareToTelegram = `https://t.me/share/url?url=${encodeURIComponent(
    currentUrl
  )}&text=${encodeURIComponent(`${name}'s links`)}`;

  return (
    <>
      <button
        onClick={handleNativeShare}
        aria-label="Share profile"
        className={`p-2.5 rounded-full border transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-2 ${theme.cardClass}`}
        title="শেয়ার করুন"
      >
        <Share2 className="w-4 h-4 text-current" />
        <span className="text-xs font-medium hidden sm:inline">শেয়ার</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="fixed inset-0"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative w-full max-w-sm p-6 rounded-3xl bg-zinc-900 border border-zinc-800 shadow-2xl z-10 text-white text-center">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-bold">প্রোফাইল শেয়ার করুন</h3>
            <p className="text-xs text-zinc-400 mt-1">
              {name} ({handle}) এর লিঙ্ক সহজে শেয়ার করুন
            </p>

            {/* QR Code Card */}
            <div className="my-5 p-4 rounded-2xl bg-white text-black inline-block shadow-lg">
              <QRCodeSVG
                value={currentUrl || "https://example.com"}
                size={160}
                level="M"
                includeMargin={false}
              />
            </div>

            {/* Copy Link Input Bar */}
            <div className="flex items-center gap-2 p-2 rounded-xl bg-zinc-800/80 border border-zinc-700/60 mb-5">
              <input
                type="text"
                readOnly
                value={currentUrl}
                className="w-full bg-transparent text-xs text-zinc-300 outline-none px-2 truncate"
              />
              <button
                onClick={handleCopy}
                className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  copied
                    ? "bg-emerald-600 text-white"
                    : "bg-blue-600 hover:bg-blue-500 text-white active:scale-95"
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" /> কপি হয়েছে
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" /> কপি
                  </>
                )}
              </button>
            </div>

            {/* Direct Social Share Buttons */}
            <div className="grid grid-cols-4 gap-2 pt-2 border-t border-zinc-800">
              <a
                href={shareToWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-zinc-800 text-zinc-300 hover:text-emerald-400 text-[11px] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
              <a
                href={shareToX}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-zinc-800 text-zinc-300 hover:text-cyan-400 text-[11px] transition-colors"
              >
                <Send className="w-5 h-5" />
                <span>X</span>
              </a>
              <a
                href={shareToFacebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-zinc-800 text-zinc-300 hover:text-blue-400 text-[11px] transition-colors"
              >
                <Share2 className="w-5 h-5" />
                <span>Facebook</span>
              </a>
              <a
                href={shareToTelegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-zinc-800 text-zinc-300 hover:text-sky-400 text-[11px] transition-colors"
              >
                <Send className="w-5 h-5" />
                <span>Telegram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
