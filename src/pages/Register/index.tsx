import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import { auth, db, provider } from "../../components/config/firestore.config";

import { BsGoogle } from "react-icons/bs"
import { MdLogin } from "react-icons/md";

import LoginImg from "../../assets/login.jpg"

import { Header } from '../../components/Header/index';
import { CustomButton } from "../../components/CustomButton";

import { InputContainer, RegisterContainer, RegisterContent, RegisterContentForm, RegisterHeadline, RegisterInputContainer, RegisterSubtitle, RegisterButton, RegisterButtonRedirect } from "./register"


import { ErrorMessage } from "../../components/ErrorMessage";
import { ImageContainer } from "../../components/ImgeContainer";
import { addDoc, collection } from 'firebase/firestore';
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
      .string(),
    //   .required("Nome é um campo obrigatório"),
    // lastName: yup
    //   .string()
    //   .required("Sobrenome é um campo obrigatório"),
    email: yup
      .string(),
    //   .email("Digite um email com formato válido")
    //   .required('Email é um campo obrigatório'),
    password: yup
      .string(),
    // .required('Senha é um campo obrigatório')
    // .min(8, "Digite uma senha com no mínimo 8 caracteres"),
    passwordConfirmation: yup
      .string()
      // .required('Senha é um campo obrigatório')
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
        profile: ""
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
      toast.error(`Erro ao tentar se cadastrar! ${error}`, {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

  }

  const handleSubmitGoogle = async (data: ISignIn) => {
    try {
      const userCredentials = await signInWithPopup(auth, provider);
      const user = userCredentials.user;

      await addDoc(collection(db, "users"), {
        id: user.uid,
        name: user.displayName,
        email: user.email,
        profile: user.photoURL,
      })

      const userProfile = user.photoURL;
      localStorage.setItem("PROFILE", userProfile!)

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

      navigate('/')


    } catch (error) {
      toast.error(`Erro ao tentar se cadastrar! ${error}`, {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

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
            <RegisterHeadline>Entre com a sua conta</RegisterHeadline>
            <CustomButton startIcon={<BsGoogle size={18} />} onClick={() => handleSubmit(handleSubmitGoogle)()}>
              Entrar com o Google
            </CustomButton>
            <RegisterSubtitle>ou crie uma conta com o seu e-mail</RegisterSubtitle>

            <RegisterInputContainer>
              <p>Nome</p>
              <InputContainer hasError={!!errors?.name} type="text" placeholder="Digite seu nome e sobrenome" {...register('name')} required />
              <ErrorMessage>{errors.name?.message}</ErrorMessage>
            </RegisterInputContainer>

            <RegisterInputContainer>
              <p>E-mail</p>
              <InputContainer hasError={!!errors?.email} type="text" placeholder="Digite seu e-mail" {...register('email')} required />
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
              onClick={() => handleSubmit(handleSubmitClick)()}>

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
          autoClose={5002}
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
