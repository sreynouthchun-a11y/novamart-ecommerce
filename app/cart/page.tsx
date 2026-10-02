export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-12">Your Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {/* Empty State Mock */}
          <div className="text-center py-20 border-2 border-dashed rounded-2xl">
            <p className="text-gray-500 mb-4">Your cart is currently empty.</p>
            <a href="/shop" className="bg-primary text-white px-6 py-3 rounded-full">Start Shopping</a>
          </div>
        </div>
        <div className="bg-gray-50 p-8 rounded-2xl h-fit">
          <h2 className="text-xl font-bold mb-6">Order Summary</h2>
          <div className="space-y-4 mb-6">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="border-t pt-4 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>$0.00</span>
            </div>
          </div>
          <a href="/checkout" className="block text-center bg-primary text-white py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors">
            Proceed to Checkout
          </a>
        </div>
      </div>
    </div>
  )
}
