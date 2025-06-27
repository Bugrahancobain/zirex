import React from 'react'
import "../style/footer.css"
import { FaPhoneAlt, FaMapMarkerAlt, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Link from 'next/link'

function Footer() {
    return (
        <div className='footerMain' style={{ backgroundImage: `url("/footerImage.jpg")`, backgroundSize: "cover" }}>
            <div className='footerDiv'>
                <div className='footerSocialDiv'>
                    <img src="/Zirex_Logo.png" alt="Zirex_logo" />
                </div>
                <div className='footerFastMenüDiv'>
                    <h2>Hızlı Menü</h2>
                    <Link href="/">Anasayfa</Link>
                    <Link href="/aboutUs">Hakkımızda</Link>
                    <Link href="/ourProducts">Ürünlerimiz</Link>
                    <Link href="/ourServices">Hizmetlerimiz</Link>
                    <Link href="/contact">İletişim</Link>
                </div>
                <div className='footerContact'>
                    <h2>Bize Ulaşın</h2>
                    <div><FaMapMarkerAlt />
                        Türkiye,  Marmara bölgesi,  İstanbul,  Davutpaşa caddesi no 101/319 Cevizlibağ Topkapı
                    </div>
                    <div>
                        <FaPhoneAlt />+90 (212) 674-44-44
                    </div>
                    <div>
                        <FaPhoneAlt />+90 (552) 861 29 66
                    </div>
                    <div>
                        <IoMail />haydar@zirex.com.tr
                    </div>
                </div>
            </div>
            <div className='footerCopyRight'>
                © ZİREX KAĞIT 2006. TÜM HAKLARI SAKLIDIR.
            </div>
        </div>
    )
}

export default Footer