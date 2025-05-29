"use client";

import React, { useEffect, useState } from "react";
import { database } from "../../../firebase";
import { ref, onValue } from "firebase/database";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../style/homeOurProduct.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function HomeOurProduct() {
    const [products, setProducts] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const productsRef = ref(database, "products");
        onValue(productsRef, (snapshot) => {
            const data = snapshot.val();
            const array = data ? Object.entries(data).map(([id, val]) => ({ id, ...val })) : [];
            setProducts(array);
        });
    }, []);

    const truncateText = (text, maxLength) => {
        if (!text) return "";
        return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
    };

    return (
        <div className="homeOurProductMain">
            <h2>Ürünlerimiz</h2>
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
                className="homeOurProductSwiper"
            >
                {products.map(product => (
                    <SwiperSlide key={product.id}>
                        <div className="productSlide">
                            <img src={product.image} alt={product.title} className="productImage" />
                            <div className="productText">
                                <h3>{product.title}</h3>
                                <p>{truncateText(product.description, 150)}</p>
                                {product.description?.length > 150 && (
                                    <button
                                        className="seeMoreButton"
                                        onClick={() => router.push(`/ourProducts/${product.id}`)}
                                    >
                                        Devamını Gör
                                    </button>
                                )}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Link className="homeAboutUsBtn" href="/ourProducts">Tümünü Gör</Link>
        </div>
    );
}