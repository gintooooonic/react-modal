import { useState } from "react";
import styled from "styled-components";
import ModalTitle from "./ModalTitle";
import ModalBody from "./ModalBody";

export default function Modal(props) {
  const [pos, setPos] = useState({ x: +props.x, y: +props.y });

  const handleMouseDown = () => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event) => {
    setPos((pos) => ({
      x: pos.x + event.movementX,
      y: pos.y + event.movementY,
    }));
  };

  return (
    <ModalDiv $display={props.display} x={pos.x} y={pos.y}>
      <ModalTitle
        title={props.title}
        onMouseDown={handleMouseDown}
        onClose={props.onClose}
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
  z-index: 1;
`;
