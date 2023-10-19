import styled from "styled-components";

const SendButtonStyled = styled.button`
  transform: translateY(-70%) translateX(90%);
`;

function SendButton({ handleAddMessage }) {
  return <SendButtonStyled onClick={handleAddMessage}>SENDD</SendButtonStyled>;
}

export default SendButton;
