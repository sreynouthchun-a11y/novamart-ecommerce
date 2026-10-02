export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-12">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <section className="space-y-4">
            <h2 className="text-xl font-bold">Shipping Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="border p-3 rounded-lg" />
              <input type="text" placeholder="Last Name" className="border p-3 rounded-lg" />
              <input type="email" placeholder="Email Address" className="border p-3 rounded-lg md:col-span-2" />
              <input type="text" placeholder="Address" className="border p-3 rounded-lg md:col-span-2" />
              <input type="text" placeholder="City" className="border p-3 rounded-lg" />
              <input type="text" placeholder="Zip Code" className="border p-3 rounded-lg" />
            </div>
          </section>
          <section className="space-y-4">
            <h2 className="text-xl font-bold">Payment Method</h2>
            <div className="border p-4 rounded-lg flex items-center gap-4 cursor-pointer border-primary bg-primary/5">
              <input type="radio" checked />
              <span>Credit Card</span>
            </div>
            <div className="border p-4 rounded-lg flex items-center gap-4 cursor-pointer">
              <input type="radio" />
              <span>PayPal</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <input type="text" placeholder="Card Number" className="border p-3 rounded-lg" />
              <input type="text" placeholder="Expiry Date" className="border p-3 rounded-lg" />
              <input type="text" placeholder="CVC" className="border p-3 rounded-lg" />
            </div>
          </section>
        </div>
        <div className="bg-gray-50 p-8 rounded-2xl h-fit">
          <h2 className="text-xl font-bold mb-6">Order Summary</h2>
          <div className="space-y-4 mb-6">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>$0.00</span>
            </div>
            <div className="border-t pt-4 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>$0.00</span>
            </div>
          </div>
          <button className="w-full bg-primary text-white py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors">
            Complete Purchase
          </button>
        </div>
      </div>
    </div>
  )
}
