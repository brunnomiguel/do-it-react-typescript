import { Flex, useBreakpointValue } from "@chakra-ui/react";

import { SignUpInfo } from "./SignUpInfo";
import { SignUpForm } from "./SignUpForm";
import { GoBackButton } from "./GoBackButton";

export const SignUp = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex
      padding={["10px 15px", "10px 15px", "0", "0"]}
      height={["auto", "auto", "100vh", "100vh"]}
      alignItems="center"
      justifyContent="center"
      bgGradient={[
        "linear(to-b, purple.800 65%, white 35%)",
        "linear(to-b, purple.800 65%, white 35%)",
        "linear(to-l, purple.800 65%, white 35%)",
        "linear(to-l, purple.800 65%, white 35%)",
      ]}
      color="white"
    >
      <Flex
        w={["100%", "100%", "90%", "60%"]}
        justifyContent="center"
        flexDirection={["column", "column", "row", "row"]}
        alignItems="center"
      >
        {isWideVersion ? (
          <>
            <GoBackButton top="10" left="24" />
            <SignUpForm />
            <SignUpInfo />
          </>
        ) : (
          <>
            <GoBackButton top="10" left="75vw" />
            <SignUpInfo />
            <SignUpForm />
          </>
        )}
      </Flex>
    </Flex>
  );
};
