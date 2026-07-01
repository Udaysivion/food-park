import { Routes, Route } from "react-router-dom";
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

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
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
