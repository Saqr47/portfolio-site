import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ahmed Sakr | CGI Artist - DOOH Specialist",
  description: "Crafting immersive CGI experiences and dynamic DOOH campaigns. Portfolio of Ahmed Sakr, a 3D Artist and Creative Director based in Egypt.",
  keywords: ["CGI Artist", "DOOH Specialist", "3D Art", "Motion Graphics", "Ahmed Sakr", "Portfolio", "Egypt", "Creative Director", "Visual Effects"],
  authors: [{ name: "Ahmed Sakr", url: "https://ahmedsakr.com" }],
  creator: "Ahmed Sakr",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahmedsakr.com",
    title: "Ahmed Sakr | CGI Artist - DOOH Specialist",
    description: "Crafting immersive CGI experiences and dynamic DOOH campaigns.",
    siteName: "Ahmed Sakr Portfolio",
    images: [
      {
        url: "/images/og-image.jpg", // Assuming an OG image will be added later
        width: 1200,
        height: 630,
        alt: "Ahmed Sakr Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Sakr | CGI Artist - DOOH Specialist",
    description: "Crafting immersive CGI experiences and dynamic DOOH campaigns.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
