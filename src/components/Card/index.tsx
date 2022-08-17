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

import { useAuth } from "../../contexts/Auth";
import { useTasks } from "../../contexts/Tasks";

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

interface CardProps {
  task: Task;
  onFunction: (task: Task) => void;
}

export const Card = ({ task, onFunction }: CardProps) => {
  const { deleteTask, updateTask } = useTasks();
  const { accessToken, user } = useAuth();

  return (
    <Box
      cursor="pointer"
      borderWidth="1px"
      borderColor="grey.50"
      boxShadow="base"
      padding="7"
      w={["80vw", "auto"]}
      _hover={{ transform: "translateY(-7px)", borderColor: "grey.100" }}
      transform="border 0.2s, ease 0s, transform 0.2s"
    >
      <Flex justifyContent="space-between">
        <Heading as="h1" size="md">
          {task.title}
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
            onClick={() => deleteTask(task.id, accessToken)}
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
            onClick={() => updateTask(task.id, user.id, accessToken)}
          >
            <FaCheck color={theme.colors.grey[200]} />
          </Center>
        </HStack>
      </Flex>
      <Box onClick={() => onFunction(task)} w="100%" mt="4">
        <Text>{task.description}</Text>
        <Progress
          colorScheme="purple"
          mt="2.5"
          value={task.completed ? 100 : 10}
        />
        <Text color="grey.200" mt="3">
          16 de agosto de 2022
        </Text>
      </Box>
    </Box>
  );
};
