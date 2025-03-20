import { useState } from "react";
import loginImg from "../assets/Login.png";
import axios from "axios";
import { backend_url } from "../App";
import { toast } from "react-toastify";

function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onsubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backend_url + "/api/user/admin", {
        email,
        password,
      });
      console.log(response);
      if (response.data.success) {
        setToken(response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <section className="absolute top-0 left-0 h-full w-full z-50 bg-white">
      {/* container */}
      <div className="flex h-full w-full">
        {/* form side */}
        <div className="flex w-full sm:w-1/2 items-center justify-center">
          <form
            onSubmit={onsubmitHandler}
            className="flex flex-col items-center w-[90%] sm:max-w-md m-auto gap-y-5 text-gray-800"
          >
            <div className="w-full mb-4">
              <h3 className="h3 text-[36px]">Login</h3>
            </div>

            <div className="w-full">
              <label htmlFor="email" className="font-medium text-[15px]">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                id="email"
                placeholder="Email"
                className="w-full px-3 py-2 ring-slate-900/10 rounded-lg mt-1 bg-gray-100/90"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="password" className="font-medium text-[15px]">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                id="password"
                placeholder="Password"
                className="w-full px-3 py-2 ring-slate-900/10 rounded-lg mt-1 bg-gray-100/90"
                required
              />
            </div>
            <button
              type="submit"
              className="cursor-pointer w-full font-medium text-[15px] bg-gray-800 text-white mt-5 px-7 py-[9px] rounded-lg"
            >
              Login
            </button>
          </form>
        </div>
        {/* Img side */}
        <div className="w-1/2 hidden sm:block">
          <img src={loginImg} alt="" className="object-cover h-full w-full" />
        </div>
      </div>
    </section>
  );
}

export default Login;
