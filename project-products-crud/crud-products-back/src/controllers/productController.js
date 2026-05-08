import { listProducts, getProductById, createProducts, updateProducts, deleteProducts} from "../models/productModel.js";

export async function listProductsControl(req, res) {
  const products = await listProducts();
  res.status(200).json(products);
};

export async function listProductsByID(req, res) {
  const { id } = req.params;
  try {
    const product = await getProductById(id); 
    if (!product) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar produto" });
  }
};

export async function newProducts(req, res) {
  const newProducts = req.body;
  try {
    const createdProduct= await createProducts(newProducts); 
    res.status(200).json(createdProduct); 
  } catch (erro) {
    console.error(erro.message);
    res.status(500).json({"Erro":"Falha na requisição"});
  };
};

export async function productsId(req, res) {
  const id = req.params;
  const updateData = req.body;

  try {
    const result = await updateProducts(id, updateData);
    if (result.modifiedCount === 0) {
      return res.status(404).json({"Erro":"Produto não encontrado"});
    }
    res.status(200).json({"Sucesso":"Produto atualizado com sucesso"});
  } catch (erro) {
    res.status(500).json({"Erro":"Falha na requisição"});
  }
};

export async function delProducts(req, res) {
  const { id } = req.params;

  try {
    const result = await deleteProducts(id); 
    if (result.deletedCount === 0) {
      return res.status(404).json({"Erro":"Produto não encontrado"});
    }
    res.status(200).json({"Sucesso":"Produto removido com sucesso" });
  } catch (erro) {
    res.status(500).json({"Erro":"Falha na requisição"});
  };
};