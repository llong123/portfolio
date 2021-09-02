import { Button, Flex, HStack, Link } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const router = useRouter();

  return (
    <Flex as="header" width="full" align="center">
      <Button
        variant="ghost"
        fontSize={["lg", "xl", "2xl", "3xl"]}
        onClick={() => router.push("/")}
      >
        Long Hoang
      </Button>
      <Flex marginLeft="auto">
        <HStack display={{ base: "none", md: "flex" }} spacing={15}>
          <Button variant="ghost" onClick={() => router.push("/about")}>
            About
          </Button>
          <Button variant="ghost" onClick={() => router.push("/portfolio")}>
            Portfolio
          </Button>
          <Button variant="ghost" onClick={() => router.push("/contact")}>
            Contact
          </Button>
        </HStack>

        <ThemeToggle />
      </Flex>
    </Flex>
  );
};

export default Header;
