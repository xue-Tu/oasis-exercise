import CabinHeader from "../../components/Cabin/CabinHeader";
import CabinTable from "../../components/Cabin/CabinTable";
import Modal from "../../Ui/Modal/Modal";

function Cabins() {
  return (
    <>
      {/* HEADER Section */}
      <CabinHeader />
      {/* Table Section */}
      <CabinTable />
      {/* Modal */}
      <Modal>
        <Modal.Open>Add New Cabin</Modal.Open>
        <Modal.Content>123123</Modal.Content>
      </Modal>
    </>
  );
}

export default Cabins;
