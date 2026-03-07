import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, User } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Add sticky dark background after 50px of scroll
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // For non-home pages we might want the dark background permanently since there's no dark hero image
  const isHomePage = location.pathname === '/';
  const navBgClass = isScrolled || !isHomePage ? 'bg-baker-900 shadow-md py-4' : 'bg-transparent py-6';

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${navBgClass}`}>
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center justify-center">
            <h1 className="font-serif text-2xl md:text-3xl tracking-widest text-[#EAA636] font-bold m-0 leading-none">
              BDI SWEETS
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/products" className="nav-link">Products</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>

          {/* Icons Context */}
          <div className="flex items-center gap-6">
            <Link to="/admin" className="text-white hover:text-baker-500 transition-colors" title="Admin">
              <User className="w-5 h-5" />
            </Link>
            <Link to="/checkout" className="text-white hover:text-baker-500 transition-colors relative group">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-baker-500 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>
            <button className="md:hidden text-white hover:text-baker-500 transition-colors">
              <Menu className="w-7 h-7" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
