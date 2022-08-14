import { Button } from "@chakra-ui/react";
import { useAuth } from "../../contexts/Auth";

export const Dashboard = () => {
  const { signOut } = useAuth();
  return <Button onClick={signOut}>Deslogar</Button>;
};
