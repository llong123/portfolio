import { Box, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import NotFoundSVG from "../../public/404.svg";

const Page404 = () => {
  const { colorMode } = useColorMode();

  return (
    <Box h="100%" display="flex" alignItems="center" justifyContent="center">
      <Image src={NotFoundSVG} alt="Not Found"></Image>
    </Box>
  );
};

export default Page404;
