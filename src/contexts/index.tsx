import { ReactNode } from "react";
import { theme } from "../styles/theme";

import { AuthProvider } from "./Auth";
import { ChakraProvider } from "@chakra-ui/react";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <AuthProvider>
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
  </AuthProvider>
);
