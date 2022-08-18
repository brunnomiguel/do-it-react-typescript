import { Box, Center, Heading, Skeleton, Stack, Text } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { SearchBox } from "../../components/Form/SearchBox";
import { ModalTaskDetail } from "../../components/Modal/ModalTaskDetails";

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

interface NotFoundProps {
  isTaskDetailOpen: boolean;
  onTaskDetailClose: () => void;
  selectedTask: Task;
  taskNotFound: string;
}

export const NotFound = ({
  isTaskDetailOpen,
  onTaskDetailClose,
  selectedTask,
  taskNotFound,
}: NotFoundProps) => {
  return (
    <>
      <ModalTaskDetail
        isOpen={isTaskDetailOpen}
        onClose={onTaskDetailClose}
        task={selectedTask}
      />
      <Box>
        <Header />
        <SearchBox />
        <Center mt="4" textAlign="center" display="flex" flexDir="column">
          <Heading size="lg">Não encontramos resultados para:</Heading>
          <Text fontSize="xl" color="grey.300" fontWeight="bold">
            {taskNotFound}
          </Text>
          <Box
            mt="6"
            w={["80%", "40%"]}
            padding="6"
            boxShadow="base"
            bg="white"
          >
            <Stack>
              <Skeleton
                startColor="grey.100"
                endColor="grey.200"
                h="20px"
                borderRadius="20px"
                w="80%"
              />
              <Skeleton
                startColor="grey.100"
                endColor="grey.200"
                h="20px"
                borderRadius="20px"
                w="60%"
              />
            </Stack>
            <Stack mt="8">
              <Skeleton
                startColor="grey.100"
                endColor="grey.200"
                h="15px"
                borderRadius="20px"
              />
              <Skeleton
                startColor="grey.100"
                endColor="grey.200"
                h="15px"
                borderRadius="20px"
              />
            </Stack>
          </Box>
        </Center>
      </Box>
    </>
  );
};
