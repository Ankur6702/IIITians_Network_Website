import type { NextPage } from "next";
import { WorkingTeam, WhatWeDo, OurApproach, OurRoles, Leadership } from "../components/CoreMembers";
import { Navbar } from "../components/Home";

const CoreMembers: NextPage = () => {
  return (
    <>
      <Navbar />
      <WorkingTeam />
      <WhatWeDo />
      <OurApproach />
      <OurRoles />
      <Leadership />
    </>
  );
};

export default CoreMembers;
