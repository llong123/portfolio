import React from "react";
import { Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import useDencrypt from "hooks/useDencrypt";

const values = ["a Father", "a Programmer", "an Engineer"];

const HomeContent = () => {
  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 4000);

    return () => clearInterval(action);
  }, [dencrypt]);

  return (
    <Grid
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(2, 1fr)"
      h="full"
      gap={4}
    >
      <GridItem
        display="flex"
        rowSpan={3}
        colSpan={1}
        alignItems="center"
        ml="2"
      >
        <Stack padding={16} spacing={1}>
          <Text fontSize="6xl">Long Hoang</Text>
          <Text fontSize="3xl">I am {result}</Text>
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default HomeContent;
