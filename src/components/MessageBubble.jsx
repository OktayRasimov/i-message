import { useEffect, useRef } from "react";
import styled from "styled-components";
import { supabase } from "../Data/supabaseClient";

const MessageBubbleContainer = styled.li`
  padding: 2rem;
  border-radius: 15px;
  width: fit-content;
  max-width: 40rem;

  block-size: fit-content;
  background-color: red;
  list-style: none;
`;

function MessageBubble({ message, currUser }) {
  const { id, created_at, message_content, user_id } = message;

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, []);

  function handleClick() {
    console.log(currUser);
  }

  return (
    <MessageBubbleContainer
      onClick={handleClick}
      ref={ref}
      style={{
        marginLeft: user_id == currUser.id ? "auto" : "",
        backgroundColor: user_id == currUser.id ? "#fff" : "#dcf4f2",
      }}
    >
      <h2>{message_content}</h2>
    </MessageBubbleContainer>
  );
}

export default MessageBubble;
