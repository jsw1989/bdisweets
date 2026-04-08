export default function ComingSoon() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container relative">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-[#fdf9f4]/70 dark:bg-[#1c1c19]/70 backdrop-blur-xl flex justify-center items-center px-8 py-6 max-w-full">
        <div className="text-2xl md:text-3xl font-serif font-bold tracking-widest text-[#775a19] dark:text-[#c5a059] m-0">BDI SWEETS</div>
      </nav>

      <main className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img alt="Signature Tunisian Baklava" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8T0EGw1o9nqfNQmoevcp-p_OVHssnAwCW2VgCLv_GzEtzcI3wSiQ1mucgO6ARlZoImU2fQrZhSnHeHPFmqze_pyMQUA1ydx9Eu0RfLXj1v8Q02WZo9UvNzF8aLaiePyQNNjePakhgLAkzDq_meXDhWltReSlkXeGcjFCRlMapItXbBmGbEHRbYEGaR6BC4FkW__yUh1adaH9QVEsnLtH8_q2tR_997xLrBMXLDOB8mKL-EuEQH8BgDABTbzLnTOl8RdOq96YHmxZI" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, rgba(28, 28, 25, 0.2) 0%, rgba(28, 28, 25, 0.6) 100%)' }}></div>
        </div>

        {/* Content Canvas */}
        <section className="relative z-10 w-full max-w-5xl px-6 py-24 flex flex-col items-center text-center">
          <div className="mb-8 animate-fade-in">
            <span className="font-label text-[0.75rem] uppercase tracking-[0.2em] text-primary-fixed bg-on-surface/20 px-4 py-2 backdrop-blur-md rounded-full">
              Handcrafted in Tunisia | Since 1924
            </span>
          </div>

          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-surface-container-lowest leading-tight tracking-tight mb-6">
            Artisanal Excellence,<br />
            <span className="italic font-normal text-primary-fixed">Arriving Soon.</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-surface-variant max-w-2xl mb-16 leading-relaxed">
            Experience the golden taste of Tunisia. We're crafting something sweet for our grand opening.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-20 w-full max-w-3xl">
            <div className="bg-surface-container-lowest/10 backdrop-blur-xl p-8 rounded-lg border border-outline-variant/20 flex flex-col items-center">
              <span className="font-headline text-4xl md:text-5xl text-primary-fixed mb-2">12</span>
              <span className="font-label text-[0.65rem] uppercase tracking-widest text-surface-variant">Days</span>
            </div>
            <div className="bg-surface-container-lowest/10 backdrop-blur-xl p-8 rounded-lg border border-outline-variant/20 flex flex-col items-center">
              <span className="font-headline text-4xl md:text-5xl text-primary-fixed mb-2">08</span>
              <span className="font-label text-[0.65rem] uppercase tracking-widest text-surface-variant">Hours</span>
            </div>
            <div className="bg-surface-container-lowest/10 backdrop-blur-xl p-8 rounded-lg border border-outline-variant/20 flex flex-col items-center">
              <span className="font-headline text-4xl md:text-5xl text-primary-fixed mb-2">45</span>
              <span className="font-label text-[0.65rem] uppercase tracking-widest text-surface-variant">Minutes</span>
            </div>
            <div className="bg-surface-container-lowest/10 backdrop-blur-xl p-8 rounded-lg border border-outline-variant/20 flex flex-col items-center">
              <span className="font-headline text-4xl md:text-5xl text-primary-fixed mb-2">19</span>
              <span className="font-label text-[0.65rem] uppercase tracking-widest text-surface-variant">Seconds</span>
            </div>
          </div>

          <form className="w-full max-w-md flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="relative flex-grow">
              <input className="w-full bg-surface-container-lowest/5 border-b border-outline-variant/50 text-surface-container-lowest px-4 py-4 focus:outline-none focus:border-primary-fixed transition-colors placeholder:text-outline-variant/60" placeholder="Email Address" type="email" />
            </div>
            <button className="bg-primary text-on-primary font-label text-sm uppercase tracking-widest px-10 py-4 hover:bg-primary/90 transition-all active:scale-95 whitespace-nowrap" type="submit">
              Notify Me
            </button>
          </form>
        </section>
      </main>

      {/* Aesthetic Decorative Element */}
      <div className="hidden lg:block absolute bottom-24 right-12 z-20 w-64 h-80 overflow-hidden rounded-lg shadow-2xl rotate-3 translate-y-12">
        <img alt="Patisserie Detail" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPDaIw8lYZ20SRjCdLlwP3isONYX7s_bD136cZMcgn3F3GElz2nFjDn8428xNwg_Fwc-qgUbPE-xs3nDSS68Cv2quzXSdchY_nbXj8X9KiX1NvqWijdfsfG_BKSf-PlzZa7zDirjghwqxKpU8GJzWAm0ZXRuCoOpyW5ov361CEb8TtRNCZa3inSbEghsy0PQpp1LM98lDItG7v8Xi7b_h3xAyFCbIrmIunMCuMQ1f1hIRU1GVG9N85iokhHGmZP4Y8GckjhLDWKjYu" />
      </div>

      <footer className="w-full py-12 px-8 bg-[#fdf9f4] dark:bg-[#1c1c19] flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 relative z-10">
        <div className="text-lg font-serif text-[#775a19]">BDIDWEETS</div>
        <div className="text-[#7c5730] dark:text-[#d1c5b4] font-['Manrope'] text-[0.75rem] uppercase tracking-widest">
          © 2026 Maison de Pâtisserie. Artisanal Excellence.
        </div>
        <div className="flex space-x-8">
          <a className="text-[#7c5730] dark:text-[#d1c5b4] hover:opacity-70 transition-opacity font-['Manrope'] text-[0.75rem] uppercase tracking-widest" href="#">Instagram</a>
          <a className="text-[#7c5730] dark:text-[#d1c5b4] hover:opacity-70 transition-opacity font-['Manrope'] text-[0.75rem] uppercase tracking-widest" href="#">Facebook</a>
          <a className="text-[#7c5730] dark:text-[#d1c5b4] hover:opacity-70 transition-opacity font-['Manrope'] text-[0.75rem] uppercase tracking-widest" href="#">Pinterest</a>
          <a className="text-[#7c5730] dark:text-[#d1c5b4] hover:opacity-70 transition-opacity font-['Manrope'] text-[0.75rem] uppercase tracking-widest" href="#">Contact</a>
        </div>
      </footer>
    </div>
  );
}
