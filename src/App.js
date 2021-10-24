import { useState } from "react";
import Modal from "./Modal";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [modalState, setModalState] = useState(false);
  const openModal = () => setModalState(true);
  const closeModal = () => setModalState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-link" onClick={openModal}>
          Open Modal
        </p>
      </header>
      <Modal
        title="React Modal"
        x="100"
        y="100"
        width="500"
        height="400"
        display={modalState}
        onClose={closeModal}
      >
        <h1>Demo</h1>
        <p>
          Move or <del>resize</del> this modal!
        </p>
      </Modal>
    </div>
  );
}

export default App;
