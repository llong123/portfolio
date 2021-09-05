import { Flex, Box, SimpleGrid, Text, VStack, Link } from "@chakra-ui/react";
import React from "react";

interface Project {
  name: string;
  url: string;
}

const PortfolioPage = () => {
  const projects: Project[] = [
    { name: "testi1", url: "www.google.fi" },
    { name: "testi2", url: "www.google.fi" },
    { name: "testi3", url: "www.google.fi" },
    { name: "testi4", url: "www.google.fi" },
  ];

  return (
    <Flex justify="center" mt={{ base: "2rem", md: "4rem" }} w="full">
      <VStack w="full">
        <Text as="h2" fontSize={["3xl", "4xl", "5xl", "6xl"]}>
          Portfolio
        </Text>
        <SimpleGrid
          width="full"
          minChildWidth="25vh"
          columns={4}
          spacing="40px"
        >
          {projects.map((p: Project) => {
            <Box href={p.url} bg="grey" height="25vh">
              <Text>{p.name}</Text>
            </Box>;
          })}
        </SimpleGrid>
      </VStack>
    </Flex>
  );
};

export default PortfolioPage;
