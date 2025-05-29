"use client";
import React, { useRef } from 'react'
import "./contact.css"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope, FaUser, FaPhone, FaInfoCircle, FaPencilAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";



function page() {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // EmailJS servis ID
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // EmailJS şablon ID
                form.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY // EmailJS public key
            )
            .then(
                (result) => {
                    alert("Teşekkürler! Mesaj başarıyla gönderildi!");
                    console.log(result.text);
                },
                (error) => {
                    alert("Mesaj gönderilirken hata oluştu!");
                    console.log(error.text);
                }
            );

        e.target.reset();
    };
    return (
        <div className='contactMain'>
            <div className='contactBannerDiv'>
                <img className='contactBannerImg' src="/contactBanner.png" alt="Zirex_Kağıt_İletişim.png" />
            </div>
            <div className='contactInfoDiv'>
                <div className='contactInfoLocation'>
                    <FaLocationDot />
                    <span>ADRES</span>
                    <span>Türkiye, Marmara bölgesi, İstanbul, Davutpaşa Caddesi No : 103 / 319</span>
                </div>
                <div className="contactInfoPhone">
                    <FaPhoneAlt />
                    <span>TELEFON</span>
                    <span>+90 (212) 674-44-44</span>
                    <span>+90 (212) 613-96-76</span>
                </div>
                <div className="contactInfoMail">
                    <IoIosMail />
                    <span>E-MAİL</span>
                    <span>haydar@zirex.com.tr</span>
                </div>
            </div>
            <div className="contactMap">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2920.1281515591922!2d28.91178207577502!3d41.019135018756806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caba8c80dff43d%3A0x9c461b84a4c9f34f!2zWsSwUkVYIEtBxJ5JVA!5e1!3m2!1str!2str!4v1748358370552!5m2!1str!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="contactFormDiv">
                <h1>Bizimle İletişime Geçin!</h1>
                <form ref={form} onSubmit={sendEmail} className="contactForm">
                    <div className="formGroup">
                        <FaUser className="formIcon" />
                        <input type="text" name="user_name" placeholder="İsim Soyisim" required />
                    </div>
                    <div className="formGroup">
                        <FaEnvelope className="formIcon" />
                        <input type="email" name="user_email" placeholder="E-mail" required />
                    </div>
                    <div className="formGroup">
                        <FaPhone className="formIcon" />
                        <input type="tel" name="user_phone" placeholder="Telefon Numarası" required />
                    </div>
                    <div className="formGroup">
                        <FaInfoCircle className="formIcon" />
                        <input type="text" name="user_subject" placeholder="Başlık" required />
                    </div>
                    <div className="formGroup">
                        <FaPencilAlt className="formIcon" />
                        <textarea name="message" placeholder="Mesajınız" required></textarea>
                    </div>
                    <button type="submit" className="submitButton">
                        Gönder
                    </button>
                </form>
            </div>
        </div>
    )
}

export default page