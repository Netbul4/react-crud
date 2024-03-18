import { useModal } from "@/hooks/useModal";
import Modal from "./Modal";

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);

  return (
    <div>
      <h2>Modals</h2>
      <button>Modal 1</button>
      <Modal>
        <h3>Modal 1</h3>
        <p>Modal content.</p>
        <img src=""></img>
      </Modal>
    </div>
  );
};

export default Modals;
