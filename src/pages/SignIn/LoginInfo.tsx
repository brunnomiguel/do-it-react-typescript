import { Grid, Heading, Image, Text } from "@chakra-ui/react";
import LogoSecondary from "../../assets/imgs/logo-secondary.svg";

export const LoginInfo = () => {
  return (
    <Grid w={["100%", "100%", "50%", "50%"]} paddingRight="100px">
      <Image
        src={LogoSecondary}
        alt="doit"
        boxSize={["120px", "120px", "150px", "150px"]}
      />
      <Heading mt="4" w={["300px", "350px"]} as="h1">
        O jeito fácil, grátis
      </Heading>
      <Text w={["150px", "250px", "350px"]} mt="2">
        Flexivo e atrativo de gerenciar
        <b> seus projetos em uma única plataforma</b>
      </Text>
    </Grid>
  );
};
