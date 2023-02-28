import { BsGoogle } from "react-icons/bs"
import { MdLogin } from "react-icons/md";

import LoginImg from "../../assets/login.jpg"

import { Header } from '../../components/Header/index';
import { CustomButton } from "../../components/CustomButton";

import { InputContainer, LoginContainer, LoginContent, LoginContentForm, LoginHeadline, LoginInputContainer, LoginSubtitle, RegisterButton, RegisterButtonRedirect } from "./login"

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Link } from 'react-router-dom';
import { ErrorMessage } from "../../components/ErrorMessage";
import { ImageContainer } from "../../components/ImgeContainer";

interface ISignIn {
  email: string;
  password: string;
}

export const Login = () => {

  const schema = yup.object({
    email: yup.string()
      .email("Digite um email com formato válido")
      .required('Email é um campo obrigatório'),
    password: yup.string()
      .required('Senha é um campo obrigatório'),
  })

  const { register, handleSubmit, formState: { errors } } = useForm<ISignIn>({ resolver: yupResolver(schema) });

  const handleSubmitClick = (data: any) => {
    console.log({ data })
  }


  return (
    <>
      <LoginContainer>
        <Header />
        <LoginContent>

          <ImageContainer src={LoginImg} alt="Homem olhando roupas" />
          {/* <img src={LoginImg} alt="" /> */}

          <LoginContentForm>
            <LoginHeadline>Entre com a sua conta</LoginHeadline>
            <CustomButton startIcon={<BsGoogle size={18} />}>

              Entrar com o Google
            </CustomButton>
            <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>

            <LoginInputContainer>
              <p>E-mail</p>
              <InputContainer hasError={!!errors?.email} type="text" placeholder="Digite seu e-mail" {...register('email')} required />
              <ErrorMessage>{errors.email?.message}</ErrorMessage>

            </LoginInputContainer>

            <LoginInputContainer>
              <p>Senha</p>
              <InputContainer hasError={!!errors?.password} placeholder="Digite sua senha" {...register('password')} type="password" />
              <ErrorMessage>{errors.password?.message}</ErrorMessage>

            </LoginInputContainer>

            <CustomButton
              startIcon={<MdLogin size={20} />}
              onClick={() => handleSubmit(handleSubmitClick)()}>

              Entrar
            </CustomButton>

            <RegisterButtonRedirect>
              <p>Ainda não tem uma conta?

                <Link to='/cadastro'>
                  <RegisterButton>Cadastre-se</RegisterButton>
                </Link>
              </p>
            </RegisterButtonRedirect>

          </LoginContentForm>
        </LoginContent >
      </LoginContainer>
    </>
  )
}
