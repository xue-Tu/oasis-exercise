import useCabins from "./useCabins";
import Spinner from "../../Ui/Spinner/Spinner";
// import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";

import useDeleteCabin from "./useDeleteCabin";
import { IoIosEye } from "react-icons/io";
import { HiDuplicate } from "react-icons/hi";
import { MdEdit } from "react-icons/md";

function CabinTable() {
  const { isLoading, cabins } = useCabins();

  const { isDeleting, deleteCabin } = useDeleteCabin();

  if (isLoading) return <Spinner />;

  function handleDeleteCabin(id) {
    deleteCabin(id);
  }

  return (
    <div className="mt-10 mb-5 space-y-4">
      <table className="w-full bg-white/80 rounded-md overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 font-semibold text-sm text-left">Photo</th>
            <th className="p-3 font-semibold text-sm text-left">CABIN</th>
            <th className="p-3 font-semibold text-sm text-left">CAPACITY</th>
            <th className="p-3 font-semibold text-sm text-left">PRICE</th>
            <th className="p-3 font-semibold text-sm text-left">DISCOUNT</th>
            <th className="p-3 font-semibold text-sm text-left">Oparator</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100 cursor-pointer">
          {cabins?.map((cabin) => (
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
              <td className="p-3 flex items-center ">
                <span className="inline-block text-gray-500  p-1 duration-200 hover:bg-gray-200/40">
                  <button>
                    <HiDuplicate />
                  </button>
                </span>
                <span className="inline-block text-gray-500  p-1 duration-200 hover:bg-gray-200/40">
                  <button>
                    <MdEdit />
                  </button>
                </span>
                <span className="inline-block text-gray-500  p-1 duration-200 hover:bg-gray-200/40">
                  {/* <HiOutlineDotsVertical /> */}
                  <button
                    disabled={isDeleting}
                    onClick={() => handleDeleteCabin(cabin.id)}>
                    <FaRegTrashAlt />
                  </button>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CabinTable;
