"use client";

import React from "react";
import Image from "next/image";
import { ProfileConfig, ThemeConfig } from "@/types";
import { Check, MapPin, Sparkles } from "lucide-react";
import { VCardButton } from "./VCardButton";

interface ProfileHeaderProps {
  profile: ProfileConfig;
  theme: ThemeConfig;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  profile,
  theme,
}) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const avatarSrc = profile.avatar.startsWith("http")
    ? profile.avatar
    : `${basePath}${profile.avatar}`;

  return (
    <div className="flex flex-col items-center text-center">
      {/* Avatar Container with glowing border */}
      <div className="relative group mb-4">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-70 blur-md group-hover:opacity-100 transition duration-500" />
        
        <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden p-1 bg-zinc-950">
          <Image
            src={avatarSrc}
            alt={profile.name}
            width={128}
            height={128}
            priority
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Verified Badge */}
        {profile.verified && (
          <div
            className="absolute bottom-1 right-1 w-7 h-7 rounded-full bg-blue-500 text-white flex items-center justify-center border-2 border-zinc-950 shadow-md"
            title="ভেরিফায়েড প্রোফাইল"
          >
            <Check className="w-4 h-4 stroke-[3]" />
          </div>
        )}
      </div>

      {/* Name & Handle */}
      <div className="flex items-center gap-1.5 justify-center">
        <h1 className={`text-xl md:text-2xl font-bold tracking-tight ${theme.textPrimary}`}>
          {profile.name}
        </h1>
      </div>
      <p className="text-xs md:text-sm font-medium text-zinc-400 mt-0.5">
        {profile.handle}
      </p>

      {/* Status Pill (if present) */}
      {profile.status && (
        <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>{profile.status.emoji}</span>
          <span>{profile.status.text}</span>
        </div>
      )}

      {/* Title / Profession */}
      <p className={`text-sm md:text-base font-semibold mt-3 ${theme.textPrimary}`}>
        {profile.title}
      </p>

      {/* Bio text */}
      <p className={`text-xs md:text-sm max-w-md mt-1.5 leading-relaxed ${theme.textSecondary}`}>
        {profile.bio}
      </p>

      {/* Location */}
      {profile.location && (
        <div className="flex items-center gap-1 text-xs text-zinc-400 mt-2">
          <MapPin className="w-3.5 h-3.5 text-rose-400" />
          <span>{profile.location}</span>
        </div>
      )}

      {/* Save Contact (vCard) */}
      {profile.vcard?.enabled && (
        <div className="mt-4">
          <VCardButton vcard={profile.vcard} theme={theme} />
        </div>
      )}
    </div>
  );
};
