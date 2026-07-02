import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import TraditionalDishes from "./pages/TraditionalDishes";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import DishDetails from "./pages/DishDetails";
import MenuDetail from "./pages/MenuDetail";
import MainLayout from "./layouts/MainLayout";

// Redirects the browser to the Express-hosted admin panel
const AdminRedirect = () => {
  useEffect(() => {
    window.location.replace("http://localhost:4000/admin");
  }, []);

  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      justifyContent: "center", background: "#0a0a0f", color: "#D4A017",
      fontFamily: "Inter, sans-serif", fontSize: "18px", gap: "12px"
    }}>
      <span style={{ fontSize: "32px" }}>🍛</span>
      Redirecting to Admin Panel…
    </div>
  );
};

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Admin panel — served by Express backend */}
        <Route path="/admin" element={<AdminRedirect />} />
        <Route path="/admin/*" element={<AdminRedirect />} />

        <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/traditional-dishes" element={<TraditionalDishes />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dish/:id" element={<DishDetails />} />
        <Route path="/menu/detail/:category/:index" element={<MenuDetail />} />
      </Route>
      </Routes>
    </>
  );
};

export default App;
