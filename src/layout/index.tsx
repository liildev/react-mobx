import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";

export default function Layout() {
  return (
    <div>
      <Header />
      <main className="px-40 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
