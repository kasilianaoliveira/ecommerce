import { LoginContainer, LoginContent, LoginContentForm, LoginHeadline, LoginSubtitle } from "./login"
// LoginContent, LoginContentForm, LoginHeadline, LoginSubtitle
import LoginImg from "../../assets/login.jpg"
import { Header } from '../../components/Header/index';

export const Login = () => {
  return (
    <>
      <Header />
      <LoginContainer>
        <LoginContent>
          <img src={LoginImg} alt="" />
          <LoginContentForm>
            <LoginHeadline>Entre com a sua conta</LoginHeadline>
            <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>
          </LoginContentForm>
        </LoginContent >
      </LoginContainer>
    </>
  )
}
