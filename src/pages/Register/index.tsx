import { AuthError, createUserWithEmailAndPassword, AuthErrorCodes, signInWithPopup } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { auth, db, provider } from "../../components/config/firestore.config";

import { MdLogin } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";

import LoginImg from "../../assets/login.jpg"

import { Header } from '../../components/Header/index';
import { CustomButton } from "../../components/CustomButton";

import { InputContainer, RegisterContainer, RegisterContent, RegisterContentForm, RegisterHeadline, RegisterInputContainer, RegisterButton, RegisterButtonRedirect, RegisterSubtitle } from "./register"


import { ErrorMessage } from "../../components/ErrorMessage";
import { ImageContainer } from "../../components/ImgeContainer";
import { useContext, useState } from "react";
import { CategoriesContext } from "../../context/categoriesContext";
import { BsGoogle } from "react-icons/bs";
import { Loading } from "../../components/Loading";


interface ISignIn {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

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
      setIsLoading(true)
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
          autoClose: 3000,
          theme: "light",
        });
      }

    } finally {
      setIsLoading(false)
    }

  }

  //add cadastro com o google
  const handleSignInWithGoogle = async () => {
    try {
      setIsLoading(true)

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

        await addDoc(collection(db, "users"), {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          profile: user.photoURL,
          provider: "google"
        })

        toast.success('Cadastro realizado com sucesso!', {
          position: "bottom-left",
          autoClose: 1000,
          theme: "light",
        });

        setTimeout(() => navigate('/'), 1500)

      } else {
        toast.error('Email já cadastrado', {
          position: "bottom-left",
          autoClose: 3000,
          theme: "light",
        });
      }

    } catch (error) {
      toast.error(`Erro ao tentar se cadastrar! ${error} `, {
        position: "bottom-left",
        autoClose: 3000,
        theme: "light",
      });

    } finally {
      setIsLoading(false)

    }
  }

  const { setProfile } = useContext(CategoriesContext);

  const profile = localStorage.getItem("PROFILE");
  setProfile(profile!);

  return (
    <>
      <RegisterContainer>
        <Header />
        {isLoading && <Loading />}
        <RegisterContent>

          <ImageContainer src={LoginImg} alt="Homem olhando roupas" />

          <RegisterContentForm>
            <RegisterHeadline>Entre com a sua conta</RegisterHeadline>
            <CustomButton startIcon={<BsGoogle size={18} />} onClick={handleSignInWithGoogle} >
              Entrar com o Google
            </CustomButton>
            <RegisterSubtitle>ou crie uma conta com o seu e-mail</RegisterSubtitle>

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
