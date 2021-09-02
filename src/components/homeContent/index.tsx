import React from "react";
import { Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import useDencrypt from "hooks/useDencrypt";

const values = ["Programmer", "Software Engineer", "IT Engineer", "Developer"];

const HomeContent = () => {
  const { result, dencrypt } = useDencrypt("Developer");

  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 4000);

    return () => clearInterval(action);
  }, [dencrypt]);

  return (
    <Grid templateRows="repeat(3, 1fr)" h="full" gap={4}>
      <GridItem
        display="flex"
        rowSpan={3}
        colSpan={1}
        alignItems="center"
        ml="2"
      >
        <Stack padding={[4, 6, 8, 10]} spacing={1}>
          <Text
            fontSize={["lg", "xl", "2xl", "3xl"]}
          >{`Hi! I am Long Hoang,`}</Text>
          <Text fontSize={["2xl", "4xl", "5xl", "6xl"]}>{`a ${result}`}</Text>
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default HomeContent;
