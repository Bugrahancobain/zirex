import { adminDb } from "./firebaseAdmin";

export async function getProducts() {
    const snapshot = await adminDb.ref("products").once("value");
    const data = snapshot.val();
    const products = data
        ? Object.entries(data).map(([id, val]) => ({ id, ...val }))
        : [];
    return products;
}