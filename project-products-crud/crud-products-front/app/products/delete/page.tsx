"use client"

import axios from "axios";

export default async function HandleDelete(id: number): Promise<boolean> {
  try {
    await axios.delete(`http://localhost:8000/products/${id}`);
    return true;
  } catch (err) {
    console.error("Erro ao deletar produto:", err);
    return false;
  }
}