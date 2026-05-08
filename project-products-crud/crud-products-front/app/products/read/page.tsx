"use client"

import { useEffect, useState } from "react";
import Axios from "axios";
import HandleDelete from "../delete/page";

type Products = {
  _id: number;
  name?: string;
  cost?: string;
  category?: string;
};

function Products() {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    Axios.get("http://localhost:8000/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  const handleDeleteClick = async (id: number) => {
    const success = await HandleDelete(id);
    if (success) {
      setProducts(products.filter((p) => p._id !== id));
    }
  };

  const handleUpdate = (id: number) => {
    window.location.href = `/products/update/${id}`;
  };

  return (
    <div className="listContainer" id="backgroundPages">
      <h1 className="listTitle">Produtos</h1>
        <div className="productGrid">
          {products.map((product) => (
            <div className="productCard" key={product._id}>
            <p className="productName">Nome: {product.name}</p>
            <p className="productInfo">Preço: R${product.cost}</p>
            <p className="productInfo">Categoria: {product.category}</p>
            <button className="buttonsOnRead" onClick={() => handleUpdate(product._id)}>✏️</button>
            <button className="buttonsOnRead" onClick={() => handleDeleteClick(product._id)}>🗑️</button>
            </div>        
      ))}

        </div>
    </div>
  );
}

export default Products;