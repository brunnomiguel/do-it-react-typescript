import { Box, Grid } from "@chakra-ui/react";

import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { SearchBox } from "../../components/Form/SearchBox";
import { CardSkeleton } from "../../components/Skeleton/CardSkeleton";

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

interface TaskListProps {
  loading: boolean;
  tasks: Task[];
  handleClick: (task: Task) => void;
}

export const TaskList = ({ loading, tasks, handleClick }: TaskListProps) => {
  return (
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
        {loading ? (
          <CardSkeleton repeatCount={10} />
        ) : (
          tasks.map((task) => (
            <Card key={task.id} task={task} onFunction={handleClick} />
          ))
        )}
      </Grid>
    </Box>
  );
};
