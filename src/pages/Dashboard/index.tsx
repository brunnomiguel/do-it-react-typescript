import { Box } from "@chakra-ui/react";
import { SearchBox } from "../../components/Form/SearchBox";
import { Header } from "../../components/Header";

export const Dashboard = () => {
  return (
    <Box>
      <Header />
      <SearchBox />
    </Box>
  );
};
