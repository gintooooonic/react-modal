import styled from "styled-components";

export default function ModalTitle(props) {
  return (
    <ModalTitleDiv onMouseDown={props.onMouseDown} onMouseUp={props.onMouseUp}>
      <CloseButton onClick={props.onClose} />
      <p>{props.title}</p>
    </ModalTitleDiv>
  );
}

const ModalTitleDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 30px;
  & > p {
    margin: 0;
    line-height: 30px;
    font-size: 15px;
    font-weight: bold;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #ff5f57;
`;
