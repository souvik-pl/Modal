import { useState } from "react";
import Modal from "./Modal/Modal";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open modal</button>
      <Modal open={isOpen} onClose={closeModal} width="500px" height="300px">
        <h1>Hi</h1>
      </Modal>
    </div>
  );
}

export default App;
