import React from "react";

function Button({
  disabled = false,
  variation = "primary",
  onClick,
  children,
  type,
}) {
  const deafultStyle = "px-3 py-2 text-xs text-white  rounded-md ";

  const typeStyle = {
    primary: `bg-blue-700 hover:bg-blue-800`,
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={() => onClick?.()}
      className={`${deafultStyle} ${typeStyle[variation]}`}>
      {children}
    </button>
  );
}

export default Button;
