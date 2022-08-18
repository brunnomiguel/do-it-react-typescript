import { ReactNode } from "react";
import { theme } from "../styles/theme";

import { AuthProvider } from "./Auth";
import { ChakraProvider } from "@chakra-ui/react";
import { TasksProvider } from "./Tasks";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <AuthProvider>
    <TasksProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </TasksProvider>
  </AuthProvider>
);
