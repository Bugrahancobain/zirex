// app/ourServices/page.js

import { getServices } from "../../../getServices";
import Link from "next/link";
import "./ourServices.css";

const ITEMS_PER_PAGE = 9;

export default async function OurServicesPage() {
    const services = await getServices();

    const totalPages = Math.ceil(services.length / ITEMS_PER_PAGE);
    const currentPage = 1;
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentServices = services.slice(startIndex, endIndex);

    const truncateText = (text, maxLength) =>
        text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

    return (
        <div className="ourServicesPageMain">
            <div className="ourServicesPageImgDiv">
                <img
                    className="ourServicesPageImg"
                    src="/ourServicesBanner.png"
                    alt="Zirex_Kağıt_Hizmetlerimiz_Banner.png"
                />
            </div>
            <h2>Hizmetlerimiz</h2>
            <div className="serviceGrid">
                {currentServices.map((service) => (
                    <div key={service.id} className="serviceCard">
                        <img src={service.image} alt={service.title} className="serviceImage" />
                        <h3>{service.title}</h3>
                        <p>{truncateText(service.description, 250)}</p>
                        <Link href={`/ourServices/${service.id}`} className="seeMoreButton">
                            Devamını Gör
                        </Link>
                    </div>
                ))}
            </div>

            {/* Sayfalama UI sadece görünüm için, client-side paginasyon yok */}
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i + 1}
                        className={`pageButton ${currentPage === i + 1 ? "active" : ""}`}
                    // İstersen query param'la sayfa geçişi yapabilirsin
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}