import React, { cloneElement } from "react";
import { createPortal } from "react-dom";
import { FaXmark } from "react-icons/fa6";

const ModalContext = React.createContext();

function Modal({ children }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ open, isOpen, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children }) {
  const { open } = useModalContext();

  return cloneElement(children, {
    onClick: open,
  });
}

function Content({ children }) {
  const { isOpen, close } = useModalContext();
  const ref = React.useRef();

  React.useEffect(() => {
    function isContainRef(e) {
      if (!ref?.current?.contains(e.target)) close();
    }

    document.addEventListener("click", isContainRef, true);

    return () => document.removeEventListener("click", isContainRef, true);
  }, [close]);

  if (!isOpen) return;

  return createPortal(
    <section className="fixed top-0 left-0 w-screen h-screen backdrop-blur-sm  grid place-items-center">
      <div ref={ref} className="w-[800px] px-8 py-4 bg-white rounded-xl  ">
        <header className="flex justify-end ">
          <button
            onClick={close}
            className=" hover:text-gray-400 cursor-pointer duration-200">
            <FaXmark />
          </button>
        </header>
        {React.cloneElement(children, {
          close,
        })}
      </div>
    </section>,
    document.body
  );
}

function useModalContext() {
  return React.useContext(ModalContext);
}

Modal.Open = Open;
Modal.Content = Content;

export default Modal;
