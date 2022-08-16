import { Box, Button, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import { FaEnvelope, FaLock } from "react-icons/fa";

import { useForm } from "react-hook-form";
import { signInSchema } from "./signInSchema";
import { yupResolver } from "@hookform/resolvers/yup";

import { useState } from "react";
import { useHistory } from "react-router-dom";

import { useAuth } from "../../contexts/Auth";
import { Input } from "../../components/Form/Input";

interface SignInData {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();
  
  const history = useHistory();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<SignInData>({
    resolver: yupResolver(signInSchema),
  });

  const handleSignIn = (data: SignInData) => {
    setLoading(true);
    signIn(data)
      .then((_) => setLoading(false))
      .catch((_) => setLoading(false));
    reset();
  };

  return (
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
          onClick={() => history.push("/signup")}
          _hover={{
            background: "grey.200",
          }}
        >
          Cadastrar
        </Button>
      </VStack>
    </Grid>
  );
};
