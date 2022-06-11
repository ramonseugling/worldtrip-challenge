import type { NextPage } from "next";
import Banner from "../components/Banner";
import Header from "../components/Header";
import TravelTypes from "../components/TravelTypes";

const Home: NextPage = () => {
  return (
    <>
      {" "}
      <Header /> <Banner />
      <TravelTypes />
    </>
  );
};

export default Home;
