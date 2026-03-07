import { Link } from 'react-router-dom';
import { Play, Award, Heart, ShoppingBag, Eye, Link as LinkIcon } from 'lucide-react';

import heroImg from '../../assets/baklava_hero_1772920970326.png';
import kaakWarkaImg from '../../assets/kaak_warka_1772921019450.png';
import samsaImg from '../../assets/samsa_1772921033209.png';
import mlabesImg from '../../assets/mlabes_1772921046544.png';
import heritageImg from '../../assets/heritage_1772921071776.png';

const bestSellers = [
  { id: 1, name: 'Artisanal Kaak Warka', price: 45.00, image: kaakWarkaImg, category: 'kaak-warka' },
  { id: 2, name: 'Royal Samsa Pistachio', price: 55.00, image: samsaImg, category: 'samsa' },
  { id: 3, name: 'Golden Mlabes', price: 60.00, image: mlabesImg, category: 'mlabes' },
];

export default function Home() {
  return (
    <div className="font-sans antialiased text-[#777777] bg-baker-50">
      
      {/* 1. BAKER HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center bg-baker-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Hero Background" 
            className="w-full h-full object-cover object-center opacity-40 scale-105"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif text-white font-bold leading-tight mb-6">
            We Bake With <br /> <span className="text-baker-500">Passion</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light mb-10 max-w-2xl mx-auto">
            Traditional Tunisian patisserie crafted perfectly to create an unforgettable artisanal experience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/category/baklava" className="btn-primary w-full sm:w-auto">Shop Now</Link>
            <button className="flex items-center gap-2 text-white hover:text-baker-500 transition-colors font-medium">
              <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-sm">
                <Play className="w-4 h-4 ml-1" />
              </div>
              Watch Video
            </button>
          </div>
        </div>
      </section>

      {/* 2. BAKER ABOUT / HERITAGE (Split Layout) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Image Side */}
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 pr-12 pb-12">
                <img src={heritageImg} alt="Heritage Making" className="w-full rounded-sm shadow-xl" />
              </div>
              <div className="absolute bottom-0 right-0 w-2/3 border-8 border-white z-20">
                <img src={mlabesImg} alt="Mlabes Details" className="w-full object-cover aspect-square" />
              </div>
              <div className="absolute top-10 -left-6 w-32 h-32 bg-baker-500 rounded-full flex flex-col items-center justify-center text-white p-4 text-center z-30 shadow-lg animate-fade-in">
                <span className="text-3xl font-bold font-serif">50</span>
                <span className="text-xs uppercase tracking-wider font-medium">Years of<br/>Experience</span>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:w-1/2">
              <div className="mb-8">
                <p className="text-baker-500 uppercase tracking-[0.2em] font-medium text-sm mb-3">About Us</p>
                <h2 className="text-4xl md:text-5xl font-serif text-baker-900 font-bold leading-tight">
                  We Bake Every Item From The Core Of Our Hearts
                </h2>
              </div>
              <p className="text-lg mb-8 leading-relaxed">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. 
                Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-baker-50 rounded-full flex items-center justify-center flex-shrink-0 text-baker-500">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-baker-900 font-bold mb-1">Quality Products</h4>
                    <p className="text-sm">Finest selected almonds and pure honey in every piece.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-baker-50 rounded-full flex items-center justify-center flex-shrink-0 text-baker-500">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-baker-900 font-bold mb-1">Award Winning</h4>
                    <p className="text-sm">Recognized for authentic Tunisian recipes worldwide.</p>
                  </div>
                </div>
              </div>
              
              <Link to="/about" className="btn-primary inline-block">Read More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BAKER SERVICES / FEATURES */}
      <section className="py-24 bg-baker-900 text-center relative text-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="mb-16">
            <p className="text-baker-500 uppercase tracking-[0.2em] font-medium text-sm mb-3">Our Services</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">What Do We Offer For You?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-10 border border-white/10 hover:border-baker-500 transition-colors group rounded-sm">
              <div className="w-20 h-20 bg-baker-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white group-hover:text-baker-500 transition-colors">
                 <ShoppingBag className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">Quality Artisanal Sweets</h3>
              <p className="text-white/70">Magna sea amet stet diam dolor sed justo stet amet. Diam diam eos et eos.</p>
            </div>
            
             <div className="bg-white/5 backdrop-blur-sm p-10 border border-white/10 hover:border-baker-500 transition-colors group rounded-sm">
              <div className="w-20 h-20 bg-baker-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white group-hover:text-baker-500 transition-colors">
                 <Heart className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">Wedding Packages</h3>
              <p className="text-white/70">Magna sea amet stet diam dolor sed justo stet amet. Diam diam eos et eos.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-10 border border-white/10 hover:border-baker-500 transition-colors group rounded-sm">
              <div className="w-20 h-20 bg-baker-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white group-hover:text-baker-500 transition-colors">
                 <Award className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">Corporate Gifting</h3>
              <p className="text-white/70">Magna sea amet stet diam dolor sed justo stet amet. Diam diam eos et eos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BAKER PRODUCTS GRID */}
      <section className="py-24 bg-baker-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-baker-500 uppercase tracking-[0.2em] font-medium text-sm mb-3">Our Products</p>
            <h2 className="text-4xl md:text-5xl font-serif text-baker-900 font-bold mb-6">Explore Our Bakery Products</h2>
            <p className="text-lg">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestSellers.map((item) => (
              <div key={item.id} className="bg-white p-8 rounded-sm text-center group shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex justify-between items-start mb-6">
                   <h3 className="font-serif text-2xl text-baker-900 font-bold">{item.name}</h3>
                   <span className="price-badge bg-baker-50/50">${item.price.toFixed(2)}</span>
                </div>
                
                <div className="relative aspect-square overflow-hidden mb-6 rounded-sm bg-baker-50">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Baker Hover Action Overlay */}
                  <div className="absolute inset-0 bg-baker-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                     <Link to={`/category/${item.category}/product/${item.id}`} className="w-12 h-12 bg-baker-500 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-baker-500 transition-colors transform scale-0 group-hover:scale-100 duration-500 delay-100">
                       <Eye className="w-5 h-5" />
                     </Link>
                     <Link to={`/category/${item.category}/product/${item.id}`} className="w-12 h-12 bg-baker-500 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-baker-500 transition-colors transform scale-0 group-hover:scale-100 duration-500 delay-200">
                       <LinkIcon className="w-5 h-5" />
                     </Link>
                  </div>
                </div>
                
                <p className="mb-6">Magna sea amet stet diam dolor sed justo stet amet. Diam diam eos et eos.</p>
                <Link to={`/category/${item.category}/product/${item.id}`} className="text-baker-900 font-medium hover:text-baker-500 transition-colors flex items-center justify-center gap-2">
                   <ShoppingBag className="w-4 h-4 text-baker-500" /> View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
