import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      width="full"
      textAlign="center"
      bottom={0}
      h={12}
    >
      <Text>@Long Hoang {new Date().getFullYear()}</Text>
    </Box>
  );
};

export default Footer;
