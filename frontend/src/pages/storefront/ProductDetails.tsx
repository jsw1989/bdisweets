import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Heart, ShieldAlert } from 'lucide-react';

import kaakWarkaImg from '../../assets/kaak_warka_1772921019450.png';
import samsaImg from '../../assets/samsa_1772921033209.png';
import mlabesImg from '../../assets/mlabes_1772921046544.png';
import heroImg from '../../assets/baklava_hero_1772920970326.png';

const productsDB = {
  '1': { name: 'Artisanal Kaak Warka', price: 45.00, image: kaakWarkaImg, desc: 'Classic almond paste filling with a delicate hint of rose water. Our signature recipe refined over generations.', ingredients: ['Almond paste', 'Flour', 'Rose water', 'Butter', 'Sugar'], allergens: ['Nuts', 'Gluten', 'Dairy'] },
  '2': { name: 'Royal Samsa Pistachio', price: 55.00, image: samsaImg, desc: 'Golden crunchy triangles filled with crushed nuts and dipped in premium honey.', ingredients: ['Pistachios', 'Almonds', 'Phyllo Dough', 'Honey', 'Butter'], allergens: ['Nuts', 'Gluten', 'Dairy'] },
  '3': { name: 'Golden Mlabes', price: 60.00, image: mlabesImg, desc: 'Beautifully iced domes hiding a rich almond and orange blossom heart.', ingredients: ['Almonds', 'Sugar Icing', 'Orange Blossom Water', 'Egg Whites'], allergens: ['Nuts', 'Eggs'] },
  '4': { name: 'Mini Kaak Warka Box', price: 25.00, image: kaakWarkaImg, desc: 'Perfect for sharing. An assortment of bite-sized delicacies.', ingredients: ['Almond paste', 'Flour', 'Rose water', 'Butter', 'Sugar'], allergens: ['Nuts', 'Gluten', 'Dairy'] },
  '5': { name: 'Royal Pignon Baklava', price: 75.00, image: heroImg, desc: 'Layered phyllo dough packed with premium Tunisian pine nuts and honey.', ingredients: ['Pine Nuts', 'Phyllo Dough', 'Honey', 'Butter', 'Sugar'], allergens: ['Pine Nuts', 'Gluten', 'Dairy'] },
  '6': { name: 'Classic Almond & Pistachio', price: 55.00, image: heroImg, desc: 'The traditional favorite with a perfect crunch.', ingredients: ['Almonds', 'Pistachios', 'Phyllo Dough', 'Honey', 'Butter'], allergens: ['Nuts', 'Gluten', 'Dairy'] },
};

export default function ProductDetails() {
  const { productId } = useParams();
  const product = productsDB[(productId || '1') as keyof typeof productsDB];
  const [weight, setWeight] = useState(1);
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div className="pt-32 text-center text-2xl font-serif">Product not found.</div>;

  const weights = [0.5, 1, 2, 5]; // kg
  const totalPrice = product.price * weight * quantity;

  return (
    <div className="bg-white min-h-screen">
      {/* Baker Style Category Header */}
      <section className="bg-baker-900 pt-32 pb-16 text-center text-white relative">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 z-10 relative">{product.name}</h1>
        <div className="flex items-center justify-center gap-2 text-baker-500 font-medium tracking-wide text-sm z-10 relative">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-white/50">/</span>
          <span className="text-white">Shop</span>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24 lg:flex gap-16">
        {/* Left: Product Image Showcase */}
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <div className="aspect-square bg-baker-50 rounded-sm border border-baker-100 overflow-hidden relative group">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-6 left-6 price-badge bg-white shadow-lg text-lg">
              ${product.price.toFixed(2)} <span className="text-sm font-normal text-[#777777]">/kg</span>
            </div>
          </div>
        </div>

        {/* Right: Product Details & Cart Actions */}
        <div className="lg:w-1/2 flex flex-col pt-4">
          <p className="text-baker-500 uppercase tracking-[0.2em] font-medium text-sm mb-3">Product Detail</p>
          <h2 className="font-serif text-4xl text-baker-900 font-bold mb-6">{product.name}</h2>
          
          <p className="text-lg leading-relaxed mb-10 text-[#777777]">{product.desc}</p>

          <div className="grid sm:grid-cols-2 gap-8 mb-10">
            {/* Weight Options */}
            <div>
              <label className="block text-sm font-medium text-baker-900 tracking-wide mb-3">Weight Selection</label>
              <div className="flex gap-2 flex-wrap">
                {weights.map(w => (
                  <button 
                    key={w}
                    onClick={() => setWeight(w)}
                    className={`px-5 py-2 font-medium transition-colors border-2 rounded-full ${weight === w ? 'border-baker-500 bg-baker-500 text-white' : 'border-[#E0E0E0] text-[#777777] hover:border-baker-500 hover:text-baker-500'}`}
                  >
                    {w} kg
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Options */}
            <div>
              <label className="block text-sm font-medium text-baker-900 tracking-wide mb-3">Quantity</label>
              <div className="flex items-center border-2 border-[#E0E0E0] rounded-full w-36 overflow-hidden">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-5 py-2 text-[#777777] hover:bg-baker-50 transition-colors font-bold text-lg">-</button>
                <input type="number" readOnly value={quantity} className="w-full text-center bg-transparent border-none focus:ring-0 text-baker-900 font-bold" />
                <button onClick={() => setQuantity(quantity + 1)} className="px-5 py-2 text-[#777777] hover:bg-baker-50 transition-colors font-bold text-lg">+</button>
              </div>
            </div>
          </div>

          <div className="bg-baker-50 p-6 rounded-sm border border-baker-100 flex items-center justify-between mb-8">
            <span className="font-medium text-baker-900 text-lg">Total Estimate</span>
            <span className="font-serif text-3xl font-bold text-baker-500">${totalPrice.toFixed(2)}</span>
          </div>

          <div className="flex gap-4 mb-12">
            <Link to="/checkout" className="btn-primary flex-1 flex items-center justify-center gap-2 text-lg">
              <ShoppingCart className="w-5 h-5" /> Proceed to Request
            </Link>
            <button className="w-14 h-14 rounded-full border-2 border-[#E0E0E0] flex items-center justify-center text-[#777777] hover:text-baker-500 hover:border-baker-500 transition-colors flex-shrink-0">
               <Heart className="w-5 h-5" />
            </button>
          </div>

          {/* Details - Ingredients & Allergens */}
          <div className="border-t border-[#E0E0E0] pt-8 space-y-6">
            <div>
              <h4 className="font-serif text-xl font-bold text-baker-900 mb-3">Ingredients</h4>
              <p className="text-[#777777]">{product.ingredients.join(', ')}</p>
            </div>
            
            <div>
              <h4 className="font-serif flex items-center gap-2 text-xl font-bold text-baker-900 mb-3">
                 <ShieldAlert className="w-5 h-5 text-red-500" /> Allergen Warning
              </h4>
              <div className="flex gap-2 flex-wrap">
                {product.allergens.map(allergen => (
                  <span key={allergen} className="bg-red-50 text-red-700 px-4 py-1.5 rounded-full font-medium text-sm">
                    {allergen}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
