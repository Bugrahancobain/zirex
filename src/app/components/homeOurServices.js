// src/app/components/homeOurServices.js
import { getServices } from "../../../getServices"; // az sonra oluşturacağız
import HomeOurServicesClient from "./homeOurServicesClient";

export default async function HomeOurServices() {
    const services = await getServices();
    return <HomeOurServicesClient services={services} />;
}