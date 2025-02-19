import useCabins from "./useCabins";
import Spinner from "../../Ui/Spinner/Spinner";
import Button from "../../Ui/Button/Button";
import { Form } from "react-router-dom";
import CabinRow from "./CabinRow";
import Modal from "../../Ui/Modal/Modal";

function CabinTable() {
  const { isLoading, cabins } = useCabins();

  if (isLoading) return <Spinner />;

  return (
    <div className="mt-10 mb-5 space-y-4">
      <table className="w-full bg-white/80 rounded-md">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 font-semibold text-sm text-left">Photo</th>
            <th className="p-3 font-semibold text-sm text-left">CABIN</th>
            <th className="p-3 font-semibold text-sm text-left">CAPACITY</th>
            <th className="p-3 font-semibold text-sm text-left">PRICE</th>
            <th className="p-3 font-semibold text-sm text-left">DISCOUNT</th>
            <th className="p-3 font-semibold text-sm text-left"></th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100 cursor-pointer">
          {cabins?.map((cabin) => (
            <CabinRow key={cabin.id} cabin={cabin} />
          ))}
        </tbody>
      </table>

      {/* Modal */}
      <Modal>
        <Modal.Open>
          <Button>Add New Cabin</Button>
        </Modal.Open>
        <Modal.Content>
          <Form />
        </Modal.Content>
      </Modal>
    </div>
  );
}

export default CabinTable;
