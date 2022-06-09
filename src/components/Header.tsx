import { Flex, Image } from "@chakra-ui/react";
import logoImg from "../assets/logo.svg";

export default function Header() {
  return (
    <Flex
      w="100%"
      h="100"
      bg="yellow.900"
      as="header"
      align="center"
      justify="center"
    >
      <Image src={logoImg} alt="World Trip Logo" />
    </Flex>
  );
}
