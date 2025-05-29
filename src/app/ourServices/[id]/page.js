// app/ourServices/[id]/page.js

import { getServiceById, getOtherServices } from "../../../../firebaseQueries";
import "./serviceDetail.css";
import Link from "next/link";

export default async function ServiceDetailPage({ params }) {
    const { id } = params;
    const service = await getServiceById(id);
    const otherServices = await getOtherServices(id);

    if (!service) return <div className="loading">Yükleniyor...</div>;

    return (
        <div className="serviceDetailMain">
            <div
                className="serviceBanner"
                style={{
                    backgroundImage: `url(${service.image})`,
                }}
            ></div>

            <div className="serviceContent">
                <h1>{service.title}</h1>
                <p>{service.description}</p>
            </div>

            <div className="otherServicesSection">
                <h2>Diğer Hizmetlerimiz</h2>
                <div className="otherServiceGrid">
                    {otherServices.map((item) => (
                        <div key={item.id} className="otherServiceCard">
                            <img src={item.image} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p>
                                {item.description.length > 250
                                    ? item.description.substring(0, 250) + "..."
                                    : item.description}
                            </p>
                            <Link href={`/ourServices/${item.id}`}>
                                <button>Devamını Gör</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}