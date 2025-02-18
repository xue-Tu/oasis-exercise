import React from "react";

function Button({ type = "primary" }) {
  const deafultStyle = "px-3 py-2 text-xs text-white  rounded-md ";

  const typeStyle = {
    primary: `bg-blue-700 hover:bg-blue-800`,
  };

  return (
    <button className={`${deafultStyle} ${typeStyle[type]}`}>
      Add New Cabin
    </button>
  );
}

export default Button;
