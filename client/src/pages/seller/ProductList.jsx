import React from 'react'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'
import { MdDelete } from 'react-icons/md'

const ProductList = () => {
  const { products, currency, axios, fetchProducts } = useAppContext()

  // Toggle in-stock status
  const toggleStock = async (id, inStock) => {
    try {
      const { data } = await axios.post('/api/product/stock', { id, inStock })
      if (data.success) {
        fetchProducts()
        toast.success(data.message)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  // Delete product
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      const { data } = await axios.delete(`/api/product/delete/${id}`)
      if (data.success) {
        toast.success(data.message)
        fetchProducts()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll bg-[#FDF8F0]">
      <div className="w-full max-w-6xl mx-auto md:p-10 p-4">
        <h2 className="text-2xl font-semibold text-[#1B2E24] pb-6">Product Inventory</h2>

        <div className="overflow-x-auto shadow-xl rounded-xl border border-gray-200 bg-white">
          <table className="w-full text-sm md:text-base table-auto">
            <thead className="bg-[#1B2E24] text-white">
              <tr>
                <th className="text-left px-4 py-3">Product</th>
                <th className="text-left px-4 py-3">Category</th>
                <th className="text-left px-4 py-3 hidden md:table-cell">Price</th>
                <th className="text-center px-4 py-3">Stock</th>
                <th className="text-right px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {products.map((product) => (
                <tr
                  key={product._id}
                  className="border-t hover:bg-gray-50 transition duration-150"
                >
                  <td className="px-4 py-4 flex items-center gap-3">
                    <img
                      src={product.image[0]}
                      alt={product.name}
                      className="w-12 h-12 rounded border object-contain"
                    />
                    <span className="truncate">{product.name}</span>
                  </td>
                  <td className="px-4 py-4 capitalize">{product.category}</td>
                  <td className="px-4 py-4 hidden md:table-cell">
                    {currency}
                    {product.offerPrice}
                  </td>
                  <td className="px-4 py-4 text-center">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        onChange={() => toggleStock(product._id, !product.inStock)}
                        checked={product.inStock}
                        type="checkbox"
                        className="sr-only peer"
                      />
                      <div className="w-12 h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition-colors duration-300 relative">
                        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ease-in-out peer-checked:translate-x-6"></div>
                      </div>
                      <span className="ml-3 text-sm font-medium">
                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </label>
                  </td>
                  <td className="px-4 py-4 text-right">
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="text-red-600 hover:text-red-800 transition"
                      title="Delete Product"
                    >
                      <MdDelete size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {products.length === 0 && (
            <p className="text-center py-8 text-gray-500">No products available.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductList
