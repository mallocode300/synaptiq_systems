import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AnalyticsPlausible from "@/components/AnalyticsPlausible";
import AnalyticsEvents from "@/components/AnalyticsEvents";
import CookieConsent from "@/components/CookieConsent";
import { locales, Locale } from "@/i18n/config";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// Use generateMetadata below instead of exporting a static metadata object

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  const base = "https://synaptiq.systems";
  const url = `${base}/${lang}`;
  return {
    alternates: {
      canonical: url,
      languages: {
        en: `${base}/en`,
        fr: `${base}/fr`,
      },
    },
    openGraph: {
      url,
      locale: lang,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}>) {
  const { lang } = await params;
  if (!locales.includes(lang)) notFound();
  return (
    <>
      {children}
      {/* Inject cookie banner and conditional analytics at the page level for localized routes */}
      <CookieConsent />
      <AnalyticsPlausible />
      <AnalyticsEvents />
    </>
  );
}


