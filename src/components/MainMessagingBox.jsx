import styled from "styled-components";
import MessageBubble from "./MessageBubble";

const Test = styled.ul`
  background-color: grey;
  min-height: 90vh;
  max-height: 90vh;
  display: flex;
  flex-direction: column;

  gap: 4rem;
  width: 40%;
  transform: translateX(75%);
  margin: 2.5rem 0;
  padding: 3rem;
  border-radius: 10px;
  overflow-y: scroll;
`;

function MainMessagingBox() {
  return (
    <Test>
      <MessageBubble />
      <MessageBubble />
      <MessageBubble />
      <MessageBubble />
      <MessageBubble />
      <MessageBubble />
      <MessageBubble />
      <MessageBubble />
      <MessageBubble />
      <MessageBubble />
    </Test>
  );
}

export default MainMessagingBox;
