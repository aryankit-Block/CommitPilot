import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from '@/components/ui/navbar';
import Footer from '@/components/Footer';
import PreFooterCTA from '@/components/PreFooterCTA';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CommitPilot - AI GitHub Contribution Assistant",
  description: "Automate and enhance your GitHub contributions with AI-powered suggestions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <PreFooterCTA />
          <Footer />
        </div>
      </body>
    </html>
  );
}
