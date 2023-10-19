// import styled from "styled-components";

// const LoginFormStyled = styled.div`
//   min-width: 43rem;
//   min-height: 33rem;
//   background-color: #fff;
//   border-radius: 10px;
//   padding: 3rem;
// `;

// function LoginForm() {
//   return <LoginFormStyled>LOGIN</LoginFormStyled>;
// }

// export default LoginForm;

import styled from "styled-components";

import { useEffect, useState } from "react";
import { supabase } from "../Data/supabaseClient";
import { useNavigate } from "react-router-dom";

const StyledLoginForm = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-top: 13em; */

  /* min-height: 50vh; */
`;

const StyledLoginBox = styled.form`
  background-color: var(--color-grey-200);
  border-radius: 5px;
  padding: 2rem;
  width: 43rem;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h5 {
    color: grey;
  }
  p {
    color: #fff;
  }
  input {
    width: 100%;
  }
  button {
    color: var(--color-light-100);
  }
`;

function LoginForm() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    async function userLogin() {
      let { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: pass,
      });
      console.log(data);
      if (data.user) navigate("/Lobby");
    }
    userLogin();
  }

  useEffect(
    function () {
      async function getLogged() {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        console.log(user);

        if (user) navigate("/Lobby");
      }
      getLogged();
    },
    [navigate]
  );

  function handleLogout() {
    async function logout() {
      let { error } = await supabase.auth.signOut();
    }
    logout();
  }

  return (
    <StyledLoginForm onSubmit={handleLogin}>
      <StyledLoginBox>
        <header>
          <p>Email</p>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Demo1&nbsp;:&nbsp;tester@abv.bg</h5>
          <h5>Demo2&nbsp;:&nbsp;tester2@abv.bg</h5>
          <h5>Demo3&nbsp;:&nbsp;tester3@abv.bg</h5>
        </header>
        <header>
          <p>Password</p>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <h5>Demo1&nbsp;:&nbsp;test123</h5>
          <h5>Demo2&nbsp;:&nbsp;test123</h5>
          <h5>Demo3&nbsp;:&nbsp;test123</h5>
        </header>
        <button type="submit">Sign in</button>
        <button onClick={handleLogout}>Logout</button>
      </StyledLoginBox>
    </StyledLoginForm>
  );
}

export default LoginForm;
