import styled from "styled-components";
import MessageBubble from "./MessageBubble";
import { useEffect, useState } from "react";
import { supabase } from "../Data/supabaseClient";
import TypeMessageContainer from "./TypeMessageContainer";

const MessageContainer = styled.div`
  min-height: 80vh;
  border-radius: 10px;
  max-height: 80vh;
  margin: 2.5rem 0;
  width: 40%;
  background-color: grey;
  transform: translateX(75%);
  overflow-y: scroll;
`;

const UlContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 3rem;
`;

function MainMessagingBox() {
  const [messages, setMessages] = useState([]);
  const [change, setChange] = useState();
  const [currUser, setCurrUser] = useState();

  const realTimeMessage = supabase
    .channel("custom-all-channel")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "message" },
      (payload) => {
        console.log(payload);
        setChange(payload.commit_timestamp);
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
      console.log(change);
    },
    [change]
  );

  useEffect(function () {
    async function logged() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setCurrUser(user);
    }
    logged();
  }, []);

  return (
    <MessageContainer>
      <UlContainer>
        {messages.map((el) => (
          <MessageBubble message={el} key={el.id} />
        ))}
      </UlContainer>
      <TypeMessageContainer currUser={currUser} />
    </MessageContainer>
  );
}

export default MainMessagingBox;
