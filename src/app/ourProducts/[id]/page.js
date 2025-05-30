import React from "react";
import ProductDetailClient from "../../components/ProductDetailClient";
import { getProductById, getOtherProducts } from "../../../../firebaseQueries";
import { notFound } from "next/navigation";

export default async function ProductDetailPage({ params }) {
    const id = typeof params?.id === "string" ? params.id : null;
    if (!id) return notFound();

    const product = await getProductById(id);
    if (!product) return notFound();

    const otherProducts = await getOtherProducts(id, 3);

    return (
        <ProductDetailClient
            product={product}
            otherProducts={otherProducts || []}
        />
    );
}