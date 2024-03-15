import "./Modal.module.css";

const Modal = ({ children }) => {
  return (
    <article className="modal">
      <div className="modal-container">
        <button className="modal-close">X</button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
