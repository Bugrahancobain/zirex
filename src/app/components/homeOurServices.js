"use client";

import { useEffect, useState } from "react";
import { database } from "../../../firebase";
import { ref, onValue } from "firebase/database";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../style/homeOurServices.css";
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function HomeOurServices() {
    const [services, setServices] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const servicesRef = ref(database, "services");
        onValue(servicesRef, (snapshot) => {
            const data = snapshot.val();
            const array = data ? Object.entries(data).map(([id, val]) => ({ id, ...val })) : [];
            setServices(array);
        });
    }, []);

    const truncateText = (text, maxLength) => {
        if (!text) return "";
        return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
    };

    return (
        <div className="ourServicesMain">
            <h2>Hizmetlerimiz</h2>
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                slidesPerView={3}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="ourServicesSwiper"
            >
                {services.map(service => (
                    <SwiperSlide className="homeOurServicesSlide" key={service.id}>
                        <div className="serviceSlide">
                            <img src={service.image} alt={service.title} className="serviceImage" />
                            <div className="serviceText">
                                <h3>{service.title}</h3>
                                <p>{truncateText(service.description, 250)}</p>
                                {service.description?.length > 250 && (
                                    <button
                                        className="seeMoreButton"
                                        onClick={() => router.push(`/ourServices/${service.id}`)}
                                    >
                                        Devamını Gör
                                    </button>
                                )}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Link className='homeAboutUsBtn' href="/ourServices">Tümünü Gör</Link>
        </div>
    );
}