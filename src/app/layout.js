import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Head from "next/head";


const poppins = Poppins({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600"],
  display: "swap",
});

export const metadata = {
  title: "Zirex Kağıt | Gri Karton, Mukavva, Pelur Kağıdı ve Ambalaj Çözümleri",
  description:
    "Zirex Kağıt, 1980 yılında kurulan Zirek Ticaret’in devamı olarak geniş ürün yelpazesiyle gri karton, Lamine mukavva, pelur kağıdı ve ambalaj çözümleri sunmaktadır. Topkapı’daki 3500 m² tesisiyle ebatlama ve bobin kesimi hizmetleriyle sektörde öncüdür.",
  keywords: [
    "Zirex Kağıt",
    "Zirek Ticaret",
    "Gri Karton",
    "Mukavva",
    "Pelur Kağıdı",
    "Karton Çeşitleri",
    "Ambalaj Kağıdı",
    "Topkapı Kağıt Toptancısı",
    "Ebatlama",
    "Bobin Kesim",
    "İthal Karton",
    "Bristol Karton",
    "Tripleks Karton"
  ],
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

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={`${poppins.variable}`}>
        <Navbar />
        {children}
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
