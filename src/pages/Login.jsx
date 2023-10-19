import styled from "styled-components";
import LoginForm from "../components/LoginForm";
const LoginPageStyled = styled.section`
  min-height: 100vh;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Login() {
  return (
    <LoginPageStyled>
      <LoginForm />
    </LoginPageStyled>
  );
}

export default Login;
