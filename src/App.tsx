import { Routes, Route, Navigate } from 'react-router-dom'
import Footer from "./components/105021006_Footer"
import Header from "./components/105021006_Header"
import Spinner from "./components/Spinner"
import BackToTop from "./components/BackToTop"
import BestSeller from "./pages/105021006_Bestseller"
import CartPage from "./pages/105021006_Cart"
import Checkout from "./pages/105021006_Checkout"
import Contact from "./pages/105021006_Contact"
import Home from "./pages/105021006_Home"
import Page from "./pages/105021006_Pages"
import Shop from "./pages/105021006_Shop"
import Singlepage from "./pages/105021006_Singlepage"
import Loi from "./pages/105021006_Loi"
import ThankYou from "./pages/105021006_ThankYou"


function App() {
  // Note: WOW.js is initialized via the useWowAnimation hook in individual components
  // Spinner, BackToTop, and Sticky Navbar are handled by their respective components/hooks

  return (
    <>
      <Spinner />
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/single/:id" element={<Singlepage />} />
          <Route path="/pages" element={<Page />} />
          <Route path="/bestseller" element={<BestSeller />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/404" element={<Loi />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
        <Footer />
        <BackToTop />
      </div>
    </>
  )
}

export default App
