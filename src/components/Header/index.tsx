import { Center, Flex, Heading, Image, useDisclosure } from "@chakra-ui/react";

import { theme } from "../../styles/theme";
import { FaTh } from "react-icons/fa";
import LogoMin from "../../assets/imgs/logo-min.svg";

import { Menu } from "./Menu";

export const Header = () => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  return (
    <Flex
      borderBottom="1px"
      borderBottomColor="#f5f5f5"
      paddingX="8"
      paddingY="2"
    >
      <Flex alignItems="center">
        <Center bg="purple.600" borderRadius="6px" padding="2">
          <Image src={LogoMin} />
        </Center>
        <Heading ml="4" size="lg">
          Dashboard
        </Heading>
      </Flex>
      <Center ml="auto" onClick={onToggle} as="button" fontSize="2rem">
        <FaTh color={theme.colors.grey[300]} />
      </Center>
      <Menu isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};
