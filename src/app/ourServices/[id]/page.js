"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { database } from "../../../../firebase";
import { ref, onValue } from "firebase/database";
import "./serviceDetail.css";

export default function ServiceDetailPage() {
    const { id } = useParams();
    const router = useRouter();

    const [service, setService] = useState(null);
    const [otherServices, setOtherServices] = useState([]);

    useEffect(() => {
        const servicesRef = ref(database, "services");

        onValue(servicesRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const all = Object.entries(data).map(([key, val]) => ({ id: key, ...val }));
                const current = all.find((s) => s.id === id);
                setService(current);

                const others = all.filter((s) => s.id !== id);
                const randomOthers = others.slice(0, 3); // İstersen Math.random() ile karıştırabiliriz
                setOtherServices(randomOthers);
            }
        });
    }, [id]);

    if (!service) return <div className="loading">Yükleniyor...</div>;

    return (
        <div className="serviceDetailMain">
            <div
                className="serviceBanner"
                style={{
                    backgroundImage: `url(${service.image})`,
                }}
            ></div>

            <div className="serviceContent">
                <h1>{service.title}</h1>
                <p>{service.description}</p>
            </div>

            <div className="otherServicesSection">
                <h2>Diğer Hizmetlerimiz</h2>
                <div className="otherServiceGrid">
                    {otherServices.map((item) => (
                        <div key={item.id} className="otherServiceCard">
                            <img src={item.image} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p>{item.description.length > 250
                                ? item.description.substring(0, 250) + "..."
                                : item.description}
                            </p>
                            <button onClick={() => router.push(`/ourServices/${item.id}`)}>
                                Devamını Gör
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}