import React from "react";
import { HiOutlineUser } from "react-icons/hi";
import DefaultUserLogo from "/default-user.jpg";
import { CiLight } from "react-icons/ci";
import { GiReturnArrow } from "react-icons/gi";

function Header() {
  return (
    <header className="flex border-b border-b-gray-200 justify-end gap-7 items-center px-14 py-2 cursor-pointer">
      {/* User Logo Section  */}
      <div className="flex items-center gap-3">
        <div className="w-[30px] h-[30px] overflow-hidden rounded-full">
          <img src={DefaultUserLogo} alt="" />
        </div>
        <span>Sun</span>
      </div>
      {/* Icon Operation */}
      <div className="flex items-center gap-3 text-xl text-blue-700">
        <HiOutlineUser />
        <CiLight />
        <GiReturnArrow />
      </div>
    </header>
  );
}

export default Header;
