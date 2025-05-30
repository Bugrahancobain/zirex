import { adminDb } from "./firebaseAdmin";

export async function getProductById(id) {
    const invalidChars = /[.#$[\]]/;
    if (!id || invalidChars.test(id)) {
        console.warn("Geçersiz ID algılandı:", id);
        return null;
    }

    const snapshot = await adminDb.ref(`products/${id}`).get();
    const data = snapshot.val();
    return data ? { id, ...data } : null;
}

export async function getOtherProducts(excludeId, limit = 3) {
    const snapshot = await adminDb.ref("products").get();
    const data = snapshot.val();
    if (!data) return [];

    const all = Object.entries(data).map(([key, val]) => ({ id: key, ...val }));
    return all.filter((item) => item.id !== excludeId).slice(0, limit);
}

export async function getServiceById(id) {
    const snapshot = await adminDb.ref(`services/${id}`).once("value");
    const data = snapshot.val();
    return data ? { id, ...data } : null;
}

export async function getOtherServices(excludeId, limit = 3) {
    const snapshot = await adminDb.ref("services").once("value");
    const data = snapshot.val();
    if (!data) return [];

    const all = Object.entries(data).map(([id, val]) => ({ id, ...val }));
    return all.filter((item) => item.id !== excludeId).slice(0, limit);
}