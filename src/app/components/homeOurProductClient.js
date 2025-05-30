"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../style/homeOurProduct.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function HomeOurProductClient({ products }) {
    const router = useRouter();

    const truncateText = (text, maxLength) => {
        return text?.length > maxLength ? text.substring(0, maxLength) + "..." : text;
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
                {products.map((product) => (
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
            <Link className="homeAboutUsBtn" href="/ourProducts">Tümünü Keşfet</Link>
        </div>
    );
}