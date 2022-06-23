import type { NextPage } from "next";
import Head from "next/head";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Header } from "../components/Header/Header";
import { Slide } from "../components/Slide/Slide";
import TravelTypes from "../components/TravelTypes/TravelTypes";
import { Banner } from "../components/Banner/Banner";

const Home: NextPage = () => {
  return (
    <Flex direction="column">
      <Head>
        <title>WorldTrip - Home</title>
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta property="og:title" content="WorldTrip" />
        <meta name="twitter:title" content="WorldTrip" />
      </Head>
      <Header />
      <Banner />
      <TravelTypes />
      <Box
        w={["60px", "90px"]}
        mx="auto"
        h="2px"
        bg="gray.700"
        my={["9", "20"]}
      />
      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>
      <Box w="100%" h={["250", "450"]}>
        <Slide />
      </Box>
    </Flex>
  );
};

export default Home;
