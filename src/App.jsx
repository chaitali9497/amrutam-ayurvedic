import Header from "./components/Header";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import LabTests from "./pages/LabTests";
import Shop from "./pages/Shop";
import Forum from "./pages/Forum";
import AboutUs from "./pages/AboutUs";
import Wallet from "./pages/Wallet";
import Cart from "./pages/Cart";
import Notifications from "./pages/Notifications";
import Services from "./pages/Services";
import ProductDetail from "./pages/ProductDetails";


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-doctors" element={<Doctors />} />
        <Route path="/lab-tests" element={<LabTests />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/about-us" element={<AboutUs />} />

       
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/services" element={<Services />} />
        <Route path="/product/:id" element={<ProductDetail />} />

       
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </>
  );
}
export default App;
