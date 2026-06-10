import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Manrope } from "next/font/google";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Dr AK Gupta - Expert Diabetes, Thyroid & Allergy Care',
  description: 'Dr AK Gupta provides specialized, board-certified care for diabetes, thyroid disorders, and allergy management. Personalized treatment plans for optimal health.',
  openGraph: {
    "title": "Dr AK Gupta - Expert Diabetes, Thyroid & Allergy Care",
    "description": "Dr AK Gupta provides specialized, board-certified care for diabetes, thyroid disorders, and allergy management. Personalized treatment plans for optimal health.",
    "url": "https://www.drakguptapractice.com",
    "siteName": "Dr AK Gupta Medical Practice",
    "images": [
      {
        "url": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EwKdgTuzaNWGcJkgAbIAav88Gm/uploaded-1781084661260-q21twasl.jpg",
        "alt": "Dr AK Gupta at his medical practice"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Dr AK Gupta - Expert Diabetes, Thyroid & Allergy Care",
    "description": "Dr AK Gupta provides specialized, board-certified care for diabetes, thyroid disorders, and allergy management. Personalized treatment plans for optimal health.",
    "images": [
      "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EwKdgTuzaNWGcJkgAbIAav88Gm/uploaded-1781084661260-q21twasl.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${manrope.variable} ${dmSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
