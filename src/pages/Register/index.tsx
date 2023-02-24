import { BsGoogle } from "react-icons/bs"
import { MdLogin } from "react-icons/md";

import LoginImg from "../../assets/login.jpg"

import { Header } from '../../components/Header/index';
import { CustomButton } from "../../components/CustomButton";

import { InputContainer, RegisterContainer, RegisterContent, RegisterContentForm, RegisterHeadline, RegisterInputContainer, RegisterSubtitle, RegisterButton } from "./register"

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Link } from 'react-router-dom';
import { ErrorMessage } from "../../components/ErrorMessage";
import { ImageContainer } from "../../components/ImgeContainer";

interface ISignIn {
  name: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export const Register = () => {

  const schema = yup.object({

    name: yup
      .string()
      .required("Nome é um campo obrigatório"),
    lastName: yup
      .string()
      .required("Sobrenome é um campo obrigatório"),
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

  const { register, handleSubmit, formState: { errors } } = useForm<ISignIn>({ resolver: yupResolver(schema) });

  const handleSubmitClick = (data: ISignIn) => {
    console.log({ data })
  }

  return (
    <>
      <Header />
      <RegisterContainer>
        <RegisterContent>

          <ImageContainer src={LoginImg} alt="Homem olhando roupas" />

          <RegisterContentForm>
            <RegisterHeadline>Entre com a sua conta</RegisterHeadline>
            <CustomButton startIcon={<BsGoogle size={18} />}>
              Entrar com o Google
            </CustomButton>
            <RegisterSubtitle>ou crie uma conta com o seu e-mail</RegisterSubtitle>

            <RegisterInputContainer>
              <p>Nome</p>
              <InputContainer hasError={!!errors?.name} type="text" placeholder="Digite seu nome" {...register('name')} required />
              <ErrorMessage>{errors.name?.message}</ErrorMessage>
            </RegisterInputContainer>

            <RegisterInputContainer>
              <p>Sobrenome</p>
              <InputContainer hasError={!!errors?.lastName} type="text" placeholder="Digite seu sobrenome" {...register('lastName')} required />
              <ErrorMessage>{errors.lastName?.message}</ErrorMessage>
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

            <p>
              Já tem uma conta?
              <Link to='/login'>
                <RegisterButton>Faça login</RegisterButton>
              </Link>
            </p>

          </RegisterContentForm>
        </RegisterContent >
      </RegisterContainer>
    </>
  )
}
