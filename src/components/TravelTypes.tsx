import { Grid, GridItem, Image, Text } from "@chakra-ui/react";

export default function TravelTypes() {
  return (
    <>
      <Grid
        templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        mt={["10", "32"]}
        mx="auto"
        maxW="1160px"
        flexWrap="wrap"
        gap={[1, 5]}
      >
        <GridItem
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Image
            src="/travel-types/cocktail.svg"
            alt="Drink"
            w="85px"
            h="85px"
          />
          <Text color="gray.800" fontWeight="600" fontSize="24px" mt="8">
            vida noturna
          </Text>
        </GridItem>
        <GridItem
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Image src="/travel-types/surf.svg" alt="Drink" w="85px" h="85px" />
          <Text color="gray.800" fontWeight="600" fontSize="24px" mt="8">
            praia
          </Text>
        </GridItem>
        <GridItem
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Image src="/travel-types/building.svg" alt="Drink" />
          <Text color="gray.800" fontWeight="600" fontSize="24px" mt="8">
            moderno
          </Text>
        </GridItem>
        <GridItem
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Image src="/travel-types/museum.svg" alt="Drink" />
          <Text color="gray.800" fontWeight="600" fontSize="24px" mt="8">
            clássico
          </Text>
        </GridItem>
        <GridItem
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Image src="/travel-types/earth.svg" alt="Drink" />
          <Text color="gray.800" fontWeight="600" fontSize="24px" mt="8">
            e mais...
          </Text>
        </GridItem>
      </Grid>
    </>
  );
}
