import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { DetectiveRank } from "@/types/user";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTimeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return "Just now";
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours}h ago`;
  const diffInDays = Math.floor(diffInHours / 24);
  return `${diffInDays}d ago`;
}

export function calculateRank(xp: number): DetectiveRank {
  if (xp >= 15000) return "Master Detective";
  if (xp >= 10000) return "Chief Inspector";
  if (xp >= 6000) return "Inspector";
  if (xp >= 3000) return "Detective";
  if (xp >= 1000) return "Investigator";
  return "Rookie";
}

export function getRankBadgeColor(rank: DetectiveRank): string {
  switch (rank) {
    case "Master Detective":
      return "text-amber-400 border-amber-500/40 bg-amber-950/20";
    case "Chief Inspector":
      return "text-purple-400 border-purple-500/40 bg-purple-950/20";
    case "Inspector":
      return "text-blue-400 border-blue-500/40 bg-blue-950/20";
    case "Detective":
      return "text-emerald-400 border-emerald-500/40 bg-emerald-950/20";
    case "Investigator":
      return "text-yellow-400 border-yellow-500/40 bg-yellow-950/20";
    case "Rookie":
    default:
      return "text-neutral-400 border-neutral-700 bg-neutral-900/50";
  }
}

export function getCategoryBadgeColor(category: string): { bg: string; text: string; border: string } {
  switch (category) {
    case "crime":
      return { bg: "bg-red-950/40", text: "text-red-400", border: "border-red-800/40" };
    case "robbery":
      return { bg: "bg-amber-950/40", text: "text-amber-400", border: "border-amber-800/40" };
    case "mythology":
      return { bg: "bg-orange-950/40", text: "text-orange-400", border: "border-orange-800/40" };
    case "historical":
      return { bg: "bg-stone-900/60", text: "text-stone-300", border: "border-stone-700/50" };
    case "supernatural":
      return { bg: "bg-purple-950/40", text: "text-purple-400", border: "border-purple-800/40" };
    case "modern":
      return { bg: "bg-cyan-950/40", text: "text-cyan-400", border: "border-cyan-800/40" };
    case "logic":
      return { bg: "bg-emerald-950/40", text: "text-emerald-400", border: "border-emerald-800/40" };
    default:
      return { bg: "bg-neutral-900/50", text: "text-neutral-300", border: "border-neutral-700" };
  }
}
