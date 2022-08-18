import { useEffect, useState } from "react";

import { useDisclosure } from "@chakra-ui/react";

import { useAuth } from "../../contexts/Auth";
import { useTasks } from "../../contexts/Tasks";

import { TaskList } from "./TaskList";
import { NotFound } from "./NotFound";
import { FirstTask } from "./FirstTask";
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
      <NotFound
        isTaskDetailOpen={isTaskDetailOpen}
        onTaskDetailClose={onTaskDetailClose}
        selectedTask={selectedTask}
        taskNotFound={taskNotFound}
      />
    );
  }

  return (
    <>
      <ModalTaskDetail
        isOpen={isTaskDetailOpen}
        onClose={onTaskDetailClose}
        task={selectedTask}
      />
      {!loading && !tasks.length ? (
        <FirstTask />
      ) : (
        <TaskList loading={loading} tasks={tasks} handleClick={handleClick} />
      )}
    </>
  );
};
