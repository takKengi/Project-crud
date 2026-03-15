import express from "express";
import routes from "./src/routes/productRoutes.js";

const app = express();
app.use(express.json("products"))
routes(app);

app.listen(8000, () =>{
  console.log("Servidor escutando...");
  console.log("Rodando em http://localhost:8000");
});