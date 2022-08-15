import {
  Box,
  Button,
  Center,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { FaExclamation, FaTimes } from "react-icons/fa";
import { theme } from "../../styles/theme";

interface ModalSuccessProps {
  isOpen: boolean;
  onClose: () => void;
  onClick: () => void;
  message: string;
  buttonMessage: string;
  secondaryText: string;
}

export const ModalSuccess = ({
  isOpen,
  onClick,
  onClose,
  buttonMessage,
  message,
  secondaryText,
}: ModalSuccessProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent padding="2" bg="white" color="grey.800">
        <ModalHeader display="flex">
          <Center bg="purple.500" w="30px" h="30px" borderRadius="5px">
            <FaExclamation color={theme.colors.white} />
          </Center>
          <Text fontWeight="bold" ml="2">
            Yeesss...
          </Text>
          <Center
            onClick={onClose}
            as="button"
            ml="auto"
            w="32px"
            h="32px"
            bg="red.600"
            fontSize="lg"
            borderRadius="md"
          >
            <FaTimes color={theme.colors.white} />
          </Center>
        </ModalHeader>
        <ModalBody textAlign="center">
          <Text>
            <Box dangerouslySetInnerHTML={{ __html: message }} />
          </Text>
        </ModalBody>
        <ModalFooter flexDirection="column">
          <Button
            bg="purple.500"
            color="white"
            w="100%"
            h="60px"
            onClick={onClick}
            _hover={{ bg: "purple.600" }}
          >
            {buttonMessage}
          </Button>
          <Text mt="4" textAlign="center">
            <Box dangerouslySetInnerHTML={{ __html: secondaryText }} />
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};