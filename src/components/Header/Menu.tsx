import {
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useAuth } from "../../contexts/Auth";
import { FiLogOut } from "react-icons/fi";
import { theme } from "../../styles/theme";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Menu = ({ isOpen, onClose }: MenuProps) => {
  const { user, signOut } = useAuth();

  return (
    <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay mt="7vh" />
      <DrawerContent ml="auto" mt="60px" w="300px">
        <DrawerHeader
          borderBottomWidth="1px"
          borderColor="grey.50"
          color="grey.400"
        >
          {user.name}
        </DrawerHeader>
        <DrawerBody>
          <Flex
            alignItems="center"
            onClick={signOut}
            _hover={{ cursor: "pointer" }}
          >
            <Center
              w="60px"
              h="60px"
              bg="red.600"
              fontSize="2xl"
              borderRadius="md"
            >
              <FiLogOut color={theme.colors.white} />
            </Center>
            <Box ml="4">
              <Heading as="h2" fontSize="lg">
                Sair da minha conta
              </Heading>
              <Text color="grey.300" fontSize="small">
                Sair da minha conta agora
              </Text>
            </Box>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
