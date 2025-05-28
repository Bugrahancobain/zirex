import React from 'react'
import "../style/homeAboutUs.css"
import Link from 'next/link'
function homeAboutUs() {
    return (
        <div className='homeAboutUsMain'>
            <div className='homeAboutUsImg'>
                <img src="/aboutUsBanner.png" alt="Zirex_Kağıt_Hakkımızda.png" />
            </div>
            <div className='homeAboutUsDiv'>
                <h3>Hakkımızda</h3>
                <p style={{ fontWeight: 800 }}>Zirex Kağıt Karton Mukavva Tic. ve San. Ltd. Şti.</p>
                <p>Köklü geçmişiyle Türk kağıt ve ambalaj sektörünün öncülerinden biri olan Zirex Kağıt, temellerini 1980 yılında İstanbul Süleymaniye’de Mustafa Zirek tarafından atılan ZİREK TİCARET’in mirası üzerine inşa etmiştir. Kuruluşunun ilk yıllarında yalnızca mukavva ve karton satışıyla faaliyet gösteren firmamız, müşteri memnuniyetini esas alan hizmet anlayışı ve dinamik vizyonuyla kısa sürede büyüyerek ürün gamını genişletmiştir...</p>
                <Link className='homeAboutUsBtn' href="/aboutUs">Devamını Gör</Link>
            </div>
        </div>
    )
}

export default homeAboutUs