import React, {useState} from "react";
import Modal from "react-modal";

Modal.setAppElement('#root')

function ModalEx() {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setmodalIsOpen(true)}>Open</button>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setmodalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "282c34",
          },
          content: {
            color: "maroon",
          },
        }}
      >
        <h2>Hello dude</h2>
        <p>Fuck you bitch.....</p>
        <div>
          <button onClick={() => setmodalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
}

export default ModalEx;
