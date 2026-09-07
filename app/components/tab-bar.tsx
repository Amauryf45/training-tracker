"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "Entra\u00eenement", icon: "🏋" },
  { href: "/plan", label: "Programme", icon: "📋" },
  { href: "/timer", label: "Chrono", icon: "⏱" },
  { href: "/history", label: "Historique", icon: "📊" },
];

export default function TabBar() {
  const pathname = usePathname();

  // Hide tab bar during active session
  if (pathname.startsWith("/session")) return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-[var(--border)] safe-area-bottom">
      <div className="max-w-lg mx-auto flex">
        {tabs.map((tab) => {
          const active = pathname === tab.href;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex-1 flex flex-col items-center py-2 text-xs font-medium transition-colors ${
                active ? "text-[var(--accent)]" : "text-[var(--text-dim)]"
              }`}
            >
              <span className="text-lg mb-0.5">{tab.icon}</span>
              {tab.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
