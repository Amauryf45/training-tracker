import type { Metadata, Viewport } from "next";
import "./globals.css";
import TabBar from "./components/tab-bar";

export const metadata: Metadata = {
  title: "Training Tracker",
  description: "Suivi d'entraînement — Front Lever, HSPU, Human Flag",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#faf8f5",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col pb-14">
        {children}
        <TabBar />
      </body>
    </html>
  );
}
