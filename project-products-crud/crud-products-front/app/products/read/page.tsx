"use client"

import { useEffect, useState } from "react";
import Axios from "axios";

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

  return (
    <div className="listContainer" id="backgroundPages">
      <h1 className="listTitle">Produtos</h1>
        <div className="productGrid">
          {products.map((product) => (
            <div className="productCard" key={product._id}>
            <p className="productName">Nome: {product.name}</p>
            <p className="productInfo">Preço: R${product.cost}</p>
            <p className="productInfo">Categoria: {product.category}</p>
            </div>        
      ))}
        </div>
    </div>
  );
}

export default Products;