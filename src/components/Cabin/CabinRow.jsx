import useDeleteCabin from "./useDeleteCabin";
import { HiDuplicate, HiOutlineDotsVertical } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import Modal from "../../Ui/Modal/Modal";

import useAddCabin from "./useAddCabin";
import CreateCabinForm from "./CreateCabinForm";

function CabinRow({ cabin }) {
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isAdding, addCabin } = useAddCabin();

  function handleDeleteCabin(id) {
    deleteCabin(id);
  }

  function handleCopyCabin(cabin) {
    const { maxCapacity, name, regularPrice, description, discount } = {
      ...cabin,
      name: `Copy of ${cabin.name}`,
    };

    const newCabin = { maxCapacity, name, regularPrice, description, discount };

    addCabin(newCabin);
  }

  return (
    <tr key={cabin.id}>
      <td className="p-1 ">
        <div className="w-20 h-full">
          <img
            src="https://nhrmlnjviyoallijqbvy.supabase.co/storage/v1/object/sign/cabin-images/cabin-001.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjYWJpbi1pbWFnZXMvY2FiaW4tMDAxLmpwZyIsImlhdCI6MTczOTg0Njg4MSwiZXhwIjoxNzQwNDUxNjgxfQ.GAO0EarhMlRKIDG3cuTXaLlCOIXlG3hdLGAdbtWwhOM"
            alt=""
          />
        </div>
      </td>
      <td className="p-3 font-medium">{cabin.name}</td>
      <td className="p-3">Fits up to {cabin.maxCapacity}</td>
      <td className="p-3">${cabin.regularPrice}</td>
      <td className="p-3 font-medium">
        {cabin.discount ? `$${cabin.discount}` : "--"}
      </td>
      <td className="group py-2 flex w-[32px] items-center relative">
        <button className="peer inline-block text-gray-500  p-2 duration-200 hover:bg-gray-200/40">
          <HiOutlineDotsVertical />
        </button>

        <div className="opacity-0 pointer-events-none rounded-md bg-white z-10 flex-col shadow-[0_10px_20px_rgba(0,0,0,0.15)] group-hover:-translate-y-1 group-hover:pointer-events-auto group-hover:opacity-100 duration-0 absolute top-full -right-1">
          <button
            onClick={() => handleCopyCabin(cabin)}
            disabled={isAdding}
            className="flex items-center gap-3 text-gray-500 py-2 px-4 duration-200 hover:bg-gray-200/40">
            <HiDuplicate />
            <span className="text-sm">Duplicate</span>
          </button>

          <Modal>
            <Modal.Open>
              <button className="flex w-full  py-2 px-4 items-center gap-3 text-gray-500  duration-200 hover:bg-gray-200/40">
                <MdEdit />
                <span className="text-sm">Edit</span>
              </button>
            </Modal.Open>

            <Modal.Content>
              <CreateCabinForm cabin={cabin} />
            </Modal.Content>
          </Modal>

          <button
            disabled={isDeleting}
            onClick={() => handleDeleteCabin(cabin.id)}
            className="flex w-full items-center gap-3 text-gray-500   py-2 px-4 duration-200 hover:bg-gray-200/40">
            <FaRegTrashAlt />
            <span className="text-sm">Edit</span>
          </button>
        </div>
      </td>
    </tr>
  );
}

export default CabinRow;
