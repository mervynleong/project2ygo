import React from "react";
import styles from "./Modal.module.css";

const DeleteModal = (props) => {
  if (!props.showDeleteModal) {
    return null;
  }
  return (
    <>
      <div className={styles.modalBackground}>
        <div className={styles.modal}>
          <div style={{ color: "white", fontSize: "30px" }}>
            Confirm Delete?
          </div>

          <button
            style={{
              color: "green",
              backgroundColor: "black",
              fontSize: "25px",
            }}
            onClick={() => {
              props.closeModal();
              props.handleDelete(props.id);
            }}
          >
            OK
          </button>
          <button
            style={{
              color: "red",
              backgroundColor: "black",
              fontSize: "25px",
            }}
            onClick={props.closeModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
