import { BsGoogle } from "react-icons/bs"
import { MdLogin } from "react-icons/md";
import LoginImg from "../../assets/login.jpg"
import { Header } from '../../components/Header/index';
import { CustomButton } from "../../components/CustomButton";
import { LoginContainer, LoginContent, LoginContentForm, LoginHeadline, LoginSubtitle } from "./login"

export const Login = () => {
  return (
    <>
      <Header />
      <LoginContainer>
        <LoginContent>
          <img src={LoginImg} alt="" />
          <LoginContentForm>
            <LoginHeadline>Entre com a sua conta</LoginHeadline>
            <CustomButton startIcon={<BsGoogle size={18} />}>

              Entrar com o Google
            </CustomButton>
            <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>
            <CustomButton startIcon={<MdLogin size={18} />}>
              Entrar
            </CustomButton>

          </LoginContentForm>
        </LoginContent >
      </LoginContainer>
    </>
  )
}
