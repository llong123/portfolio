import React from "react";
import { Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import { useEffect } from "react";

const HomeContent = () => {
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
        <Stack spacing={1}>
          <Text fontSize="6xl">Long Hoang</Text>
          <Text fontSize="3xl">I am a</Text>
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default HomeContent;
