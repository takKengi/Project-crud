import "../globals.css";
import Sidebar from "../components/sideBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav>

        <div className="dashboard">
          <Sidebar />

          <main className="content">
            {children}
          </main>
        </div>

      </nav>
    </section>
  );
}
