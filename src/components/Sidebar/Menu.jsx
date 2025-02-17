import React from "react";
import { NavLink } from "react-router-dom";

function Menu({ menu }) {
  return (
    <li key={menu.id} className="">
      <NavLink
        className={({ isActive }) =>
          `group flex xl:px-3 xl:py-2 p-2  gap-3 items-center hover:bg-gray-100 duration-200 rounded-full xl:rounded-xl ${
            isActive ? "bg-gray-100" : ""
          }`
        }
        to={menu.link}>
        {({ isActive }) => (
          <>
            <span
              className={`text-[23px]  ${
                isActive ? "text-indigo-700" : "text-gray-400"
              }`}>
              {menu.icon}
            </span>
            <span className="hidden xl:block text-gray-800 text-sm">
              {menu.name}
            </span>
          </>
        )}
      </NavLink>
    </li>
  );
}

export default Menu;
