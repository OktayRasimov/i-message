import styled from "styled-components";

const MessageBubbleContainer = styled.li`
  width: 400px;
  border-radius: 15%;
  min-height: 80px;
  background-color: red;
  list-style: none;
`;

function MessageBubble({ message }) {
  const { id, created_at, message_content, user_id } = message;
  return (
    <MessageBubbleContainer>
      <h2>{message_content}</h2>
    </MessageBubbleContainer>
  );
}

export default MessageBubble;
