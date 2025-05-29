import React from "react";
import ProductDetailClient from "../../components/ProductDetailClient";
import { getProductById, getOtherProducts } from "../../../../firebaseQueries";

export default async function ProductDetailPage({ params }) {
    const product = await getProductById(params.id);
    const otherProducts = await getOtherProducts(params.id, 3);

    return <ProductDetailClient product={product} otherProducts={otherProducts} />;
}