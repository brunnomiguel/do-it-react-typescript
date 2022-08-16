import { Center } from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import { FaArrowLeft } from "react-icons/fa";

import { useHistory } from "react-router-dom";

interface GoBackButtonProps {
  top: string;
  left: string;
}

export const GoBackButton = ({ top, left }: GoBackButtonProps) => {
  const history = useHistory();

  return (
    <Center
      as="button"
      onClick={() => history.push("/")}
      position="absolute"
      top={top}
      left={left}
      backgroundColor="purple.500"
      fontSize="2xl"
      borderRadius="md"
      w={["60px", "80px"]}
      h={["60px", "70px"]}
      _hover={{
        bg: "purple.600",
      }}
    >
      <FaArrowLeft color={theme.colors.white} />
    </Center>
  );
};
