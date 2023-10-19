import styled from "styled-components";
import SendButton from "./SendButton";
import { useState } from "react";
import { supabase } from "../Data/supabaseClient";

const TypeMessageBox = styled.div`
  textarea {
    width: 25rem;
  }
`;

function TypeMessageContainer({ currUser }) {
  const [typedMessage, setTypedMessage] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  async function addMessage() {
    const { data, error } = await supabase
      .from("message")
      .insert([
        {
          message_content: typedMessage,
          created_at: currentTime,
          user_id: currUser.id,
        },
      ])
      .select();
  }

  function handleAddMessage() {
    console.log(typedMessage);
    const dateFull = new Date();
    const hour = dateFull.getHours();
    const minute = dateFull.getMinutes();
    const seconds = dateFull.getSeconds();

    const finalTime = `${hour}:${minute}:${seconds}`;
    setCurrentTime(finalTime);
    addMessage();
    setTypedMessage("");
  }

  return (
    <TypeMessageBox>
      <textarea
        placeholder="Type message..."
        value={typedMessage}
        onChange={(e) => setTypedMessage(e.target.value)}
      />
      <SendButton handleAddMessage={handleAddMessage} />
    </TypeMessageBox>
  );
}

export default TypeMessageContainer;
