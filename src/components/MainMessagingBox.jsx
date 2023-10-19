import styled from "styled-components";
import MessageBubble from "./MessageBubble";
import { useEffect, useState } from "react";
import { supabase } from "../Data/supabaseClient";

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
  const [messages, setMessages] = useState([]);

  const realTimeMessage = supabase
    .channel("custom-all-channel")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "message" },
      (payload) => {
        console.log("Change received!", payload);
      }
    )
    .subscribe();

  useEffect(
    function () {
      async function fetchMessages() {
        let { data: message, error } = await supabase
          .from("message")
          .select("*");
        setMessages(message);
      }
      fetchMessages();
    },
    [realTimeMessage]
  );

  return (
    <Test>
      {messages.map((el) => (
        <MessageBubble message={el} key={el.id} />
      ))}
    </Test>
  );
}

export default MainMessagingBox;
