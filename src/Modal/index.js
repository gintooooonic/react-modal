import styled from "styled-components";
import ModalTitle from "./ModalTitle";
import ModalBody from "./ModalBody";
import { useState } from "react";

export default function Modal(props) {
  const [pos, setPos] = useState({ x: 100, y: 100 });

  const onMouseMove = (event) => {
    const dx = event.movementX;
    const dy = event.movementY;
    setPos((pos) => ({ x: pos.x + dx, y: pos.y + dy }));
  };
  const onMouseUp = (event) => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  };

  const handleModalMove = (event) => {
    if (event.type === "mousedown") {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    }
  };

  return (
    <ModalDiv $display={props.display} x={pos.x} y={pos.y}>
      <ModalTitle
        title={props.title}
        onClose={props.onClose}
        onMouseDown={handleModalMove}
        onMouseUp={handleModalMove}
      />
      <ModalBody>{props.children}</ModalBody>
    </ModalDiv>
  );
}

const ModalDiv = styled.div`
  display: ${(props) => (props.$display ? "block" : "none")};
  position: fixed;
  top: ${(props) => `${props.y}px`};
  left: ${(props) => `${props.x}px`};
  width: 500px;
  height: 400px;
  background-color: #f2f2f2;
  border: 1px solid #cccccc;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.1);
`;
