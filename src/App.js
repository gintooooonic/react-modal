import logo from "./logo.svg";
import "./App.css";
import Modal from "./Modal";
import { useState } from "react";

function App() {
  const [isModalOn, setIsModalOn] = useState(false);
  const openModal = () => {
    setIsModalOn(true);
  };
  const closeModal = () => {
    setIsModalOn(false);
  };

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
      <Modal title="react-modal" display={isModalOn} onClose={closeModal}>
        <h1>Demo</h1>
        <p>Move or resize this modal!</p>
      </Modal>
    </div>
  );
}

export default App;
