import React from "react";
import ProductDetailClient from "../../components/ProductDetailClient";
import { getProductById, getOtherProducts } from "../../../../firebaseQueries";
import { notFound } from "next/navigation";

export default async function ProductDetailPage({ params }) {
    const product = await getProductById(params.id);

    // Ürün bulunamadıysa 404 göster
    if (!product) {
        return notFound();
    }

    const otherProducts = await getOtherProducts(params.id, 3);

    return (
        <ProductDetailClient
            product={product}
            otherProducts={otherProducts || []}
        />
    );
}