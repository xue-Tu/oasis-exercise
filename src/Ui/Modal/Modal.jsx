import React from "react";
import { createPortal } from "react-dom";
import { FaXmark } from "react-icons/fa6";
import Button from "../Button/Button";

const ModalContext = React.createContext();

function Modal({ children }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const open = () => setIsOpen(true);

  return (
    <ModalContext.Provider value={{ open, isOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children }) {
  const { open } = React.useContext(ModalContext);

  return <Button onClick={open}>{children}</Button>;
}

function Content() {
  return (
    <section className="fixed top-0 left-0 w-screen  h-screen backdrop-blur-sm  grid place-items-center">
      <div className="p-4 bg-white rounded-xl w-1/2 h-1/2">
        <header className="flex justify-end hover:text-gray-400 cursor-pointer duration-200">
          <FaXmark />
        </header>
      </div>
    </section>
  );
}

Modal.Open = Open;
Modal.Content = Content;

export default Modal;
