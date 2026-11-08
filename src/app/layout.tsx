import type { Metadata } from "next";
import "./globals.css";
import { profileConfig } from "@/config/profile";

export const metadata: Metadata = {
  title: profileConfig.seo.title,
  description: profileConfig.seo.description,
  keywords: profileConfig.seo.keywords,
  openGraph: {
    title: profileConfig.seo.title,
    description: profileConfig.seo.description,
    images: profileConfig.seo.ogImage ? [profileConfig.seo.ogImage] : [profileConfig.avatar],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: profileConfig.seo.title,
    description: profileConfig.seo.description,
    images: profileConfig.seo.ogImage ? [profileConfig.seo.ogImage] : [profileConfig.avatar],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <body className="min-h-screen antialiased selection:bg-blue-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
