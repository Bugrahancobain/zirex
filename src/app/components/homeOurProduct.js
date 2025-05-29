// src/app/components/homeOurProduct.js
import { getProducts } from "../../../getProducts";
import HomeOurProductClient from "./homeOurProductClient";

export default async function HomeOurProduct() {
    const products = await getProducts();
    return <HomeOurProductClient products={products} />;
}