import styled from "styled-components";

export default function ModalBody(props) {
  return <ModalBodyDiv>{props.children}</ModalBodyDiv>;
}

const ModalBodyDiv = styled.div`
  box-sizing: border-box;
  padding-top: 30px;
  height: 100%;
`;
