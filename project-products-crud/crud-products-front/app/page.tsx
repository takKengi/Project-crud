import Link from "next/link";

export default function Home() {
  return (
    <div className="home" id="backgroundPages">

      <div className="homeContent">
        <h1 className="title">Painel de gestão</h1>
        <p className="subtitle">Gerencie os produtos da sua loja</p>

        <div className="cardGrid">

          <Link href="/products/create" className="card">
            <h2>➕ Cadastrar</h2>
            <p>Adicionar novos produtos</p>
          </Link>

          <Link href="/products/read" className="card">
            <h2>📦 Produtos</h2>
            <p>Visualizar todos os produtos</p>
          </Link>

          <Link href="/products/update" className="card">
            <h2>✏️ Editar</h2>
            <p>Atualizar informações</p>
          </Link>

          <Link href="/products/delete" className="card">
            <h2>🗑 Remover</h2>
            <p>Excluir produtos</p>
          </Link>

        </div>
      </div>

    </div>
  );
}