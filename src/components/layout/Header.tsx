import { Button, Flex, HStack, IconButton } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";

import ThemeToggle from "./ThemeToggle";
import { RiMenuFoldFill } from "react-icons/ri";

const Header = () => {
  const router = useRouter();

  return (
    <Flex as="header" className="headerContainer">
      <Flex marginLeft="auto">
        <HStack display={{ base: "none", md: "flex" }} spacing={4}>
          <Button variant="ghost" onClick={() => router.push("/")}>
            Home
          </Button>
          <Button variant="ghost" onClick={() => router.push("/about")}>
            About
          </Button>
          <Button variant="ghost" onClick={() => router.push("/portfolio")}>
            Portfolio
          </Button>
          <Button variant="ghost" onClick={() => router.push("/contact")}>
            Contact
          </Button>
          <ThemeToggle />
        </HStack>
        <IconButton
          display={{ base: "flex", md: "none" }}
          aria-label="Hamburger-menu"
        >
          <RiMenuFoldFill />
        </IconButton>
      </Flex>
    </Flex>
  );
};

export default Header;
