import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const { axios } = useAppContext();

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';
  const currency = import.meta.env.VITE_CURRENCY || '₹';

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${BACKEND_URL}/api/order/seller`, {
        withCredentials: true,
      });
      if (data.success) {
        setOrders(data.orders);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleStatusUpdate = async (orderId, newStatus) => {
    try {
      const { data } = await axios.put(`${BACKEND_URL}/api/order/update-status/${orderId}`, {
        status: newStatus,
      });
      if (data.success) {
        toast.success("Status updated");
        fetchOrders();
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleMarkAsPaid = async (orderId) => {
    try {
      const { data } = await axios.put(`${BACKEND_URL}/api/order/mark-paid/${orderId}`);
      if (data.success) {
        toast.success("Marked as paid");
        fetchOrders();
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleDelete = async (orderId) => {
    if (!confirm("Are you sure you want to delete this order?")) return;
    try {
      const { data } = await axios.delete(`${BACKEND_URL}/api/order/delete/${orderId}`);
      if (data.success) {
        toast.success("Order deleted");
        fetchOrders();
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll">
      <div className="md:p-10 p-4 space-y-4">
        <h2 className="text-2xl font-semibold text-[#003B2F]">Orders List</h2>

        {loading ? (
          <p className="text-gray-500">Loading orders...</p>
        ) : orders.length === 0 ? (
          <p className="text-gray-500">No orders found.</p>
        ) : (
          orders.map((order, index) => (
            <div
              key={index}
              className="flex flex-col md:items-center md:flex-row gap-5 justify-between p-5 max-w-4xl rounded-md border border-gray-300 bg-white shadow-sm"
            >
              {/* Order Items */}
              <div className="flex gap-5 max-w-80">
                <div>
                  {order.items.map((item, idx) => (
                    <div key={idx} className="flex flex-col">
                      <p className="font-medium text-[#003B2F]">
                        {item.product.name}{' '}
                        <span className="text-red-500 font-semibold">× {item.quantity}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Address Info */}
              <div className="text-sm md:text-base text-black/70">
                <p className="text-black font-medium">
                  {order.address.firstName} {order.address.lastName}
                </p>
                <p>{order.address.street}, {order.address.city}</p>
                <p>{order.address.state}, {order.address.zipcode}, {order.address.country}</p>
                <p>{order.address.phone}</p>
              </div>

              {/* Amount */}
              <p className="font-semibold text-lg text-[#1B2E24] my-auto">
                {currency}{order.amount}
              </p>

              {/* Payment & Status Info */}
              <div className="flex flex-col text-sm md:text-base text-black/60">
                <p>Method: {order.paymentType}</p>
                <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                <p>
                  Payment:{' '}
                  <span className={order.isPaid ? 'text-green-600' : 'text-red-500'}>
                    {order.isPaid ? 'Paid' : 'Pending'}
                  </span>
                </p>
                <p>
                  Status:{' '}
                  <span className="text-blue-600 font-semibold">{order.status}</span>
                </p>
              </div>

              {/* Admin Controls */}
              <div className="flex flex-col gap-2 text-sm">
                {/* Status Dropdown */}
                <select
                  className="border rounded px-2 py-1"
                  value={order.status}
                  onChange={(e) => handleStatusUpdate(order._id, e.target.value)}
                >
                  {['Order Placed', 'Processing', 'Shipped', 'Delivered', 'Cancelled'].map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>

                {/* Mark as Paid */}
                {!order.isPaid && (
                  <button
                    onClick={() => handleMarkAsPaid(order._id)}
                    className="bg-green-500 text-white rounded px-3 py-1"
                  >
                    Mark as Paid
                  </button>
                )}

                {/* Delete */}
                <button
                  onClick={() => handleDelete(order._id)}
                  className="bg-red-500 text-white rounded px-3 py-1"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;
