import styled from "styled-components";

export default function ModalTitle(props) {
  return (
    <ModalTitleDiv onMouseDown={props.onMouseDown}>
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
  border-radius: 10px 10px 0 0;
  & > p {
    margin: 0;
    line-height: 30px;
    font-size: 15px;
    font-weight: bold;
  }
  & * {
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }
  &:hover {
    background-color: #e6e6e6;
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

  &:hover {
    background-color: #ff3d33;
  }
`;
