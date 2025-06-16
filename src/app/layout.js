import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600"],
  display: "swap",
});

export const metadata = {
  title: "Zirex Kağıt | Gri Karton, Mukavva, Pelur Kağıdı ve Ambalaj Çözümleri",
  description:
    "Zirex Kağıt, 1980 yılında kurulan Zirek Ticaret’in devamı olarak geniş ürün yelpazesiyle gri karton, Lamine mukavva, pelur kağıdı ve ambalaj çözümleri sunmaktadır. Topkapı’daki 3500 m² tesisiyle ebatlama ve bobin kesimi hizmetleriyle sektörde öncüdür.",
  metadataBase: new URL("https://zirexkagit.com.tr"),
  openGraph: {
    title: "Zirex Kağıt | Gri Karton, Mukavva, Pelur Kağıdı ve Ambalaj Çözümleri",
    description:
      "ZİREX KAĞIT, 1980’den bu yana kağıt ve karton sektöründe hizmet veren, 3500 m² üretim tesisine sahip lider tedarikçinizdir. Gri karton, Lamine mukavva ve pelur kağıdı üretimiyle sektörde fark yaratıyor.",
    url: "https://zirexkagit.com.tr",
    siteName: "Zirex Kağıt",
    type: "website",
    locale: "tr_TR"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className={poppins.variable}>
        {/* ✅ GA Script burada olabilir */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7W6QYWKPGC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
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