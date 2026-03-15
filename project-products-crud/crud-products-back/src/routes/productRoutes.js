import express from "express";
import { listProductsControl, newProducts, productsId, delProducts } from "../controllers/productController.js";
import cors from "cors";

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200  
};

const routes = (app) => {
  app.use(express.json());
  app.use(cors(corsOptions))
  app.get("/products", listProductsControl);
  app.post("/products", newProducts);
  app.put("/products/:id", productsId);
  app.delete("/products/:id", delProducts);
};

export default routes;