import {
  Box,
  Button,
  Grid,
  Heading,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useState } from "react";

import { Input } from "../../components/Form/Input";
import { api } from "../../services/api";
import { ModalSuccess } from "../../components/Modal/ModalSuccess";
import { ModalError } from "../../components/Modal/ModalError";
import { useHistory } from "react-router-dom";

const signUpSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido!"),
  password: yup.string().required("Senha obrigatória"),
  confirmPassword: yup
    .string()
    .required("Confirmação de senha obrigatória!")
    .oneOf([yup.ref("password")], "Senhas não conferem!"),
});

interface SignUpData {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
}

export const SignUpForm = () => {
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const {
    isOpen: isModalSuccessOpen,
    onOpen: onModalSuccessOpen,
    onClose: onModalSuccessClose,
  } = useDisclosure();

  const {
    isOpen: isModalErrorOpen,
    onOpen: onModalErrorOpen,
    onClose: onModalErrorClose,
  } = useDisclosure();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<SignUpData>({
    resolver: yupResolver(signUpSchema),
  });

  const handleSignUp = ({ name, email, password }: SignUpData) => {
    setLoading(true);
    api
      .post("/register", { name, email, password })
      .then((_) => {
        setLoading(false);
        onModalSuccessOpen();
      })
      .catch((_) => {
        setLoading(false);
        onModalErrorOpen();
      });
    reset();
  };

  return (
    <>
      <ModalSuccess
        buttonMessage="Ir para o login agora"
        message="Seu cadastro deu super certo, <b> vamos lá </b>"
        onClick={() => history.push("/")}
        secondaryText="Você já pode começar criando <b> suas listas </b> de tarefas agora mesmo..."
        isOpen={isModalSuccessOpen}
        onClose={onModalSuccessClose}
      />
      <ModalError
        isOpen={isModalErrorOpen}
        onClose={onModalErrorClose}
        error="Seu e-mail já está em uso"
        secondaryText="Você já pode tentar novamente, <b> clicando </b> no botão acima ou aguarde alguns minutos..."
      />
      <Grid
        onSubmit={handleSubmit(handleSignUp)}
        as="form"
        mt={["4", "4", "20", "0"]}
        w={["100%", "100%", "40%", "40%"]}
        padding="30px 25px"
        border="3px solid"
        borderColor="grey.100"
        bg="white"
        color="grey.900"
      >
        <Heading size="lg">Crie a sua conta</Heading>
        <VStack mt="6" spacing="5">
          <Input
            placeholder="Digite o seu nome"
            icon={FaUser}
            label="Nome"
            error={errors.name}
            {...register("name")}
          />
          <Box w="100%">
            <Input
              placeholder="Digite o seu e-mail"
              icon={FaEnvelope}
              label="Login"
              type="email"
              error={errors.email}
              {...register("email")}
            />
            {!errors.email && (
              <Text ml="1" mt="1" color="grey.300">
                Exemplo: nome@email.com
              </Text>
            )}
          </Box>
          <Input
            placeholder="Digite a sua senha"
            icon={FaLock}
            label="Senha"
            type="password"
            error={errors.password}
            {...register("password")}
          />
          <Input
            placeholder="Confirme a sua senha"
            icon={FaLock}
            label="Confirmação de senha"
            type="password"
            error={errors.confirmPassword}
            {...register("confirmPassword")}
          />
        </VStack>
        <Button
          isLoading={loading}
          bg="purple.800"
          w="100%"
          color="white"
          mt="8"
          h="60px"
          borderRadius="8px"
          _hover={{
            background: "purple.900",
          }}
          type="submit"
        >
          Finalizar cadastro
        </Button>
      </Grid>
    </>
  );
};
