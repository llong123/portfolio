import React from "react";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import useDencrypt from "hooks/useDencrypt";
import AboutPage from "components/AboutPage";
import PortfolioPage from "components/PortfolioPage";
import Footer from "components/layout/Footer";
import Header from "components/layout/Header";

const values = ["a Programmer", "a Developer", "an Engineer"];

const Home = () => {
  const { result, dencrypt } = useDencrypt(values[0]);

  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 4000);

    return () => clearInterval(action);
  }, [dencrypt]);

  return (
    <Stack direction="column">
      <Header />
      <Box padding={{ base: "0.5rem 2rem", sm: "1rem 5rem" }}>
        <Flex align="center" minH="100vh" id="home">
          <Stack spacing={2}>
            <Text
              fontSize={["md", "lg", "xl", "2xl"]}
            >{`Hi! I'm Long Hoang,`}</Text>
            <Text fontWeight="bold" fontSize={["2xl", "4xl", "5xl", "6xl"]}>
              {result}.
            </Text>
          </Stack>
        </Flex>

        <AboutPage />
        <PortfolioPage />
      </Box>
      <Footer />
    </Stack>
  );
};

export default Home;
