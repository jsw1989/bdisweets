import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/storefront/Home';
import Category from './pages/storefront/Category';
import ProductDetails from './pages/storefront/ProductDetails';
import Checkout from './pages/storefront/Checkout';
import About from './pages/storefront/About';
import Services from './pages/storefront/Services';
import Products from './pages/storefront/Products';
import Contact from './pages/storefront/Contact';

import AdminDashboard from './pages/admin/AdminDashboard';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Storefront Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/category/:categoryId" element={<Category />} />
            <Route path="/category/:categoryId/product/:productId" element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
