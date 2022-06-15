import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Banner() {
  return (
    <Flex
      w="100%"
      h={["163px", "250px", "250px", "335px"]}
      justify="center"
      paddingX="140px"
      bgImage="url('/background.svg')"
      bgSize="cover"
    >
      <HStack spacing="210px">
        <Stack spacing="20px" maxWidth="524px">
          <Heading
            fontWeight="medium"
            color="gray.200"
            fontSize={["xl", "2xl", "2xl", "2xl", "4xl"]}
          >
            5 Continentes, infinitas possibilidades.
          </Heading>
          <Text
            color="gray.400"
            fontSize={["0.8rem", "xl"]}
            maxW={["100%", "100%", "100%", "550px"]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Stack>
        <Box>
          <Image
            w={["300px", "300px", "300px", "430px"]}
            display={["none", "none", "block"]}
            src="/airplane.svg"
            alt="Avião"
            transform="translateY(52px)"
            ml="8"
          />
        </Box>
      </HStack>
    </Flex>
  );
}
