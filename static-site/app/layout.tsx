import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/dist/client/link";
import Dropdown from "@/components/dropdown";
import { CgMail } from "react-icons/cg";
import { getBlogCategories } from "./blogs/page";
import Script from "next/dist/client/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brandon Smith - Software Developer Portfolio",
  description: "Welcome to my portfolio website! I'm Brandon Smith, a passionate software developer specializing in building innovative web applications and solutions. Explore my projects, blog posts, and get in touch to collaborate on exciting ventures.",
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://bsmithcompsci.github.io/"),
  twitter: {
    card: "summary_large_image",
    title: "Brandon Smith - Software Developer Portfolio",
    description: "Welcome to my portfolio website! I'm Brandon Smith, a passionate software developer specializing in building innovative web applications and solutions. Explore my projects, blog posts, and get in touch to collaborate on exciting ventures.",
    images: "/meta-image.png",
  },
  openGraph: {
    title: "Brandon Smith - Software Developer Portfolio",
    description: "Welcome to my portfolio website! I'm Brandon Smith, a passionate software developer specializing in building innovative web applications and solutions. Explore my projects, blog posts, and get in touch to collaborate on exciting ventures.",
    images: "/meta-image.png",
    url: "https://bsmithcompsci.github.io/",
    siteName: "Brandon Smith Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const blogCategories = getBlogCategories();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Navbar */}
        <nav className="bg-transparent shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 font-bold">
              <div className="flex items-center">
                <Link href="/" className="text-xl text-gray-900">Brandon Smith</Link>
              </div>
              <div className="flex items-center space-x-4">
                <Dropdown trigger={<span className="text-gray-900 hover:text-gray-800 cursor-pointer">Blog</span>}>
                  {/* Dropdown items */}
                  {blogCategories.map((category) => (
                    <Link
                      key={category}
                      href={`/blogs/#${category}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </Link>
                  ))}
                </Dropdown>
                <Link href="/#contact" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  <CgMail className="inline mr-2" />
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main content */}
        {children}

        <Script
          type="module"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@9/dist/mermaid.esm.min.mjs";
            mermaid.initialize({startOnLoad: true});
            mermaid.contentLoaded();`,
      }}
    />
      </body>
    </html>
  );
}
