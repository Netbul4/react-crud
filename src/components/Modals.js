import { ReactDOM } from "react-dom";
import { useModal } from "../hooks/useModal";
import CrudForm from "./CrudForm";
import Modal from "./Modal";

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModalPortal, openModalPortal, closeModalPortal] = useModal(false);

  return (
    <div>
      <h2>Modals</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Modal content.</p>
        <img src=""></img>
      </Modal>
      <button onClick={openModalPortal}>Modal Portal</button>
      <Modal isOpen={isOpenModalPortal} closeModal={closeModalPortal}>
        <CrudForm />
      </Modal>
    </div>
  );
};

export default Modals;
