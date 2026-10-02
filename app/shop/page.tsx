export default function ShopPage() {
  const products = [
    { id: 1, name: 'Minimalist Watch', price: 199, category: 'Accessories', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=500' },
    { id: 2, name: 'Leather Wallet', price: 89, category: 'Accessories', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=500' },
    { id: 3, name: 'Wireless Earbuds', price: 149, category: 'Electronics', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=500' },
    { id: 4, name: 'Cotton T-Shirt', price: 45, category: 'Fashion', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=500' },
    { id: 5, name: 'Smart Speaker', price: 120, category: 'Electronics', image: 'https://images.unsplash.com/photo-1589492477829-56f2 ধরে-6f8a?auto=format&fit=crop&q=80&w=500' },
    { id: 6, name: 'Designer Sunglasses', price: 210, category: 'Accessories', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=500' },
    { id: 7, name: 'Canvas Backpack', price: 75, category: 'Accessories', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=500' },
    { id: 8, name: 'Wool Sweater', price: 110, category: 'Fashion', image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=500' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 space-y-8">
          <div>
            <h3 className="font-bold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><label className="flex items-center gap-2 cursor-pointer hover:text-primary"><input type="checkbox" /> All Products</label></li>
              <li><label className="flex items-center gap-2 cursor-pointer hover:text-primary"><input type="checkbox" /> Electronics</label></li>
              <li><label className="flex items-center gap-2 cursor-pointer hover:text-primary"><input type="checkbox" /> Fashion</label></li>
              <li><label className="flex items-center gap-2 cursor-pointer hover:text-primary"><input type="checkbox" /> Accessories</label></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Price Range</h3>
            <input type="range" className="w-full accent-primary" />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>$0</span>
              <span>$1000</span>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8">
            <p className="text-sm text-gray-500">{products.length} products found</p>
            <select className="border p-2 rounded text-sm">
              <option>Sort by: Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden mb-4 relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <a href={`/product/${product.id}`} className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">Quick View</span>
                  </a>
                </div>
                <h3 className="font-medium mb-1">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{product.category}</p>
                <p className="font-bold">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
