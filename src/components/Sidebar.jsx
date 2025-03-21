import React from "react";
import { NavLink } from "react-router-dom";
import { FaSquarePlus } from "react-icons/fa6";
import { FaListAlt } from "react-icons/fa";
import { MdFactCheck } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";

function Sidebar({ token, setToken }) {
  return (
    <div className="max-sm:flex-center max-xs:pb-3 rounded-xl bg-white pb-3 mb-3 sm:w-1/5 sm:min-h-screen pl-6 lg:pl-22 sm:pr-3">
      <div className="flex max-sm:items-center sm:flex-col pt-5">
        <div className="flex sm:flex-col gap-x-5 gap-y-8 sm:pt-10">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "active-link flex-start"
                : "flex-start gap-x-2 p-5 font-bold text-[15px] text-blue-500 cursor-pointer max-w-60 h-10 rounded-2xl"
            }
          >
            <FaSquarePlus className="text-lg" />
            <div className="hidden lg:flex">Add Items</div>
          </NavLink>
          <NavLink
            to={"/list"}
            className={({ isActive }) =>
              isActive
                ? "active-link flex-start"
                : "flex-start gap-x-2 p-5 font-bold text-[15px] text-blue-500 cursor-pointer max-w-60 h-10 rounded-2xl"
            }
          >
            <FaListAlt className="text-lg" />
            <div className="hidden lg:flex">List Items</div>
          </NavLink>
          <NavLink
            to={"/orders"}
            className={({ isActive }) =>
              isActive
                ? "active-link flex-start"
                : "flex-start gap-x-2 p-5 font-bold text-[15px] text-blue-500 cursor-pointer max-w-60 h-10 rounded-2xl"
            }
          >
            <MdFactCheck className="text-lg" />
            <div className="hidden lg:flex">Orders</div>
          </NavLink>
        </div>
        {/* Logout Btn */}
        <div className="max-sm:ml-5 sm:mt-80">
          {token && (
            <button onClick={()=>setToken("")}className="flex-start gap-x-2 p-5 font-bold text-[15px] cursor-pointer max-w-60 h-10 rounded-xl">
              <BiLogOut className="text-lg text-red-600" />
              <div className="hidden lg:flex ">Logout</div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
