import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    display: "swap",
});

export const metadata: Metadata = {
    title: "TREEN Real Estate & Builders | Construction, Solar & Real Estate in Islamabad",
    description: "Leading provider of Construction, Solar Energy Solutions, and Real Estate services in Islamabad, Pakistan. TREEN Real Estate & Builders - Building Your Future.",
    keywords: "TREEN, Real Estate, Construction, Solar Energy, Islamabad, Pakistan, Property, Buildings, Solar Panels",
    authors: [{ name: "TREEN Real Estate & Builders" }],
    openGraph: {
        title: "TREEN Real Estate & Builders",
        description: "Construction, Solar & Real Estate Services in Islamabad",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${outfit.variable}`}>

            <body>
                <Navbar />
                <div className="pt-20">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
