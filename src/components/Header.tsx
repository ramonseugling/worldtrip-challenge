import { Flex, Image } from "@chakra-ui/react";
import logoImg from "../assets/logo.svg";

export default function Header() {
  return (
    <Flex
      w="100%"
      h="100px"
      bg="gray.50"
      as="header"
      align="center"
      justify="center"
    >
      <Image src="/logo.svg" alt="World Trip Logo" />
    </Flex>
  );
}
