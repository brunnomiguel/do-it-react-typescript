import { AxiosResponse } from "axios";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";
import { api } from "../../services/api";

interface TasksProviderProps {
  children: ReactNode;
}

interface Task {
  id: string;
  title: string;
  description: string;
  userId: string;
  completed: boolean;
}

interface TasksContextData {
  tasks: Task[];
  createTask: (data: Task, accessToken: string) => Promise<void>;
}

const TasksContext = createContext<TasksContextData>({} as TasksContextData);

export const useTasks = () => {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error("useTasks must be used within an TasksProvider");
  }

  return context;
};

export const TasksProvider = ({ children }: TasksProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const createTask = useCallback(async (data: Task, accessToken: string) => {
    api
      .post("/tasks", data, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response: AxiosResponse<Task>) =>
        setTasks([...tasks, response.data])
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <TasksContext.Provider value={{ tasks, createTask }}>
      {children}
    </TasksContext.Provider>
  );
};
