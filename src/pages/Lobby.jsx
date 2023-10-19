import styled from "styled-components";
import MainMessagingBox from "../components/MainMessagingBox";

const StyledFullLobbyPage = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function Lobby() {
  return (
    <StyledFullLobbyPage>
      <MainMessagingBox />
    </StyledFullLobbyPage>
  );
}

export default Lobby;
