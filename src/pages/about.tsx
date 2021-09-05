import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const AboutPage = () => {
  return (
    <Flex
      direction="column"
      mt={{ base: "2rem", md: "4rem" }}
      alignItems="center"
    >
      <Text as="h2" mb={4} fontSize={["3xl", "4xl", "5xl", "6xl"]}>
        About me
      </Text>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing="5rem"
        p={{ base: "1rem", md: "2rem" }}
        align="center"
      >
        <Stack direction="column">
          <Text>
            Laborum do culpa Lorem ex incididunt aliqua tempor voluptate anim
            Lorem qui nisi enim.
          </Text>
          <Text>
            Quis laborum eu est sit est excepteur adipisicing officia sint in
            ut. Mollit cillum irure consequat aute laborum aliquip ea sit tempor
            sunt irure exercitation dolore excepteur.
          </Text>
          <Text>
            Elit irure ipsum elit esse non. Amet minim nisi ea ad mollit magna
            fugiat voluptate. Voluptate reprehenderit ipsum et officia aliquip
            cillum ut ipsum incididunt. Exercitation occaecat magna labore
            reprehenderit minim pariatur eu elit anim enim culpa.
          </Text>
        </Stack>

        <Image
          borderRadius="full"
          boxSize="200px"
          alt="Profile Picture"
          src="https://via.placeholder.com/150"
        ></Image>
      </Stack>
    </Flex>
  );
};

export default AboutPage;
