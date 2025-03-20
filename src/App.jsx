import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import Login from "./components/Login";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';

export const backend_url = import.meta.env.VITE_BACKEND_URL;

function App() {
  const [token, setToken] = useState("");
  console.log(token);
  return (
    <main>
      <ToastContainer/>
      {token === "" ? (
        <Login setToken = {setToken}/>
      ) : (
        <div className="bg-slate-900/5 text-slate-700">
          <Header />
          <div className="mx-auto max-w-[1440px] flex flex-col sm:flex-row mt-8 sm:mt-4">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Add />} />
              <Route path="/list" element={<List />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
