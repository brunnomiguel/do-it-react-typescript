import { useHistory } from "react-router-dom";

import NotFoundImg from "../../assets/imgs/notfound.svg";

import { Box, Button, Flex, Heading, Text, Image } from "@chakra-ui/react";

export const PageNotFound = () => {
  const history = useHistory();

  return (
    <Flex
      padding={["10px 15px", "10px 15px", "0", "0"]}
      height={["auto", "auto", "100vh", "100vh"]}
      alignItems="center"
      justifyContent="space-evenly"
      flexDirection={["column-reverse", "column-reverse", "row", "row"]}
    >
      <Box mt="4">
        <Heading>Oooops!</Heading>
        <Text mt="4">
          Não encontramos a página que você procurou, <br />
          <b> vamos tentar novamente.</b>
        </Text>
        <Button
          mt="4"
          bg="red.600"
          h="60px"
          color="white"
          w="100%"
          _hover={{ bg: "red.700" }}
          onClick={() => history.push("/")}
        >
          Ir para minhas tarefas
        </Button>
      </Box>
      <Image src={NotFoundImg} />
    </Flex>
  );
};
