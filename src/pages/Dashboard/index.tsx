import { useEffect, useState } from "react";

import { Box, Grid, useDisclosure } from "@chakra-ui/react";

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
  const { tasks, loadTasks } = useTasks();

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
          templateColumns="repeat(auto-fill, minmax(420px, 1fr))"
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
