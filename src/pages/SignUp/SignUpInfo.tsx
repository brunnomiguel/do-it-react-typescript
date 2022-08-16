import {
  Box,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { theme } from "../../styles/theme";

import { FaForward } from "react-icons/fa";
import LogoSecondary from "../../assets/imgs/logo-secondary.svg";
import SimpleIcon from "../../assets/imgs/simple-icon.svg";

export const SignUpInfo = () => {
  return (
    <Grid
      w={["100%", "100%", "50%", "50%"]}
      paddingLeft={["0", "0", "150px"]}
      alignSelf="baseline"
    >
      <Image
        src={LogoSecondary}
        alt="doit"
        boxSize={["120px", "120px", "150px", "150px"]}
        mb={["0", "0", "20", "20"]}
      />
      <VStack spacing={["10", "14"]} mt={["10px", "10px", "0"]}>
        <Flex w="100%">
          <Center borderRadius="5px" bg="white" w="50px" h="50px">
            <FaForward color={theme.colors.purple["800"]} size={25} />
          </Center>
          <Box ml="4">
            <Heading size="lg"> Agilidade </Heading>
            <Text>
              Agilize seus projetos com rapidez <br /> e muita performance
            </Text>
          </Box>
        </Flex>
        <Flex w="100%">
          <Center borderRadius="5px" bg="white" w="50px" h="50px">
            <Image src={SimpleIcon} w="25px" />
          </Center>
          <Box ml="4">
            <Heading size="lg"> Agilidade </Heading>
            <Text>
              Armazene seus projetos em uma <br /> interface altamente visual
            </Text>
          </Box>
        </Flex>
      </VStack>
    </Grid>
  );
};
