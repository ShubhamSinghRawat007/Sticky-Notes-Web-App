import styles from "./Modal.module.css";
import ButtonComponent from "./ButtonComponent";

const Modal = ({ handleModal, textValue, handler, addNotesHandler }) => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <textarea
          placeholder="Write your note here..."
          value={textValue}
          onChange={handler}
          maxLength={150}
          className={styles.textArea}
        />
        <div className={styles.buttonContainer}>
          <ButtonComponent name="Add Notes" handler={addNotesHandler} />
          <ButtonComponent
            name="Close"
            backgroundColor="#ef4444"
            color="#ffffff"
            border="none"
            handler={handleModal}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
