import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

const Login = () => {
  const { setUser, axios, navigate } = useAppContext();

  const [state, setState] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(`/api/user/${state}`, {
        name,
        email,
        password,
      });

      if (data.success) {
        setUser(data.user); 
        localStorage.setItem("user", JSON.stringify(data.user)); 
        toast.success(`${state === "login" ? "Logged in" : "Account created"} successfully`);
        navigate("/"); 
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="w-full flex items-center justify-center min-h-screen px-4 bg-gradient-to-br from-[#003B2F] to-[#1B2E24]">
      <form
        onSubmit={onSubmitHandler}
        className="bg-[#003B2F] text-[#EEEBDD] border border-[#D4AF37]/40 p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-3xl font-semibold text-center text-[#D4AF37] mb-3">
          {state === "login" ? "User Login" : "Create Account"}
        </h2>
        <p className="text-sm text-center text-[#EEEBDD]/70 mb-6">
          {state === "login" ? "Welcome back!" : "Join us today!"}
        </p>

        {state === "register" && (
          <div className="mb-4 flex items-center gap-3 w-full px-5 py-3 rounded-lg bg-[#1B2E24] border border-[#D4AF37]/30">
            <FaUser className="text-[#D4AF37]" />
            <input
              type="text"
              required
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-transparent outline-none text-[#EEEBDD] placeholder-[#EEEBDD]/70 w-full"
            />
          </div>
        )}

        <div className="mb-4 flex items-center gap-3 w-full px-5 py-3 rounded-lg bg-[#1B2E24] border border-[#D4AF37]/30">
          <FaEnvelope className="text-[#D4AF37]" />
          <input
            type="email"
            required
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent outline-none text-[#EEEBDD] placeholder-[#EEEBDD]/70 w-full"
          />
        </div>

        <div className="mb-4 flex items-center gap-3 w-full px-5 py-3 rounded-lg bg-[#1B2E24] border border-[#D4AF37]/30">
          <FaLock className="text-[#D4AF37]" />
          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-transparent outline-none text-[#EEEBDD] placeholder-[#EEEBDD]/70 w-full"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-[#D4AF37] text-[#1A1A1A] font-semibold text-lg hover:opacity-90 transition"
        >
          {state === "login" ? "Login" : "Create Account"}
        </button>

        <p className="text-center text-sm mt-5 text-[#EEEBDD]/70">
          {state === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            onClick={() => setState(state === "login" ? "register" : "login")}
            className="text-[#D4AF37] cursor-pointer underline hover:opacity-80"
          >
            {state === "login" ? "Sign up" : "Login here"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
