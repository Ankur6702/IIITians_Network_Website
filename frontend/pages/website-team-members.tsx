import type { NextPage } from "next";
import { BrandIdentity, WeAre, WhoWeAre } from "../components/WebsiteTeamMembers";
import { Navbar } from "../components/Home";

const WebsiteTeamMembers: NextPage = () => {
  return (
    <>
      <Navbar />
      <BrandIdentity />
      <WeAre />
      <WhoWeAre />
    </>
  );
};

export default WebsiteTeamMembers;
