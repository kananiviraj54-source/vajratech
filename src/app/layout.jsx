import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata = {
    title: "VajraTechLabs | Innovative IT Solutions",
    description: "Premier IT services company specializing in web development, mobile apps, cloud solutions, and DevOps. 2+ years of delivering excellence.",
    keywords: "IT company, web development, mobile apps, cloud solutions, DevOps, UI/UX design, React, Next.js, Three.js, India",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark">
            <body className={`${inter.variable} ${spaceGrotesk.variable} bg-dark text-white antialiased`}>
                <Navbar />
                <main className="min-h-screen pt-16">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
