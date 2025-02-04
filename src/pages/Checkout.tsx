import { useState } from "react";
import { ShoppingCart, CreditCard, MapPin, User, Check } from "lucide-react";

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [selectedPayment, setSelectedPayment] = useState("credit");
  const [orderComplete, setOrderComplete] = useState(false);

  const cartItems = [
    {
      id: 1,
      name: "Urban Commuter Bike",
      price: 799.99,
      quantity: 1,
      image: "/api/placeholder/100/100",
    },
    {
      id: 2,
      name: "Bike Helmet",
      price: 89.99,
      quantity: 1,
      image: "/api/placeholder/100/100",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate order processing
    setTimeout(() => {
      setOrderComplete(true);
    }, 1500);
  };

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-12 rounded-2xl shadow-2xl text-center">
          <Check className="w-24 h-24 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Order Confirmed!
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for your purchase from Pedal Planet.
          </p>
          <button
            onClick={() => setOrderComplete(false)}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center mb-8">
          <ShoppingCart className="w-10 h-10 text-blue-600 mr-4" />
          <h1 className="text-4xl font-bold text-gray-800">Checkout</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="md:col-span-1 bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Order Summary
            </h2>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b py-4"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg mr-4"
                  />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-gray-500">Qty: {item.quantity}</p>
                  </div>
                </div>
                <p className="font-bold">${item.price.toFixed(2)}</p>
              </div>
            ))}
            <div className="mt-6">
              <div className="flex justify-between mb-2">
                <p>Subtotal</p>
                <p>${calculateTotal()}</p>
              </div>
              <div className="flex justify-between mb-2">
                <p>Tax</p>
                <p>$45.00</p>
              </div>
              <div className="flex justify-between font-bold text-xl border-t pt-4">
                <p>Total</p>
                <p>${(parseFloat(calculateTotal()) + 45).toFixed(2)}</p>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="md:col-span-2 bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit}>
              {/* Personal Information */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <User className="w-6 h-6 text-blue-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-800">
                    Personal Information
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border rounded-lg mt-4 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Shipping Address */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-green-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-800">
                    Shipping Address
                  </h2>
                </div>
                <input
                  type="text"
                  name="address"
                  placeholder="Street Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border rounded-lg mb-4 focus:ring-2 focus:ring-blue-500"
                />
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="Zip Code"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <CreditCard className="w-6 h-6 text-purple-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-800">
                    Payment Method
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <button
                    type="button"
                    onClick={() => setSelectedPayment("credit")}
                    className={`flex items-center justify-center p-4 border rounded-lg ${
                      selectedPayment === "credit"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300"
                    }`}
                  >
                    <CreditCard className="mr-2" /> Credit Card
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedPayment("paypal")}
                    className={`flex items-center justify-center p-4 border rounded-lg ${
                      selectedPayment === "paypal"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300"
                    }`}
                  >
                    PayPal
                  </button>
                </div>

                {selectedPayment === "credit" && (
                  <div className="grid md:grid-cols-3 gap-4">
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Card Number"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border rounded-lg col-span-2 focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      name="cvv"
                      placeholder="CVV"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      name="expiryDate"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border rounded-lg col-span-2 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#19a270] hover:bg-[#19a26d] text-white py-4 rounded-lg transition text-lg font-semibold"
              >
                Complete Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
