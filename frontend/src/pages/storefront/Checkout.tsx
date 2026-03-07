import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, CheckCircle } from 'lucide-react';
import heroImg from '../../assets/baklava_hero_1772920970326.png';

export default function Checkout() {
  const [method, setMethod] = useState<'delivery' | 'pickup'>('delivery');
  const [submitted, setSubmitted] = useState(false);

  const cart = [
    { id: '1', name: 'Royal Pignon Baklava', qty: 1, weight: 1, price: 75.00, image: heroImg },
  ];

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.weight * item.qty), 0);
  const deliveryFee = method === 'delivery' ? 10.00 : 0;
  const total = subtotal + deliveryFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-24 min-h-[70vh] flex flex-col items-center justify-center bg-baker-50 px-4 text-center">
        <CheckCircle className="w-24 h-24 text-baker-500 mb-6 animate-slide-up" />
        <h1 className="font-serif text-5xl text-baker-900 font-bold mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>Order Confirmed</h1>
        <p className="text-[#777777] mb-10 max-w-md mx-auto animate-slide-up text-lg" style={{ animationDelay: '0.4s' }}>
          Thank you for choosing BDI SWEETS. Your artisanal order is confirmed and will be processed immediately.
        </p>
        <Link to="/" className="btn-primary animate-slide-up shadow-lg" style={{ animationDelay: '0.6s' }}>Return Home</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Baker Style Category Header */}
      <section className="bg-baker-900 pt-32 pb-16 text-center text-white relative mb-16">
        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 z-10 relative">Checkout</h1>
        <div className="flex items-center justify-center gap-2 text-baker-500 font-medium tracking-wide text-sm z-10 relative">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-white/50">/</span>
          <span className="text-white">Secure Checkout</span>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 pb-24 max-w-6xl">
        <div className="lg:flex gap-12">

          {/* Left: Form */}
          <div className="lg:w-2/3 mb-12 lg:mb-0">
            <form onSubmit={handleSubmit} className="space-y-12">

              {/* Delivery Method */}
              <div>
                <h2 className="font-serif text-3xl font-bold text-baker-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-baker-500 text-white text-sm flex items-center justify-center font-sans tracking-wide">1</span>
                  Fulfillment Method
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className={`cursor-pointer p-6 border-2 rounded-sm flex items-start gap-4 transition-colors ${method === 'delivery' ? 'bg-baker-50 border-baker-500' : 'border-[#E0E0E0] hover:border-baker-500'}`}>
                    <input type="radio" name="method" value="delivery" checked={method === 'delivery'} onChange={() => setMethod('delivery')} className="mt-1 accent-baker-500 w-4 h-4" />
                    <div>
                      <span className="block font-bold text-baker-900 mb-1 font-serif text-xl">Local Delivery</span>
                      <span className="text-[#777777] text-sm leading-relaxed">Delivered via refrigerated transport to preserve freshness. (10.00 TND)</span>
                    </div>
                  </label>
                  <label className={`cursor-pointer p-6 border-2 rounded-sm flex items-start gap-4 transition-colors ${method === 'pickup' ? 'bg-baker-50 border-baker-500' : 'border-[#E0E0E0] hover:border-baker-500'}`}>
                    <input type="radio" name="method" value="pickup" checked={method === 'pickup'} onChange={() => setMethod('pickup')} className="mt-1 accent-baker-500 w-4 h-4" />
                    <div>
                      <span className="block font-bold text-baker-900 mb-1 font-serif text-xl">Boutique Pickup</span>
                      <span className="text-[#777777] text-sm leading-relaxed">Collect your order directly from our Medina workshop. (Free)</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Scheduling */}
              <div>
                <h2 className="font-serif text-3xl font-bold text-baker-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-baker-500 text-white text-sm flex items-center justify-center font-sans tracking-wide">2</span>
                  Schedule
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-baker-900 tracking-wide mb-2 flex items-center gap-2"><Calendar className="w-4 h-4 text-baker-500" /> Date</label>
                    <input type="date" required min={new Date(Date.now() + 86400000).toISOString().split('T')[0]} className="w-full border-2 border-[#E0E0E0] rounded-sm p-3 focus:ring-baker-500 focus:border-baker-500 bg-white text-[#777777]" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-baker-900 tracking-wide mb-2 flex items-center gap-2"><Clock className="w-4 h-4 text-baker-500" /> Time</label>
                    <select required className="w-full border-2 border-[#E0E0E0] rounded-sm p-3 focus:ring-baker-500 focus:border-baker-500 bg-white text-[#777777]">
                      <option value="">Select a time slot</option>
                      <option value="10:00-12:00">Morning (10:00 - 12:00)</option>
                      <option value="14:00-16:00">Afternoon (14:00 - 16:00)</option>
                      <option value="17:00-19:00">Evening (17:00 - 19:00)</option>
                    </select>
                  </div>
                </div>
                {method === 'pickup' && (
                  <div className="mt-6 flex items-start gap-4 text-baker-900 text-sm bg-baker-100/50 p-6 border-l-4 border-baker-500 rounded-sm">
                    <MapPin className="w-6 h-6 text-baker-500 flex-shrink-0" />
                    <p className="font-medium text-base">Pickup Address: 12 Rue de l'Artisanat, Medina, Tunis. <br /><span className="text-[#777777] font-normal text-sm">Please have your confirmation email ready.</span></p>
                  </div>
                )}
              </div>

              {/* Customer Details */}
              <div>
                <h2 className="font-serif text-3xl font-bold text-baker-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-baker-500 text-white text-sm flex items-center justify-center font-sans tracking-wide">3</span>
                  Contact
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-baker-900 mb-2">First Name</label>
                    <input type="text" required className="w-full border-2 border-[#E0E0E0] rounded-sm p-3 focus:ring-baker-500 focus:border-baker-500 bg-white" placeholder="Youssef" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-baker-900 mb-2">Last Name</label>
                    <input type="text" required className="w-full border-2 border-[#E0E0E0] rounded-sm p-3 focus:ring-baker-500 focus:border-baker-500 bg-white" placeholder="Ben Ali" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-baker-900 mb-2">Email Address</label>
                    <input type="email" required className="w-full border-2 border-[#E0E0E0] rounded-sm p-3 focus:ring-baker-500 focus:border-baker-500 bg-white" placeholder="youssef@example.com" />
                  </div>
                  {method === 'delivery' && (
                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-baker-900 mb-2">Delivery Address</label>
                      <textarea required rows={3} className="w-full border-2 border-[#E0E0E0] rounded-sm p-3 focus:ring-baker-500 focus:border-baker-500 bg-white" placeholder="123 Avenue Habib Bourguiba, Tunis"></textarea>
                    </div>
                  )}
                </div>
              </div>

              <button type="submit" className="btn-primary w-full text-lg py-4 shadow-lg">Confirm Order & Pay</button>
            </form>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-baker-900 text-white rounded-sm p-8 sticky top-28 shadow-xl">
              <h2 className="font-serif text-2xl font-bold mb-6 border-b border-white/20 pb-4">Order Summary</h2>

              <div className="space-y-6 mb-8">
                {cart.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-20 h-20 bg-white rounded-sm flex-shrink-0 p-1">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-sm" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg leading-tight mb-2">{item.name}</h4>
                      <p className="text-sm text-white/50 mb-1">{item.weight} kg x {item.qty}</p>
                      <p className="text-baker-500 font-bold">${(item.price * item.weight * item.qty).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/20 pt-6 space-y-4 mb-6">
                <div className="flex justify-between text-white/70">
                  <span>Subtotal</span>
                  <span className="text-white">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Fulfillment ({method})</span>
                  <span className="text-white">${deliveryFee.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-baker-500 pt-6 flex justify-between items-center bg-baker-800 -mx-8 px-8 pb-8 -mb-8 rounded-b-sm">
                <span className="font-serif text-2xl font-bold">Total</span>
                <span className="font-sans text-3xl font-bold text-baker-500">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
