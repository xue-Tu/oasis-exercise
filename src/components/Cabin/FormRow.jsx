import React from "react";

function FormRow({ name, field, message, children }) {
  return (
    <div className="grid grid-cols-3 gap-2 py-2 items-center">
      <label htmlFor={field} className="text-sm ">
        {name}
      </label>
      {children}
      {message && (
        <span className="text-red-600 text-sm text-wrap">{message}</span>
      )}
    </div>
  );
}

export default FormRow;
