import { ToastContainer, toast } from 'react-toastify';
import { BsGoogle } from "react-icons/bs"
import { MdLogin } from "react-icons/md";

import LoginImg from "../../assets/login.jpg"

import { Header } from '../../components/Header/index';
import { CustomButton } from "../../components/CustomButton";

import { InputContainer, LoginContainer, LoginContent, LoginContentForm, LoginHeadline, LoginInputContainer, LoginSubtitle, RegisterButton, RegisterButtonRedirect } from "./login"

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import { ErrorMessage } from "../../components/ErrorMessage";
import { ImageContainer } from "../../components/ImgeContainer";
import { AuthError, AuthErrorCodes, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { auth, db, provider } from '../../components/config/firestore.config';
import { UserContext } from '../../context/userContext';
import { useContext, useState, useEffect } from 'react';
import { Loading } from '../../components/Loading';

interface ISignIn {
  email: string;
  password: string;
}

export const Login = () => {

  const navigate = useNavigate();
  const {isAuthenticated} = useContext(UserContext)
  
  useEffect(() => {
    if(isAuthenticated){
      navigate('/')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isAuthenticated])
  
  const [isLoading, setIsLoading] = useState(false);

  const schema = yup.object({
    email: yup.string()
      .email("Digite um email com formato válido")
      .required('Email é um campo obrigatório'),
    password: yup.string()
      .required('Senha é um campo obrigatório'),
  })

  const { register, handleSubmit, resetField, formState: { errors } } = useForm<ISignIn>({ resolver: yupResolver(schema) });

  const handleSubmitClick = async (data: ISignIn) => {
    try {
      setIsLoading(true);

      await signInWithEmailAndPassword(auth, data.email, data.password);

      const resetFields = [
        'email',
        'password',
      ] as const;

      resetFields.forEach((field) => resetField(field))

      navigate('/')

    } catch (error) {

      const _error = error as AuthError;

      const invalidEmail = AuthErrorCodes.INVALID_EMAIL;
      const invalidPassword = AuthErrorCodes.INVALID_PASSWORD;

      if (_error.code === invalidPassword || _error.code === invalidEmail) {
        toast.error(`Erro ao tentar fazer login! ${"Email ou senha incorretos"} `, {
          position: "bottom-left",
          autoClose: 3000,
          theme: "light",
        });
      }
    } finally {
      setIsLoading(false);
    }
  }

  const handleSignInWithGoogle = async () => {
    try {
      setIsLoading(true);

      const userCredentials = await signInWithPopup(auth, provider);

      const user = userCredentials.user;

      const querySnapshot = await getDocs(
        query(
          collection(db, "users"),
          where("id", "==", user.uid)
        )
      );
      const userDocs = querySnapshot.docs[0]?.data();

      if (!userDocs) {

        toast.error(`Erro ao tentar fazer login! Email não cadastrado`, {
          position: "bottom-left",
          autoClose: 3000,
          theme: "light",
        });
      } else {
        navigate('/')
      }

    } catch (error) {
      toast.error(`Erro ao tentar se cadastrar! ${error} `, {
        position: "bottom-left",
        autoClose: 3000,
        theme: "light",
      });

    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <LoginContainer>
        <Header />

        {isLoading && <Loading />}
        <LoginContent>

          <ImageContainer src={LoginImg} alt="Homem olhando roupas" />

          <LoginContentForm>
            <LoginHeadline>Entre com a sua conta</LoginHeadline>
            <CustomButton
              startIcon={<BsGoogle size={18} />}
              onClick={handleSignInWithGoogle}>

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
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </LoginContainer>
    </>
  )
}
