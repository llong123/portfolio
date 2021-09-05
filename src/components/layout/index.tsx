import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

import Header from "./Header";
import Meta from "./Meta";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" w="full" h="full" transition="0.5s ease-out">
      <Meta />
      <Box padding={{ base: "0.5rem 2rem", sm: "1rem 5rem" }} h="full">
        <Header />
        <Flex className="mainContainer" as="main">
          {children}
        </Flex>
      </Box>
    </Box>
  );
};

export default Layout;
