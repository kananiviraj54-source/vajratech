import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: "--font-plus-jakarta",
  display: 'swap',
});

export const metadata = {
    title: "VajraTech | Cutting-Edge Digital Solutions",
    description: "Transforming businesses through modern web, mobile, and cloud engineering. We build the future of digital experiences.",
    keywords: "Next.js, React, Web Development, Cloud Engineering, Mobile Apps, UI/UX Design",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <head>
                <Script 
                    async 
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2652532336958071"
                    crossOrigin="anonymous" 
                    strategy="afterInteractive"
                />
            </head>
            <body className={`${inter.variable} ${plusJakarta.variable} font-sans bg-background text-foreground antialiased`}>
                <div className="fixed inset-0 bg-noise z-[-1] opacity-[0.03]" />
                <Navbar />
                <main className="relative">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
