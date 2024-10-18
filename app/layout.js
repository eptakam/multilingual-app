import localFont from "next/font/local";
import { NextIntlClientProvider, useLocale } from "next-intl";
import "../styles/globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Translation",
  description: "Multilingual Next.js app with next-intl",
};

export default function RootLayout({ children }) {
  const locale = useLocale();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale}>
          <nav>
            <select
              onChange={(e) => (window.location.href = `/${e.target.value}`)}
              value={locale}
            >
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="wo">Wolof</option>
            </select>
          </nav>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
