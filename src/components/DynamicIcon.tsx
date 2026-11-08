"use client";

import React from "react";
import {
  Globe,
  CalendarCheck,
  Youtube,
  Github,
  MessageCircle,
  Coffee,
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Bookmark,
  Sparkles,
  Share2,
  QrCode,
  Download,
  Check,
  Copy,
  Palette,
  Eye,
  ArrowUpRight,
  Send,
  Video,
  Music,
  ShoppingBag,
  FileText,
  MapPin,
  Laptop,
  Briefcase,
  Layers,
  Heart,
  Star,
  Link as LinkIcon,
  LucideProps,
} from "lucide-react";

interface DynamicIconProps extends LucideProps {
  name?: string;
}

const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  globe: Globe,
  calendarcheck: CalendarCheck,
  calendar: CalendarCheck,
  youtube: Youtube,
  github: Github,
  messagecircle: MessageCircle,
  whatsapp: MessageCircle,
  coffee: Coffee,
  twitter: Twitter,
  x: Twitter,
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
  email: Mail,
  mail: Mail,
  phone: Phone,
  externallink: ExternalLink,
  bookmark: Bookmark,
  sparkles: Sparkles,
  share: Share2,
  qrcode: QrCode,
  download: Download,
  check: Check,
  copy: Copy,
  palette: Palette,
  eye: Eye,
  arrowupright: ArrowUpRight,
  send: Send,
  telegram: Send,
  video: Video,
  music: Music,
  spotify: Music,
  shoppingbag: ShoppingBag,
  shop: ShoppingBag,
  filetext: FileText,
  portfolio: Laptop,
  laptop: Laptop,
  briefcase: Briefcase,
  layers: Layers,
  heart: Heart,
  star: Star,
  mappin: MapPin,
};

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, ...props }) => {
  if (!name) return <LinkIcon {...props} />;

  const normalized = name.toLowerCase().replace(/[-_]/g, "");
  const IconComponent = ICON_MAP[normalized] || LinkIcon;

  return <IconComponent {...props} />;
};
