import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Footer from "./components/Footer/Footer";
import banner_men from "./components/Assets/banner_mens.png";
import banner_women from "./components/Assets/banner_women.png";
import banner_kids from "./components/Assets/banner_kids.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/men" element={<ShopCategory banner={banner_men} category="men"/>}></Route>
          <Route
            path="/women"
            element={<ShopCategory banner={banner_women} category="women" />}
          ></Route>
          <Route
            path="/kids"
            element={<ShopCategory banner={banner_kids} category="kids" />}
          ></Route>
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />}></Route>
          </Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<LoginSignup />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
