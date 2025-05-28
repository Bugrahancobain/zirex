"use client";

import React, { useEffect, useState } from "react";
import { database } from "../../../firebase";
import { ref, onValue } from "firebase/database";
import { useRouter } from "next/navigation";
import "./ourServices.css"; // özel stiller için ayrı CSS dosyan

const ITEMS_PER_PAGE = 9;

export default function OurServicesPage() {
    const [services, setServices] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const router = useRouter();

    useEffect(() => {
        const servicesRef = ref(database, "services");
        onValue(servicesRef, (snapshot) => {
            const data = snapshot.val();
            const array = data ? Object.entries(data).map(([id, val]) => ({ id, ...val })) : [];
            setServices(array.reverse()); // en yeniler öne gelsin
        });
    }, []);

    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
    };

    // Sayfalama hesaplamaları
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentServices = services.slice(startIndex, endIndex);
    const totalPages = Math.ceil(services.length / ITEMS_PER_PAGE);

    return (
        <div className="ourServicesPageMain">
            <div className="ourServicesPageImgDiv">
                <img className="ourServicesPageImg" src="/ourServicesBanner.png" alt="Zirex_Kağıt_Hizmetlerimiz_Banner.png" />
            </div>
            <h2>Hizmetlerimiz</h2>
            <div className="serviceGrid">
                {currentServices.map(service => (
                    <div key={service.id} className="serviceCard">
                        <img src={service.image} alt={service.title} className="serviceImage" />
                        <h3>{service.title}</h3>
                        <p>{truncateText(service.description, 250)}</p>
                        <button
                            className="seeMoreButton"
                            onClick={() => router.push(`/ourServices/${service.id}`)}
                        >
                            Devamını Gör
                        </button>
                    </div>
                ))}
            </div>

            {/* Sayfalama */}
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i + 1}
                        className={`pageButton ${currentPage === i + 1 ? "active" : ""}`}
                        onClick={() => setCurrentPage(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}