import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import toast from "react-hot-toast";

const Cart = () => {
  const {
    products,
    currency,
    cartItems,
    removeFromCart,
    getCartCount,
    updateCartItem,
    navigate,
    getCartAmount,
    axios,
    user,
    setCartItems,
  } = useAppContext();

  const [cartArray, setCartArray] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [showAddress, setShowAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [paymentOption, setPaymentOption] = useState("COD");

  useEffect(() => {
    if (products.length > 0 && cartItems) {
      const tempArray = [];
      for (const key in cartItems) {
        const product = products.find((item) => item._id === key);
        product.quantity = cartItems[key];
        tempArray.push(product);
      }
      setCartArray(tempArray);
    }
  }, [products, cartItems]);

  useEffect(() => {
    if (user) {
      (async () => {
        try {
          const { data } = await axios.get("/api/address/get");
          if (data.success) {
            setAddresses(data.addresses);
            if (data.addresses.length > 0) {
              setSelectedAddress(data.addresses[0]);
            }
          } else {
            toast.error(data.message);
          }
        } catch (err) {
          toast.error(err.message);
        }
      })();
    }
  }, [user]);

  const placeOrder = async () => {
    try {
      if (!selectedAddress) return toast.error("Please select an address");

      const orderPayload = {
        userId: user._id,
        items: cartArray.map((item) => ({
          product: item._id,
          quantity: item.quantity,
        })),
        address: selectedAddress._id,
      };

      const endpoint = paymentOption === "COD" ? "/api/order/cod" : "/api/order/stripe";
      const { data } = await axios.post(endpoint, orderPayload);

      if (data.success) {
        toast.success(data.message);
        setCartItems({});
        if (paymentOption === "Online") {
          window.location.replace(data.url);
        } else {
          navigate("/my-orders");
        }
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  if (!products.length || !cartItems) return null;

  return (
    <section className="min-h-screen px-6 sm:px-16 py-12 bg-[#FFFCE8] text-[#003B2F]">
      <div className="flex flex-col lg:flex-row gap-8">
       
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-6">
            Your Cart <span className="text-sm text-red-500">({getCartCount()} Items)</span>
          </h1>

          <div className="space-y-6">
            {cartArray.map((product, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center justify-between bg-white p-4 rounded shadow border border-gray-200"
              >
           
                <div className="flex items-center gap-4 w-full md:w-2/3">
                  <img
                    onClick={() => {
                      navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
                      scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    src={product.image[0]}
                    alt={product.name}
                    className="w-24 h-24 object-contain border rounded cursor-pointer"
                  />
                  <div>
                    <h2 className="font-semibold text-lg">{product.name}</h2>
                    <p className="text-gray-500 text-sm">Weight: {product.weight || "N/A"}</p>
                    <div className="flex items-center mt-2 text-sm gap-2">
                      <span>Qty:</span>
                      <select
                        value={cartItems[product._id]}
                        onChange={(e) => updateCartItem(product._id, Number(e.target.value))}
                        className="border rounded px-2 py-1"
                      >
                        {Array.from(
                          { length: Math.max(9, cartItems[product._id]) },
                          (_, i) => i + 1
                        ).map((val) => (
                          <option key={val} value={val}>
                            {val}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

            
                <div className="flex flex-col items-center mt-4 md:mt-0">
                  <p className="text-lg font-medium">
                    {currency}
                    {product.offerPrice * product.quantity}
                  </p>
                  <button
                    onClick={() => removeFromCart(product._id)}
                    className="text-red-500 text-sm mt-2 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              navigate("/products");
              scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="mt-10 inline-flex items-center gap-2 text-red-500 font-medium hover:underline"
          >
            <img src={assets.arrow_right_icon_colored} alt="arrow" className="w-4 h-4" />
            Continue Shopping
          </button>
        </div>

     
        <div className="max-w-sm w-full bg-white p-6 rounded shadow border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

     
          <div className="mb-6">
            <p className="text-sm font-medium mb-1">Delivery Address</p>
            <div className="relative">
              <p className="text-sm text-gray-600">
                {selectedAddress
                  ? `${selectedAddress.street}, ${selectedAddress.city}, ${selectedAddress.state}, ${selectedAddress.country}`
                  : "No address selected"}
              </p>
              <button
                onClick={() => setShowAddress(!showAddress)}
                className="text-red-500 text-sm mt-1 hover:underline"
              >
                Change
              </button>

              {showAddress && (
                <div className="absolute z-10 bg-white border rounded mt-2 w-full shadow">
                  {addresses.map((addr, i) => (
                    <p
                      key={i}
                      onClick={() => {
                        setSelectedAddress(addr);
                        setShowAddress(false);
                      }}
                      className="px-3 py-2 hover:bg-gray-100 text-sm cursor-pointer"
                    >
                      {addr.street}, {addr.city}, {addr.state}, {addr.country}
                    </p>
                  ))}
                  <p
                    onClick={() => navigate("/add-address")}
                    className="px-3 py-2 text-center text-red-500 hover:bg-red-50 cursor-pointer"
                  >
                    Add New Address
                  </p>
                </div>
              )}
            </div>
          </div>

        
          <div className="mb-4">
            <p className="text-sm font-medium mb-1">Payment Method</p>
            <select
              value={paymentOption}
              onChange={(e) => setPaymentOption(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded"
            >
              <option value="COD">Cash on Delivery</option>
              <option value="Online">Online Payment</option>
            </select>
          </div>

      
          <hr className="my-4" />
          <div className="text-sm text-gray-700 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>
                {currency}
                {getCartAmount()}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (2%)</span>
              <span>
                {currency}
                {(getCartAmount() * 2) / 100}
              </span>
            </div>
            <div className="flex justify-between font-semibold pt-2 border-t">
              <span>Total</span>
              <span>
                {currency}
                {(getCartAmount() * 102) / 100}
              </span>
            </div>
          </div>

      
          <button
            onClick={placeOrder}
            className="w-full mt-6 bg-[#003B2F] text-white py-3 rounded hover:bg-[#025245] transition cursor-pointer"
          >
            {paymentOption === "COD" ? "Place Order" : "Proceed to Checkout"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
