"use client";

import { useState } from "react";
import Axios from "axios";

type FormValues = {
  name?: string;
  cost?: number;
  category?: string;
};

export default function ProductForm() {
  const [values, setValues] = useState<FormValues>({});

  const handleChangeValues = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    setValues((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleClickButton = () => {
    Axios.post("http://localhost:8000/products", {
      name: values.name,
      cost: Number(values.cost),
      category: values.category,
    }).then((response) => {
      console.log(response);
      alert("Produto Cadastrado")
    });
  };

  return (
    <div className="appContainer" id="backgroundPages">
      <div className="registerContainer">
        <h1>Cadastrar produto</h1>

        <input
          type="text"
          name="name"
          placeholder="Nome"
          className="registerInput"
          onChange={handleChangeValues}
        />

        <input
          type="number"
          name="cost"
          placeholder="Preço"
          className="registerInput"
          onChange={handleChangeValues}
        />

        <input
          type="text"
          name="category"
          placeholder="Categoria"
          className="registerInput"
          onChange={handleChangeValues}
        />

        <button
          className="registerButton"
          onClick={handleClickButton}
        >
          Cadastrar
        </button>
      </div>
    </div>
  );
}
