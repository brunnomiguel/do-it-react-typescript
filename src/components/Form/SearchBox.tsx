import { FaSearch } from "react-icons/fa";
import { theme } from "../../styles/theme";

import { Button, Center, Flex, useDisclosure } from "@chakra-ui/react";

import { ModalCreateTask } from "../Modal/ModalCreateTask";
import { Input } from "./Input";

import { useForm } from "react-hook-form";
import { useTasks } from "../../contexts/Tasks";
import { useAuth } from "../../contexts/Auth";

interface SearchData {
  title: string;
}

export const SearchBox = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { searchTask } = useTasks();
  const { accessToken } = useAuth();

  const handleSearch = ({ title }: SearchData) => {
    searchTask(title, accessToken);
  };

  const { register, handleSubmit } = useForm<SearchData>();

  return (
    <>
      <ModalCreateTask isOpen={isOpen} onClose={onClose} />
      <Flex
        mt="6"
        w="100%"
        paddingX={["4", "8"]}
        paddingY="2"
        paddingBottom="4"
        borderBottomWidth="1px"
        borderColor="grey.50"
        flexDir={["column", "column", "row", "row"]}
      >
        <Flex as="form" onSubmit={handleSubmit(handleSearch)}>
          <Input
            placeholder="Pesquisar por tarefa"
            w={["100%", "100%", "35vw"]}
            {...register("title")}
          />
          <Center
            borderRadius="8px"
            as="button"
            ml="2"
            w="65px"
            h="60px"
            fontSize="2xl"
            bg="purple.600"
            _hover={{
              bg: "purple.700",
            }}
          >
            <FaSearch color={theme.colors.white} />
          </Center>
        </Flex>
        <Button
          type="submit"
          onClick={onOpen}
          bg="purple.500"
          color="white"
          ml={["0", "0", "4"]}
          mt={["4", "4", "0"]}
          paddingX="16"
          h="60px"
          borderRadius="8px"
          _hover={{ bg: "purple.600" }}
        >
          Adicionar uma nova tarefa
        </Button>
      </Flex>
    </>
  );
};
