"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ref, onValue } from "firebase/database";
import { database } from "../../../../firebase";
import { FiCheck } from "react-icons/fi";
import "./ourProductsDetail.css";

export default function ProductDetailPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const [otherProducts, setOtherProducts] = useState([]);

    useEffect(() => {
        const productRef = ref(database, "products");
        onValue(productRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const all = Object.entries(data).map(([key, val]) => ({ id: key, ...val }));
                const current = all.find((p) => p.id === id);
                setProduct(current);

                const others = all.filter((p) => p.id !== id).slice(0, 3);
                setOtherProducts(others);
            }
        });
    }, [id]);

    if (!product) return <div className="loading">Yükleniyor...</div>;

    return (
        <div className="productDetailMain">
            <div
                className="productImageBanner"
                style={{ backgroundImage: `url(${product.image})` }}
            ></div>

            <div className="productContent">
                <h1>{product.title}</h1>
                <p className="productDescription">{product.description}</p>

                <div className="productListSection">
                    <h3>Servis Hizmeti</h3>
                    <div className="productItemGrid">
                        {product.services?.map((item, idx) => (
                            <div key={idx} className="productItem">
                                <FiCheck className="checkIcon" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="productListSection">
                    <h3>Ölçü & Kalıplık</h3>
                    <div className="productItemGrid">
                        {product.sizes?.map((item, idx) => (
                            <div key={idx} className="productItem">
                                <FiCheck className="checkIcon" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="productListSection">
                    <h3>Uygulanabilir Baskı</h3>
                    <div className="productItemGrid">
                        {product.prints?.map((item, idx) => (
                            <div key={idx} className="productItem">
                                <FiCheck className="checkIcon" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="otherProductsSection">
                <h2>Diğer Ürünler</h2>
                <div className="otherProductGrid">
                    {otherProducts.map((item) => (
                        <div key={item.id} className="otherProductCard">
                            <img src={item.image} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p>{item.description.length > 250 ? item.description.substring(0, 250) + "..." : item.description}</p>
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