import { Box, Divider, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Banner from "../components/Banner";
import Header from "../components/Header";
import { Slide } from "../components/Slide";
import TravelTypes from "../components/TravelTypes";

const Home: NextPage = () => {
  return (
    <>
      {" "}
      <Header /> <Banner />
      <TravelTypes />
      <Divider w="90px" my="80px" mx="auto" borderColor="gray.800" />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        mb="52px"
      >
        <Text fontSize="36px" fontWeight="500" color="gray.800">
          Vamos nessa?
        </Text>
        <Text fontSize="36px" fontWeight="500" color="gray.800">
          Então escolha seu continente
        </Text>
      </Box>
      <Box>
        <Slide />
      </Box>
    </>
  );
};

export default Home;
