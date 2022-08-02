import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
