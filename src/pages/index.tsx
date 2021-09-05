import React from "react";
import { Flex, Stack, Text } from "@chakra-ui/react";
import useDencrypt from "hooks/useDencrypt";

const values = ["a Programmer", "a Developer", "an Engineer"];

const Home = () => {
  const { result, dencrypt } = useDencrypt("a Developer");

  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 4000);

    return () => clearInterval(action);
  }, [dencrypt]);

  return (
    <Flex align="center">
      <Stack spacing={2}>
        <Text fontSize={["md", "lg", "xl", "2xl"]}>{`Hi! I'm Long,`}</Text>
        <Text fontWeight="bold" fontSize={["2xl", "4xl", "5xl", "6xl"]}>
          {result}.
        </Text>
      </Stack>
    </Flex>
  );
};

export default Home;
