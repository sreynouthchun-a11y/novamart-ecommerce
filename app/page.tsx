export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gray-100 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd607ca?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Elevate Your Style</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-700">
            Discover our curated collection of premium essentials designed for the modern individual.
          </p>
          <a href="/shop" className="bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors">
            Shop Collection
          </a>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Electronics', 'Fashion', 'Home & Living'].map((cat) => (
            <div key={cat} className="group relative h-64 overflow-hidden rounded-2xl cursor-pointer">
              <img 
                src={`https://images.unsplash.com/photo-1${Math.random()}?auto=format&fit=crop&q=80&w=800`} 
                alt={cat} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{cat}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold">Featured Products</h2>
              <p className="text-gray-500">Our most loved pieces this season</p>
            </div>
            <a href="/shop" className="text-primary font-medium border-b-2 border-primary">View All</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group">
                <div className="aspect-square bg-white rounded-xl overflow-hidden mb-4 relative">
                  <img 
                    src={`https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=500`} 
                    alt="Product" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <button className="absolute bottom-4 right-4 p-2 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    ❤️
                  </button>
                </div>
                <h3 className="font-medium mb-1">Premium Product {i}</h3>
                <p className="text-gray-500 text-sm mb-2">Essential Collection</p>
                <p className="font-bold">$129.00</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
