import { adminDb } from "../../../firebaseAdmin";
import Link from "next/link";
import "./ourProducts.css";

export const dynamic = "force-dynamic";

async function getProducts() {
    const snapshot = await adminDb.ref("products").once("value");
    const data = snapshot.val();
    const array = data ? Object.entries(data).map(([id, val]) => ({ id, ...val })) : [];
    return array.reverse();
}

export default async function OurProductsPage({ searchParams }) {
    const products = await getProducts();
    const ITEMS_PER_PAGE = 9;
    const currentPage = parseInt(searchParams.page || "1", 10);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentProducts = products.slice(startIndex, endIndex);
    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

    const truncateText = (text, maxLength) =>
        text?.length > maxLength ? text.substring(0, maxLength) + "..." : text;

    return (
        <div className="ourProductsPageMain">
            <div className="ourProductsPageImgDiv">
                <img className="ourProductsPageImg" src="/ourProductsBanner.png" alt="Zirex_Kağıt_Ürünlerimiz_Banner.png" />
            </div>
            <h2>Ürünlerimiz</h2>
            <div className="productGrid">
                {currentProducts.map((product) => (
                    <div key={product.id} className="productCard">
                        <img src={product.image} alt={product.title} className="productImage" />
                        <h3>{product.title}</h3>
                        <p>{truncateText(product.description, 250)}</p>
                        <Link href={`/ourProducts/${product.id}`} className="seeMoreButton">Devamını Gör</Link>
                    </div>
                ))}
            </div>
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => (
                    <Link
                        key={i + 1}
                        href={`?page=${i + 1}`}
                        className={`pageButton ${currentPage === i + 1 ? "active" : ""}`}
                    >
                        {i + 1}
                    </Link>
                ))}
            </div>
        </div>
    );
}