import { AuthError, createUserWithEmailAndPassword, AuthErrorCodes } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from "../../components/config/firestore.config";

import { MdLogin } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";

import LoginImg from "../../assets/login.jpg"

import { Header } from '../../components/Header/index';
import { CustomButton } from "../../components/CustomButton";

import { InputContainer, RegisterContainer, RegisterContent, RegisterContentForm, RegisterHeadline, RegisterInputContainer, RegisterButton, RegisterButtonRedirect } from "./register"


import { ErrorMessage } from "../../components/ErrorMessage";
import { ImageContainer } from "../../components/ImgeContainer";
import { useContext } from "react";
import { CategoriesContext } from "../../context/categoriesContext";


interface ISignIn {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export const Register = () => {
  const navigate = useNavigate();

  const schema = yup.object({
    name: yup
    .string()
    .required("Nome é um campo obrigatório"),
    email: yup
      .string()
      .email("Digite um email com formato válido")
      .required('Email é um campo obrigatório'),
    password: yup
      .string()
      .required('Senha é um campo obrigatório')
      .min(8, "Digite uma senha com no mínimo 8 caracteres"),
    passwordConfirmation: yup
      .string()
      .required('Senha é um campo obrigatório')
      .oneOf([yup.ref('password')], 'Senhas não correspondem'),

  })

  const { register, handleSubmit, formState: { errors }, resetField } = useForm<ISignIn>({ resolver: yupResolver(schema) });

  const handleSubmitClick = async (data: ISignIn) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredentials.user;

      await addDoc(collection(db, "users"), {
        id: user.uid,
        name: data.name,
        email: user.email,
        profile: "",
        provider: "firebase"
      })

      toast.success('Cadastro realizado com sucesso!', {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      const resetFields = [
        'name',
        'email',
        'password',
        'passwordConfirmation',
      ] as const;

      resetFields.forEach((field) => resetField(field))

      navigate('/')


    } catch (error) {

      const _error = error as AuthError;

      if (_error.code === AuthErrorCodes.EMAIL_EXISTS) {
        toast.error(`Erro ao tentar se cadastrar! ${"Email já cadastrado"} `, {
          position: "bottom-left",
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }

    }

  }

  const { setProfile } = useContext(CategoriesContext);

  const profile = localStorage.getItem("PROFILE");
  setProfile(profile!);

  return (
    <>
      <RegisterContainer>
        <Header />
        <RegisterContent>

          <ImageContainer src={LoginImg} alt="Homem olhando roupas" />

          <RegisterContentForm>
            <RegisterHeadline>Crie sua conta</RegisterHeadline>
  
            <RegisterInputContainer>
              <p>Nome</p>
              <InputContainer hasError={!!errors?.name} type="text" placeholder="Digite seu nome completo" {...register('name')} />
              <ErrorMessage>{errors.name?.message}</ErrorMessage>

            </RegisterInputContainer>

            <RegisterInputContainer>
              <p>E-mail</p>
              <InputContainer hasError={!!errors?.email} type="text" placeholder="Digite seu e-mail" {...register('email')} />
              <ErrorMessage>{errors.email?.message}</ErrorMessage>
            </RegisterInputContainer>

            <RegisterInputContainer>
              <p>Senha</p>
              <InputContainer hasError={!!errors?.password} placeholder="Digite sua senha" {...register('password')} type="password" />
              <ErrorMessage>{errors.password?.message}</ErrorMessage>
            </RegisterInputContainer>

            <RegisterInputContainer>
              <p>Confirme sua senha</p>
              <InputContainer hasError={!!errors?.passwordConfirmation} placeholder="Confirme sua senha" {...register('passwordConfirmation')} type="password" />
              <ErrorMessage>{errors.passwordConfirmation?.message}</ErrorMessage>
            </RegisterInputContainer>

            <CustomButton
              startIcon={<MdLogin size={20} />}
              onClick={() => handleSubmit(handleSubmitClick)()}
            >

              Criar Conta
            </CustomButton>

            <RegisterButtonRedirect>
              <p>
                Já tem uma conta?
                <Link to='/login'>
                  <RegisterButton>Faça login</RegisterButton>
                </Link>
              </p>
            </RegisterButtonRedirect>


          </RegisterContentForm>
        </RegisterContent >
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
      </RegisterContainer>
    </>
  )
}
