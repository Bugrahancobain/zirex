import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Script from "next/script";

export const metadata = {
  title: "Zirex Kağıt | Gri Karton, Mukavva, Pelur Kağıdı ve Ambalaj Çözümleri",
  description:
    "Zirex Kağıt, 1980 yılında kurulan Zirek Ticaret’in devamı olarak geniş ürün yelpazesiyle gri karton, Lamine mukavva, pelur kağıdı ve ambalaj çözümleri sunmaktadır.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7W6QYWKPGC"
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7W6QYWKPGC');
          `}
        </Script>

        <Navbar />
        {children}
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}