"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FiCheck } from "react-icons/fi";
import "../ourProducts/[id]/ourProductsDetail.css";

export default function ProductDetailClient({ product, otherProducts }) {
    const router = useRouter();

    if (!product) return <div className="loading">Ürün bulunamadı.</div>;

    return (
        <div className="productDetailMain">
            <div
                className="productImageBanner"
                style={{ backgroundImage: `url(${product.image})` }}
            ></div>

            <div className="productContent">
                <h1>{product.title}</h1>
                <p className="productDescription">{product.description}</p>

                {product.services?.length > 0 && (
                    <div className="productListSection">
                        <h3>Servis Hizmeti</h3>
                        <div className="productItemGrid">
                            {product.services.map((item, idx) => (
                                <div key={idx} className="productItem">
                                    <FiCheck className="checkIcon" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {product.sizes?.length > 0 && (
                    <div className="productListSection">
                        <h3>Ölçü & Kalıplık</h3>
                        <div className="productItemGrid">
                            {product.sizes.map((item, idx) => (
                                <div key={idx} className="productItem">
                                    <FiCheck className="checkIcon" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {product.prints?.length > 0 && (
                    <div className="productListSection">
                        <h3>Uygulanabilir Baskı</h3>
                        <div className="productItemGrid">
                            {product.prints.map((item, idx) => (
                                <div key={idx} className="productItem">
                                    <FiCheck className="checkIcon" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className="otherProductsSection">
                <h2>Diğer Ürünler</h2>
                <div className="otherProductGrid">
                    {otherProducts.map((item) => (
                        <div key={item.id} className="otherProductCard">
                            <img src={item.image} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p>
                                {item.description?.length > 250
                                    ? item.description.substring(0, 250) + "..."
                                    : item.description}
                            </p>
                            <button onClick={() => router.push(`/ourProducts/${item.id}`)}>
                                Devamını Gör
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}