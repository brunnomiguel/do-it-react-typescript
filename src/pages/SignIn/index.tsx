import {
  Flex,
  Heading,
  Text,
  Grid,
  Image,
  VStack,
  Button,
  Box,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaEnvelope, FaLock } from "react-icons/fa";

import LogoSecondary from "../../assets/imgs/logo-secondary.svg";
import { Input } from "../../components/Form/Input";
import { useState } from "react";

const signInSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido!"),
  password: yup.string().required("Senha obrigatória"),
});

interface SignInData {
  email: string;
  password: string;
}

export const SignIn = () => {
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<SignInData>({
    resolver: yupResolver(signInSchema),
  });

  const handleSignIn = (data: SignInData) => console.log(data);

  return (
    <Flex
      padding={["10px 15px", "10px 15px", "0", "0"]}
      height={["auto", "auto", "100vh", "100vh"]}
      alignItems="center"
      justifyContent="center"
      bgGradient={[
        "linear(to-b, purple.800 65%, white 35%)",
        "linear(to-b, purple.800 65%, white 35%)",
        "linear(to-r, purple.800 65%, white 35%)",
        "linear(to-r, purple.800 65%, white 35%)",
      ]}
      color="white"
    >
      <Flex
        w={["100%", "100%", "90%", "60%"]}
        justifyContent="center"
        flexDirection={["column", "column", "row", "row"]}
        alignItems="center"
      >
        <Grid w={["100%", "100%", "50%", "50%"]} paddingRight="100px">
          <Image
            src={LogoSecondary}
            alt="doit"
            boxSize={["120px", "120px", "150px", "150px"]}
          />
          <Heading mt="4" w={["300px", "350px"]} as="h1">
            O jeito fácil, grátis
          </Heading>
          <Text w={["150px", "250px", "350px"]} mt="2">
            Flexivo e atrativo de gerenciar
            <b> seus projetos em uma única plataforma</b>
          </Text>
        </Grid>
        <Grid
          onSubmit={handleSubmit(handleSignIn)}
          as="form"
          mt={["4", "4", "0"]}
          w={["100%", "100%", "40%", "40%"]}
          padding="30px 15px"
          border="3px solid"
          borderColor="grey.100"
          bg="white"
          color="grey.900"
        >
          <Heading size="lg">Bem vindo(a) de volta!</Heading>
          <VStack mt="6" spacing="5">
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
          </VStack>
          <VStack mt="4" spacing="5">
            <Button
              isLoading={loading}
              bg="purple.800"
              w="100%"
              color="white"
              h="60px"
              borderRadius="8px"
              _hover={{
                background: "purple.900",
              }}
              type="submit"
            >
              Entrar
            </Button>
            <Text color="grey.400">Ainda não possui uma conta?</Text>
            <Button
              bg="grey.100"
              w="100%"
              color="grey.300"
              h="60px"
              borderRadius="8px"
              _hover={{
                background: "grey.200",
              }}
            >
              Cadastrar
            </Button>
          </VStack>
        </Grid>
      </Flex>
    </Flex>
  );
};
