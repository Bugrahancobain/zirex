// src/lib/getServices.js
import { adminDb } from "./firebaseAdmin";
import { get, ref } from "firebase/database";

export async function getServices() {
    const snapshot = await get(ref(adminDb, "services"));
    const data = snapshot.val();
    return data ? Object.entries(data).map(([id, val]) => ({ id, ...val })).reverse() : [];
}