"use client";

import React, { useEffect, useState } from "react";
import { database } from "../../../firebase";
import { ref, onValue } from "firebase/database";
import { useRouter } from "next/navigation";
import "./ourProducts.css"; // CSS dosyasını aynı yapıda kopyalayarak oluştur

const ITEMS_PER_PAGE = 9;

export default function OurProductsPage() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const router = useRouter();

    useEffect(() => {
        const productsRef = ref(database, "products");
        onValue(productsRef, (snapshot) => {
            const data = snapshot.val();
            const array = data ? Object.entries(data).map(([id, val]) => ({ id, ...val })) : [];
            setProducts(array.reverse());
        });
    }, []);

    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
    };

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentProducts = products.slice(startIndex, endIndex);
    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

    return (
        <div className="ourProductsPageMain">
            <div className="ourProductsPageImgDiv">
                <img className="ourProductsPageImg" src="/ourProductsBanner.png" alt="Zirex_Kağıt_Ürünlerimiz_Banner.png" />
            </div>
            <h2>Ürünlerimiz</h2>
            <div className="productGrid">
                {currentProducts.map(product => (
                    <div key={product.id} className="productCard">
                        <img src={product.image} alt={product.title} className="productImage" />
                        <h3>{product.title}</h3>
                        <p>{truncateText(product.description, 250)}</p>
                        <button
                            className="seeMoreButton"
                            onClick={() => router.push(`/ourProducts/${product.id}`)}
                        >
                            Devamını Gör
                        </button>
                    </div>
                ))}
            </div>

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