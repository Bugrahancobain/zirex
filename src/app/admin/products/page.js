"use client";

import withAuth from "../../components/withAuth";
import React, { useState, useEffect } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { database } from "../../../../firebase";
import { ref, onValue, set, remove } from "firebase/database";
import "./adminProducts.css";

function Page() {
    const [products, setProducts] = useState([]);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [editProductId, setEditProductId] = useState(null);
    const [productToDelete, setProductToDelete] = useState(null);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    const [newProduct, setNewProduct] = useState({
        title: "",
        description: "",
        image: "",
        services: "",
        sizes: "",
        prints: ""
    });

    useEffect(() => {
        const productsRef = ref(database, "products");
        onValue(productsRef, (snapshot) => {
            const data = snapshot.val();
            const productArray = data
                ? Object.entries(data).map(([id, value]) => ({ id, ...value }))
                : [];
            setProducts(productArray);
        });
    }, []);

    const handleSaveProduct = () => {
        const productKey = editMode ? editProductId : Date.now().toString();
        const productRef = ref(database, `products/${productKey}`);

        const productToSave = {
            title: newProduct.title,
            description: newProduct.description,
            image: newProduct.image,
            services: newProduct.services.split(",").map((s) => s.trim()),
            sizes: newProduct.sizes.split(",").map((s) => s.trim()),
            prints: newProduct.prints.split(",").map((s) => s.trim())
        };

        set(productRef, productToSave).then(() => {
            setPopupOpen(false);
            setNewProduct({
                title: "",
                description: "",
                image: "",
                services: "",
                sizes: "",
                prints: ""
            });
            setEditMode(false);
            setEditProductId(null);
        });
    };

    const handleEditProduct = (product) => {
        setNewProduct({
            title: product.title,
            description: product.description,
            image: product.image,
            services: product.services?.join(", "),
            sizes: product.sizes?.join(", "),
            prints: product.prints?.join(", ")
        });
        setEditMode(true);
        setEditProductId(product.id);
        setPopupOpen(true);
    };

    const handleDeleteProduct = () => {
        const productRef = ref(database, `products/${productToDelete}`);
        remove(productRef).then(() => {
            setShowDeleteConfirm(false);
            setProductToDelete(null);
        });
    };

    return (
        <div className="adminReferencesMain">
            <AdminSidebar />
            <div className="adminReferencesContent">
                <h2 style={{ textAlign: "center" }}>Ürün Ayarları</h2>
                <button
                    className="adminReferencesAddButton"
                    onClick={() => {
                        setEditMode(false);
                        setPopupOpen(true);
                        setNewProduct({
                            title: "",
                            description: "",
                            image: "",
                            services: "",
                            sizes: "",
                            prints: ""
                        });
                    }}
                >
                    + Ürün Ekle
                </button>

                <div className="adminReferencesGrid">
                    {products.map((product) => (
                        <div key={product.id} className="adminReferencesCard">
                            <img src={product.image} alt={product.title} />
                            <h3>{product.title}</h3>
                            <p>{product.description?.substring(0, 150)}...</p>
                            <div className="adminReferencesCardActions">
                                <button onClick={() => handleEditProduct(product)}>Düzenle</button>
                                <button onClick={() => {
                                    setProductToDelete(product.id);
                                    setShowDeleteConfirm(true);
                                }}>Sil</button>
                            </div>
                        </div>
                    ))}
                </div>

                {isPopupOpen && (
                    <div className="adminReferencesPopup">
                        <h2>{editMode ? "Ürünü Düzenle" : "Yeni Ürün Ekle"}</h2>
                        <input type="text" placeholder="Ürün Başlığı" value={newProduct.title} onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })} />
                        <textarea placeholder="Ürün Açıklaması" value={newProduct.description} onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} />
                        <input type="text" placeholder="Ürün Resim Linki" value={newProduct.image} onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} />
                        <input type="text" placeholder="Servis Hizmeti (virgül ile ayır)" value={newProduct.services} onChange={(e) => setNewProduct({ ...newProduct, services: e.target.value })} />
                        <input type="text" placeholder="Size (virgül ile ayır)" value={newProduct.sizes} onChange={(e) => setNewProduct({ ...newProduct, sizes: e.target.value })} />
                        <input type="text" placeholder="Uygulanabilir Baskı (virgül ile ayır)" value={newProduct.prints} onChange={(e) => setNewProduct({ ...newProduct, prints: e.target.value })} />
                        <div className="adminReferencesPopupActions">
                            <button onClick={handleSaveProduct}>{editMode ? "Kaydet" : "Ekle"}</button>
                            <button onClick={() => setPopupOpen(false)}>İptal</button>
                        </div>
                    </div>
                )}

                {showDeleteConfirm && (
                    <div className="deletePopup">
                        <div className="deletePopupContent">
                            <h3>Ürünü Sil</h3>
                            <p>Bu ürünü silmek istediğinize emin misiniz?</p>
                            <div className="deletePopupActions">
                                <button className="cancelButton" onClick={() => setShowDeleteConfirm(false)}>Vazgeç</button>
                                <button className="deleteButton" onClick={handleDeleteProduct}>Sil</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default withAuth(Page);