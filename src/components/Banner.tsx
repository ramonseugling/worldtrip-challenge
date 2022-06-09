import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import logoImg from "../assets/logo.svg";

export default function Banner() {
  return (
    <Flex
      w="100%"
      h="100"
      bg="yellow.900"
      align="center"
      justify="center"
      paddingX="140px"
      bgImage="url('../assets/background.svg')"
    >
      <Stack spacing="20px">
        <Heading fontWeight="medium">
          5 Continentes, infinitas possibilidades.
        </Heading>
        <Text>
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Stack>
    </Flex>
  );
}
