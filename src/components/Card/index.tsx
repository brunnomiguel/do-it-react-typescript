import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Progress,
  Text,
} from "@chakra-ui/react";
import { FaCheck, FaTrash } from "react-icons/fa";
import { theme } from "../../styles/theme";

export const Card = () => {
  return (
    <Box
      cursor="pointer"
      borderWidth="1px"
      borderColor="grey.50"
      boxShadow="base"
      padding="7"
      w={["330px", "auto"]}
      _hover={{ transform: "translateY(-7px)", borderColor: "grey.100" }}
      transform="border 0.2s, ease 0s, transform 0.2s"
    >
      <Flex justifyContent="space-between">
        <Heading as="h1" size="md">
          Studing React Js Styled Components
        </Heading>
        <HStack spacing="4">
          <Center
            as="button"
            w="30px"
            h="30px"
            borderWidth="1px"
            borderRadius="5px"
            borderColor="grey.200"
            bgColor="white"
          >
            <FaTrash color={theme.colors.grey[200]} />
          </Center>
          <Center
            as="button"
            w="30px"
            h="30px"
            borderWidth="1px"
            borderRadius="5px"
            borderColor="grey.200"
            bgColor="white"
          >
            <FaCheck color={theme.colors.grey[200]} />
          </Center>
        </HStack>
      </Flex>
      <Box w="100%" mt="4">
        <Text>Estudar styled components meia hora por dia</Text>
        <Progress colorScheme="purple" mt="2.5" value={10} />
        <Text color="grey.200" mt="3">
          16 de agosto de 2022
        </Text>
      </Box>
    </Box>
  );
};
