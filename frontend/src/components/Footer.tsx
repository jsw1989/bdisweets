import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-baker-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand & Story */}
          <div className="col-span-1">
            <h2 className="font-serif text-3xl text-baker-500 mb-6 font-bold tracking-widest leading-none text-nowrap">BDI SWEETS</h2>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Crafting traditional Tunisian patisserie with artisanal mastery.
              Our heritage recipes are preserved using only the finest ingredients.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-baker-500 hover:border-baker-500 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-baker-500 hover:border-baker-500 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-baker-500 hover:border-baker-500 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-baker-500 hover:border-baker-500 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="font-serif text-xl font-bold mb-6">Get In Touch</h3>
            <ul className="space-y-4 text-white/70 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-baker-500 flex-shrink-0" />
                123 Street, Tunis, Tunisia
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-baker-500 flex-shrink-0" />
                +216 12 345 678
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-baker-500 flex-shrink-0" />
                info@bdisweets.tn
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-serif text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link to="/category/kaak-warka" className="hover:text-baker-500 transition-colors block">Kaak Warka</Link></li>
              <li><Link to="/category/baklava" className="hover:text-baker-500 transition-colors block">Baklava</Link></li>
              <li><Link to="/category/samsa" className="hover:text-baker-500 transition-colors block">Samsa</Link></li>
              <li><Link to="/category/mlabes" className="hover:text-baker-500 transition-colors block">Mlabes</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="font-serif text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-white/70 text-sm mb-4">Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div className="relative">
              <input type="email" placeholder="Your email" className="w-full bg-white/10 border border-white/20 text-white rounded-sm py-3 px-4 focus:outline-none focus:border-baker-500" />
              <button className="absolute right-2 top-2 bg-baker-500 text-white px-4 py-1.5 rounded-sm hover:bg-white hover:text-baker-500 transition-colors text-sm font-medium">SignUp</button>
            </div>
          </div>

        </div>

        <div className="border-t border-white/20 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <div>
            &copy; <span className="text-white">BDI SWEETS</span>, All Right Reserved.
          </div>
          <div>
            Designed inspired by <span className="text-white">HTML Codex</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
