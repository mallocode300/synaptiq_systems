import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Synaptiq — The intelligence that connects you to tomorrow.",
  description:
    "Synaptiq bridges strategy and technology with intelligent AI and automation solutions. We create the connection between a brilliant idea and tangible success.",
  metadataBase: new URL("https://synaptiq.systems"),
  openGraph: {
    title: "Synaptiq — The intelligence that connects you to tomorrow.",
    description:
      "Synaptiq bridges strategy and technology with intelligent AI and automation solutions.",
    url: "https://synaptiq.systems",
    siteName: "Synaptiq",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${lato.variable} antialiased`}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
