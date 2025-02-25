import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import SessionWrapper from "./components/SessionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "JioCinema - Watch Sports, Movies, Web Series, TV Online in HD Quality",
  description: "Watch the latest movies, web series, TV shows, live sports,and highlights online in Hindi, English, and other regional languages across genres, only on JioCinema in HD Quality with Multi-Device Support. Watch Now",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <SessionWrapper>
          <Navbar />
          <div className="h-16 bg-black w-full"></div>
          <div className="min-h-screen">{children}</div>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
