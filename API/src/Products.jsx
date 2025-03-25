import React, { useEffect, useState } from "react";
import { getProducts, addProduct, updateProduct, deleteProduct } from "./api.js";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ title: "", price: 0 });

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const handleAddProduct = async () => {
    const addedProduct = await addProduct(newProduct);
    setProducts([...products, addedProduct]);
  };

  const handleUpdateProduct = async (id) => {
    const updatedProduct = await updateProduct(id, { title: "Updated Product" });
    setProducts(products.map((prod) => (prod.id === id ? updatedProduct : prod)));
  };

  const handleDeleteProduct = async (id) => {
    await deleteProduct(id);
    setProducts(products.filter((prod) => prod.id !== id));
  };

  return (
    <div>
      <h2>Product Management</h2>
      <input
        type="text"
        placeholder="Product Title"
        onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
      />
      <button onClick={handleAddProduct}>Add Product</button>

      <ul>
        {products.map((prod) => (
          <li key={prod.id}>
            {prod.title} - ${prod.price}
            <button onClick={() => handleUpdateProduct(prod.id)}>Edit</button>
            <button onClick={() => handleDeleteProduct(prod.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;