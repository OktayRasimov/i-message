import styled from "styled-components";

const MessageBubbleContainer = styled.li`
  width: 400px;
  border-radius: 15%;
  min-height: 80px;
  background-color: red;
  list-style: none;
`;

function MessageBubble() {
  return (
    <MessageBubbleContainer>
      <h2>bubble</h2>
    </MessageBubbleContainer>
  );
}

export default MessageBubble;
