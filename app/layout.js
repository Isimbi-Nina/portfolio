import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-heading" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: "Isimbi Nina Henriette | Software Engineer",
  description: "Portfolio of Isimbi Nina Henriette, Software Engineer based in Kigali, Rwanda.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
