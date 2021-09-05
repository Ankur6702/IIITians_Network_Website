import type { NextPage } from "next";
import { Culture, Discord, FounderStory, LandingPage } from "../components/About_Us";
import { Navbar } from "../components/Home";

const About: NextPage = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Discord />
      <FounderStory />
      <Culture />
    </>
  );
};

export default About;