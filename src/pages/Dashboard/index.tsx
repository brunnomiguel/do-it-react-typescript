import { useEffect, useState } from "react";

import {
  Box,
  Center,
  Grid,
  Heading,
  Skeleton,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { SearchBox } from "../../components/Form/SearchBox";

import { useAuth } from "../../contexts/Auth";
import { useTasks } from "../../contexts/Tasks";
import { ModalTaskDetail } from "../../components/Modal/ModalTaskDetails";

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [selectedTask, setSelectedTask] = useState<Task>({} as Task);

  const { user, accessToken } = useAuth();
  const { tasks, loadTasks, notFound, taskNotFound } = useTasks();

  const {
    isOpen: isTaskDetailOpen,
    onOpen: onTaskDetailOpen,
    onClose: onTaskDetailClose,
  } = useDisclosure();

  const handleClick = (task: Task) => {
    setSelectedTask(task);
    onTaskDetailOpen();
  };

  useEffect(() => {
    loadTasks(user.id, accessToken).then((_) => setLoading(false));
  }, []);

  if (notFound) {
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
  }

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
        <Grid
          w="100%"
          templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          gap="10"
          paddingX="8"
          mt="8"
        >
          {tasks.map((task) => (
            <Card key={task.id} task={task} onFunction={handleClick} />
          ))}
        </Grid>
      </Box>
    </>
  );
};
