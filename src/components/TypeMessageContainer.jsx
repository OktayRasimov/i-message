import styled from "styled-components";
import SendButton from "./SendButton";

const TypeMessageBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 30%;

  textarea {
    width: 25rem;
  }
`;

function TypeMessageContainer() {
  return (
    <TypeMessageBox>
      <textarea placeholder="Type message..." />
      <SendButton />
    </TypeMessageBox>
  );
}

export default TypeMessageContainer;
