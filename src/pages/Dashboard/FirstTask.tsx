import {
  Box,
  Button,
  Center,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { FaClipboard } from "react-icons/fa";

import { Header } from "../../components/Header";
import { ModalCreateTask } from "../../components/Modal/ModalCreateTask";

export const FirstTask = () => {
  const {
    isOpen: isCreateTaskOpen,
    onOpen: onCreateTaskOpen,
    onClose: onCreateTaskClose,
  } = useDisclosure();

  return (
    <>
      <ModalCreateTask isOpen={isCreateTaskOpen} onClose={onCreateTaskClose} />
      <Header />
      <Box
        mt="4"
        w="90vw"
        paddingX={["6", "0"]}
        paddingY="16"
        ml="5vw"
        justifyContent="center"
        textAlign="center"
        borderWidth="2px"
        borderColor="grey.200"
        borderStyle="dashed"
      >
        <Center fontSize="5xl">
          <FaClipboard color="#bdbdbd" />
        </Center>
        <Heading fontSize="4xl" as="h1" mt="4">
          Vamos criar a sua primeira tarefa
        </Heading>
        <Text color="grey.400" mt="6">
          Crie sua meta e mostre a si mesmo <br />
          capacidade em cumprir{" "}
          <Text fontWeight="bold" display="inline-block" color="grey.900">
            suas atividades
          </Text>
        </Text>
        <Button
          padding="6"
          mt="6"
          bgColor="purple.800"
          color="white"
          _hover={{ bg: "purple.900" }}
          onClick={() => onCreateTaskOpen()}
        >
          Criar sua primeira tarefa
        </Button>
      </Box>
    </>
  );
};
