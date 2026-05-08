import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <h2 className="logo">Gerencial</h2>

      <nav className="menu">
        <Link href="/">🏠 Home</Link>
        <Link href="/products/create">➕ Cadastrar</Link>
        <Link href="/products/read">📦 Produtos</Link>
        {/* <Link href="/products/update">✏️ Editar</Link>
        <Link href="/products/delete">🗑 Remover</Link> */}
      </nav>

    </aside>
  );
}