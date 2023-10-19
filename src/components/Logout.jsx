import styled from "styled-components";
import { supabase } from "../Data/supabaseClient";
import { useNavigate } from "react-router-dom";

const StyledLogout = styled.button`
  position: absolute;
  top: 0;
  right: 10%;
  background-color: black;
  color: white;
`;

function Logout() {
  const navigate = useNavigate();

  function handleLogout() {
    async function logout() {
      let { error } = await supabase.auth.signOut();
    }
    logout();
    navigate("/");
  }

  return <StyledLogout onClick={handleLogout}>logout</StyledLogout>;
}

export default Logout;
