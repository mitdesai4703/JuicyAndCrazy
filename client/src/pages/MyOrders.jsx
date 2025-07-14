import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { axios, user } = useAppContext();


  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';
  const currency = import.meta.env.VITE_CURRENCY || '₹';

  const fetchMyOrders = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${BACKEND_URL}/api/order/user`, {
        withCredentials: true,
      });
      if (data.success) {
        setMyOrders(data.orders);
      } else {
        console.warn("API success false:", data.message);
      }
    } catch (error) {
      console.error('Failed to fetch orders:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchMyOrders();
    }
  }, [user]);

  return (
    <section className="min-h-screen px-6 sm:px-16 py-12 bg-[#FFFCE8] text-[#003B2F]">
      <div className="flex flex-col items-start sm:items-end w-full mb-8">
        <h1 className="text-2xl sm:text-3xl font-semibold">My Orders</h1>
        <div className="w-16 h-1 mt-1 bg-red-400 rounded-full" />
      </div>

      {loading ? (
        <p className="text-gray-500">Loading your orders...</p>
      ) : myOrders.length === 0 ? (
        <p className="text-gray-500">No orders found.</p>
      ) : (
        myOrders.map((order, index) => (
          <div key={order._id || index} className="border border-gray-300 rounded-xl mb-10 bg-white shadow-sm">
            <div className="p-4 border-b text-sm text-gray-600 flex flex-col md:flex-row md:justify-between gap-2">
              <p><strong>Order ID:</strong> {order._id}</p>
              <p><strong>Payment:</strong> {order.paymentType}</p>
              <p><strong>Total:</strong> {currency}{order.amount}</p>
            </div>

            {order.items.map((item, idx) => (
              <div
                key={`${order._id}-${idx}`}
                className={`flex flex-col md:flex-row justify-between items-start md:items-center p-4 ${
                  order.items.length !== idx + 1 ? 'border-b' : ''
                }`}
              >
                <div className="flex items-start md:items-center gap-4 mb-4 md:mb-0 w-full md:w-2/3">
                  <div className="bg-yellow-100 p-2 rounded-lg flex items-center justify-center w-20 h-20">
                    <img
                      src={item.product.image[0]}
                      alt={item.product.name}
                      className="object-contain h-full w-full"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-medium text-[#003B2F]">{item.product.name}</h2>
                    <p className="text-sm text-gray-500">Category: {item.product.category}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-1 md:items-end text-sm text-gray-600 w-full md:w-1/3 md:text-right">
                  <p><strong>Quantity:</strong> {item.quantity || 1}</p>
                  <p><strong>Status:</strong> {order.status}</p>
                  <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
                  <p className="text-red-500 text-base font-semibold mt-2">
                    {currency}{item.product.offerPrice * item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))
      )}
    </section>
  );
};

export default MyOrders;
