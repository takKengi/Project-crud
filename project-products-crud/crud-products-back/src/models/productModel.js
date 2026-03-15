import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";
listProducts, createProducts, updateProducts, deleteProducts
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function listProducts() {
  const db = conexao.db("store_db");
  const colecao = db.collection("products");
  return colecao.find().toArray(); 
};

export async function createProducts(productData) {
  const db = conexao.db("store_db");
  const colecao = db.collection("products");
  return colecao.insertOne(productData);
};

export async function updateProducts(id, productData) {
  const db = conexao.db("store_db");
  const colecao = db.collection("products");
  const objID = ObjectId.createFromHexString(id)
  return colecao.updateOne({_id: new ObjectId(objID)}, {$set:productData});
};

export async function deleteProducts(id) {
  const db = conexao.db("store_db");
  const colecao = db.collection("products");
  const resultado = await colecao.deleteOne({ _id: new ObjectId(id) });
  return resultado;
};