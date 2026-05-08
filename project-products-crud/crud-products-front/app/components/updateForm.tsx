"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Axios from "axios";

type FormValues = {
  name?: string;
  cost?: string;
  category?: string;
};

export default function ProductUpdateForm() {
  const { id } = useParams();
  const [values, setValues] = useState<FormValues>({});

  useEffect(() => {
    Axios.get(`http://localhost:8000/products/${id}`).then((response) => {
      setValues(response.data);
    });
  }, [id]);

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
    Axios.put(`http://localhost:8000/products/${id}`, {
      name: values.name,
      cost: values.cost,
      category: values.category,
    }).then(() => {
      alert("Produto atualizado com sucesso!");
    });
  };

  return (
    <div className="appContainer" id="backgroundPages">
      <div className="registerContainer">
        <h1>Editar produto</h1>

        <input
          type="text"
          name="name"
          placeholder="Nome"
          className="registerInput"
          value={values.name || ""}
          onChange={handleChangeValues}
        />

        <input
          type="text"
          name="cost"
          placeholder="Preço"
          className="registerInput"
          value={values.cost || ""}
          onChange={handleChangeValues}
        />

        <input
          type="text"
          name="category"
          placeholder="Categoria"
          className="registerInput"
          value={values.category || ""}
          onChange={handleChangeValues}
        />

        <button
          className="registerButton"
          onClick={handleClickButton}
        >
          Atualizar
        </button>
      </div>
    </div>
  );
}