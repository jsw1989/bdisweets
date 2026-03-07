import { Link } from 'react-router-dom';
import { Eye, Link as LinkIcon, Phone } from 'lucide-react';
import heroImg from '../../assets/baklava_hero_1772920970326.png';
import kaakWarkaImg from '../../assets/kaak_warka_1772921019450.png';
import samsaImg from '../../assets/samsa_1772921033209.png';
import mlabesImg from '../../assets/mlabes_1772921046544.png';

// Consolidate products into a single flat array for the global page
const allProducts = [
  { id: '1', category: 'kaak-warka', name: 'Artisanal Kaak Warka', price: 45.00, image: kaakWarkaImg, desc: 'Classic almond paste filling with a delicate hint of rose water.' },
  { id: '2', category: 'samsa', name: 'Royal Samsa Pistachio', price: 55.00, image: samsaImg, desc: 'Golden crunchy triangles filled with crushed nuts and dipped in syrup.' },
  { id: '3', category: 'mlabes', name: 'Golden Mlabes', price: 60.00, image: mlabesImg, desc: 'Beautifully iced domes hiding a rich almond and orange blossom heart.' },
  { id: '4', category: 'kaak-warka', name: 'Mini Kaak Warka Box', price: 25.00, image: kaakWarkaImg, desc: 'Perfect for sharing. An assortment of bite-sized delicacies.' },
  { id: '5', category: 'baklava', name: 'Royal Pignon Baklava', price: 75.00, image: heroImg, desc: 'Layered phyllo dough packed with premium Tunisian pine nuts and honey.' },
  { id: '6', category: 'baklava', name: 'Classic Almond & Pistachio', price: 55.00, image: heroImg, desc: 'The traditional favorite with a perfect crunch.' }
];

export default function Products() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. BAKER HERO OVERLAY */}
      <section className="relative pt-40 pb-24 bg-baker-900 overflow-hidden bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="absolute inset-0 bg-baker-900/80 z-0"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-serif text-white font-bold mb-4">Products</h1>
          <div className="flex items-center justify-center gap-2 text-baker-500 font-medium tracking-wide uppercase text-sm">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/50">/</span>
            <span className="hover:text-white transition-colors cursor-pointer">Pages</span>
            <span className="text-white/50">/</span>
            <span className="text-white">Products</span>
          </div>
        </div>
      </section>

      {/* 2. BAKER CTA BANNER */}
      <section className="bg-baker-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
            <p className="uppercase tracking-widest text-sm font-bold mb-2">// CONTACT US</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">The Best Bakery In Your City</h2>
            <div className="flex items-center justify-center gap-4 group cursor-pointer inline-flex">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                     <Phone className="w-6 h-6 text-baker-500" />
                 </div>
                 <div className="text-left">
                     <p className="font-bold uppercase tracking-wider text-white/90">Call Us</p>
                     <p className="font-serif text-3xl font-bold">+216 71 123 456</p>
                 </div>
            </div>
        </div>
      </section>

      {/* 3. BAKER PRODUCTS GRID */}
      <section className="py-24 bg-baker-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
            
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-baker-500 uppercase tracking-[0.2em] font-medium text-sm mb-3">// BAKERY PRODUCTS</p>
            <h2 className="text-4xl md:text-5xl font-serif text-baker-900 font-bold mb-6">Explore The Categories Of Our Bakery Products</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.map((item) => (
              <div key={item.id} className="bg-white rounded-sm group shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col">
                
                {/* Baker Structure: Top Price Pill & Title */}
                <div className="p-8 text-center flex-grow transition-colors duration-300 group-hover:bg-[#FDF5EB]">
                    <div className="inline-block px-4 py-1 rounded-full border border-baker-500 text-baker-500 text-sm font-medium mb-6 bg-white">
                        ${item.price.toFixed(2)} - ${(item.price * 1.5).toFixed(2)}
                    </div>
                    <h3 className="font-serif text-3xl text-baker-900 font-bold mb-4">{item.name}</h3>
                    <p className="text-[#777777] leading-relaxed line-clamp-2">{item.desc}</p>
                </div>
                
                {/* Baker Structure: Bottom Image with dark overlay */}
                <div className="relative aspect-[4/3] overflow-hidden w-full">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Baker Hover Action Overlay */}
                  <div className="absolute inset-0 bg-baker-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                     <Link to={`/category/${item.category}/product/${item.id}`} className="w-12 h-12 bg-baker-500 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-baker-500 transition-colors transform scale-0 group-hover:scale-100 duration-500 delay-100">
                       <Eye className="w-5 h-5" />
                     </Link>
                     <Link to={`/category/${item.category}/product/${item.id}`} className="w-12 h-12 bg-white text-baker-500 rounded-full flex items-center justify-center hover:bg-baker-500 hover:text-white transition-colors transform scale-0 group-hover:scale-100 duration-500 delay-200">
                       <LinkIcon className="w-5 h-5" />
                     </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
