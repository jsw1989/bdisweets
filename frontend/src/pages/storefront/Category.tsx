import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, Eye, Link as LinkIcon } from 'lucide-react';
import kaakWarkaImg from '../../assets/kaak_warka_1772921019450.png';
import samsaImg from '../../assets/samsa_1772921033209.png';
import mlabesImg from '../../assets/mlabes_1772921046544.png';
import heroImg from '../../assets/baklava_hero_1772920970326.png';

// Mock DB for products
const productsDB = {
  'kaak-warka': [
    { id: '1', name: 'Artisanal Kaak Warka', price: 45.00, image: kaakWarkaImg, desc: 'Classic almond paste filling with a delicate hint of rose water.' },
    { id: '4', name: 'Mini Kaak Warka Box', price: 25.00, image: kaakWarkaImg, desc: 'Perfect for sharing. An assortment of bite-sized delicacies.' }
  ],
  'baklava': [
    { id: '5', name: 'Royal Pignon Baklava', price: 75.00, image: heroImg, desc: 'Layered phyllo dough packed with premium Tunisian pine nuts and honey.' },
    { id: '6', name: 'Classic Almond & Pistachio', price: 55.00, image: heroImg, desc: 'The traditional favorite with a perfect crunch.' }
  ],
  'samsa': [
    { id: '2', name: 'Royal Samsa Pistachio', price: 55.00, image: samsaImg, desc: 'Golden crunchy triangles filled with crushed nuts and dipped in syrup.' }
  ],
  'mlabes': [
    { id: '3', name: 'Golden Mlabes', price: 60.00, image: mlabesImg, desc: 'Beautifully iced domes hiding a rich almond and orange blossom heart.' }
  ]
};

const categoryTitles = {
  'kaak-warka': 'Kaak Warka',
  'baklava': 'Baklava Assortments',
  'samsa': 'Samsa Collection',
  'mlabes': 'Mlabes'
};

export default function Category() {
  const { categoryId } = useParams();
  
  const categoryKey = categoryId as keyof typeof productsDB;
  const products = productsDB[categoryKey] || [];
  const title = categoryTitles[categoryKey as keyof typeof categoryTitles] || 'Our Collection';

  return (
    <div className="bg-white min-h-screen">
      {/* Baker Style Category Header */}
      <section className="bg-baker-900 pt-24 pb-8 text-center text-white relative">
        <h1 className="font-serif text-5xl md:text-6xl font-bold !text-white mb-4 z-10 relative">{title}</h1>
        {/* Breadcrumb style */}
        <div className="flex items-center justify-center gap-2 text-baker-500 font-medium tracking-wide uppercase text-sm z-10 relative">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-white/50">/</span>
          <Link to="/products" className="hover:text-white transition-colors">Products</Link>
          <span className="text-white/50">/</span>
          <span className="text-white">{title}</span>
        </div>
      </section>

      {/* Product Grid - Baker Style */}
      <section className="container mx-auto px-4 md:px-8 py-20">
        {products.length === 0 ? (
          <p className="text-center font-sans text-xl text-[#777777]">No products found in this collection.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((item) => (
              <div key={item.id} className="bg-baker-50 p-8 rounded-sm text-center group shadow-sm hover:shadow-xl transition-shadow border border-gray-100/50">
                <div className="flex justify-between items-start mb-6">
                   <h3 className="font-serif text-2xl text-baker-900 font-bold max-w-[70%] text-left leading-tight">{item.name}</h3>
                   <span className="price-badge bg-white">${item.price.toFixed(2)}</span>
                </div>
                
                <div className="relative aspect-square overflow-hidden mb-6 rounded-sm bg-white">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Baker Hover Action Overlay */}
                  <div className="absolute inset-0 bg-baker-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                     <Link to={`/category/${categoryId}/product/${item.id}`} className="w-12 h-12 bg-baker-500 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-baker-500 transition-colors transform scale-0 group-hover:scale-100 duration-500 delay-100">
                       <Eye className="w-5 h-5" />
                     </Link>
                     <Link to={`/category/${categoryId}/product/${item.id}`} className="w-12 h-12 bg-baker-500 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-baker-500 transition-colors transform scale-0 group-hover:scale-100 duration-500 delay-200">
                       <LinkIcon className="w-5 h-5" />
                     </Link>
                  </div>
                </div>
                
                <p className="mb-6 text-[#777777] line-clamp-2">{item.desc}</p>
                <Link to={`/category/${categoryId}/product/${item.id}`} className="text-baker-900 font-bold hover:text-baker-500 transition-colors flex items-center justify-center gap-2 uppercase tracking-wide text-sm">
                   <ShoppingBag className="w-4 h-4 text-baker-500" /> View Details
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
