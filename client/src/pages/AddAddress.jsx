import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';


const InputField = ({ type, placeholder, name, handleChange, address }) => (
  <input
    type={type}
    name={name}
    value={address[name] || ""}
    placeholder={placeholder}
    onChange={handleChange}
    required
    className="w-full px-3 py-2.5 border border-gray-300 rounded outline-none text-gray-600 focus:border-red-400 transition"
  />
);

const AddAddress = () => {
  const { axios, user, navigate } = useAppContext();

  const [address, setAddress] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/address/add', { address });
      if (data.success) {
        toast.success(data.message);
        navigate('/cart');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (!user) navigate('/cart');
  }, [user]);

  return (
    <section className="min-h-screen px-6 sm:px-16 py-12 bg-[#FFFCE8] text-[#003B2F]">
      <h1 className="text-2xl md:text-3xl font-semibold mb-8">
        Add Shipping <span className="text-red-500">Address</span>
      </h1>

      <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
    
        <div className="w-full md:w-1/2">
          <form onSubmit={onSubmitHandler} className="space-y-4 text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField name="firstName" type="text" placeholder="First Name" handleChange={handleChange} address={address} />
              <InputField name="lastName" type="text" placeholder="Last Name" handleChange={handleChange} address={address} />
            </div>

            <InputField name="email" type="email" placeholder="Email Address" handleChange={handleChange} address={address} />
            <InputField name="street" type="text" placeholder="Street Address" handleChange={handleChange} address={address} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField name="city" type="text" placeholder="City" handleChange={handleChange} address={address} />
              <InputField name="state" type="text" placeholder="State" handleChange={handleChange} address={address} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField name="zipcode" type="number" placeholder="Zip Code" handleChange={handleChange} address={address} />
              <InputField name="country" type="text" placeholder="Country" handleChange={handleChange} address={address} />
            </div>

            <InputField name="phone" type="text" placeholder="Phone Number" handleChange={handleChange} address={address} />

            <button type="submit" className="w-full mt-6 bg-[#003B2F] text-white py-3 rounded hover:bg-[#003b2fd3] transition uppercase cursor-pointer">
              Save Address
            </button>
          </form>
        </div>

       
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={assets.add_address_iamge}
            alt="Add Address"
            className="max-w-full h-auto md:mr-12"
          />
        </div>
      </div>
    </section>
  );
};

export default AddAddress;
