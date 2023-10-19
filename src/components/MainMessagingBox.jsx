import styled from "styled-components";
import MessageBubble from "./MessageBubble";
import { useEffect, useState } from "react";
import { supabase } from "../Data/supabaseClient";
import TypeMessageContainer from "./TypeMessageContainer";
import Logout from "./Logout";

const MessageContainer = styled.div`
  border-radius: 10px;
  position: relative;
  min-height: 90vh;
  max-height: 90vh;
  width: 80%;
  margin: 2.5rem 0;
  background-color: grey;
`;

const UlContainer = styled.ul`
  display: flex;
  min-height: 80vh;
  max-height: 80vh;
  flex-direction: column;
  gap: 4rem;
  padding: 3rem 2rem 0 2rem;
  width: 100%;
  overflow-y: scroll;
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
          <MessageBubble currUser={currUser} message={el} key={el.id} />
        ))}
      </UlContainer>
      <TypeMessageContainer currUser={currUser} />

      <Logout />
    </MessageContainer>
  );
}

export default MainMessagingBox;
