import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Meta from "./Meta";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" w="full" h="full" transition="0.5s ease-out">
      <Meta />
      <Box padding="8" h="full">
        <Header />
        <Box as="main" marginY={22}>
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
