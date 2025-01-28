import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

// export const metadata = {
//   title: "Photosnap",
//   description: "Create and share your photo stories."
// };

export const metadata = {
  title: "Photosnap - Capture Your Story",
  description:
    "Photosnap makes storytelling easy with stunning photo features for everyone. Discover, create, and share your stories today.",
  image: "/favicon.ico",
  url: "https://perfecto-photosnap.netlify.app/",

  openGraph: {
    title: "Photosnap - Capture Your Story",
    description:
      "Photosnap makes storytelling easy with stunning photo features for everyone. Discover, create, and share your stories today.",
    url: "https://perfecto-photosnap.netlify.app/",
    images: ["/favicon.ico"]
  },
  twitter: {
    card: "/assets/home/desktop/create-and-share.jpg",
    title: "Photosnap - Capture Your Story",
    description:
      "Photosnap makes storytelling easy with stunning photo features for everyone. Discover, create, and share your stories today.",
    images: ["/assets/home/desktop/create-and-share.jpg"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
