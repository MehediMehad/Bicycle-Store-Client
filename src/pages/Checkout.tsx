import { useEffect, useState } from "react";
import { ShoppingCart, MapPin, User } from "lucide-react";
import { useParams } from "react-router-dom";
import { useGetBicycleQuery } from "../redux/features/bicycle/bicycleApi";
import { useAppSelector } from "../redux/hooks";
import { useCreateOrderMutation } from "../redux/features/order/orderApi";
import { useCurrentUser } from "../redux/features/auth/authSlice";
import { toast } from "sonner";

const CheckoutPage = () => {
  const user = useAppSelector(useCurrentUser);

  const [createOrder, { isLoading, isSuccess, data, isError, error }] =
    useCreateOrderMutation();
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

  const { id } = useParams();
  const { data: bicycleData, isFetching: isFetchingBicycle } =
    useGetBicycleQuery(id);
  const bicycle = bicycleData?.data;

  const handleInputChange = async (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //     return cartItems
  //       .reduce((total, item) => total + item.price * item.quantity, 0)
  //       .toFixed(2);
  //   };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Simulate order processing
    const orderData = {
      email: user?.userEmail,
      product: id,
      quantity: 1,
      totalPrice: bicycle?.price,
    };
    console.log(">>>>", orderData);

    await createOrder(orderData);
  };

  if (isFetchingBicycle) {
    <p>isFetchingBicycle</p>;
  }

  const toastId = "cart";
  useEffect(() => {
    if (isLoading) toast.loading("Processing ...", { id: toastId });

    if (isSuccess) {
      toast.success(data?.message, { id: toastId });
      if (data?.data) {
        setTimeout(() => {
          window.location.href = data.data;
        }, 1000);
      }
    }

    if (isError) toast.error(JSON.stringify(error), { id: toastId });
  }, [data?.data, data?.message, error, isError, isLoading, isSuccess]);

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
            {/* Cart */}
            <div className="flex items-center justify-between border-b py-4">
              <div className="flex items-center">
                <img
                  src={bicycle?.image}
                  alt={bicycle?.name}
                  className="w-16 h-16 rounded-lg mr-4"
                />
                <div>
                  <p className="font-semibold">{bicycle?.name}</p>
                  <p className="font-medium mt-1">Brand: {bicycle?.brand}</p>
                  <p className="font-bold">${bicycle?.price.toFixed(2)}</p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex justify-between mb-2">
                <p>Delivery</p>
                <p>Free</p>
              </div>
              {/* <div className="flex justify-between mb-2">
                <p>Tax</p>
                <p>$45.00</p>
              </div> */}
              <div className="flex justify-between font-bold text-xl border-t pt-4">
                <p>Total</p>
                {/* <p>${(parseFloat(calculateTotal()) + 45).toFixed(2)}</p> */}
                <p>${bicycle?.price}</p>
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
              </div>

              {/* Shipping Address */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-green-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-800"> Address</h2>
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
              {/* <div className="mb-8">
                <div className="flex items-center mb-4">
                  <CreditCard className="w-6 h-6 text-purple-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-800">
                    Payment Method
                  </h2>
                </div>
                <div className="grid md:grid-cols-1 gap-4 mb-4">
                  <button
                    type="button"
                    onClick={() => setSelectedPayment("credit")}
                    className={`flex items-center justify-center p-4 border rounded-lg ${
                      selectedPayment === "credit"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300"
                    }`}
                  >
                    <CreditCard className="mr-2 bg" /> Credit Card
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
              </div> */}

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
