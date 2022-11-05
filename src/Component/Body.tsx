import React from "react";
// import Buildein from "./Buildein";
import Bussiness_any from "./Bussiness_any";
import Cards from "./Cards";
import Hero from "./Hero";
import Hubs from "./Hubs";
import Newbie from "./Newbie";
import Story from "./Story";
import Video from "./Video";

const Body = () => {
  return (
    <div>
      {/* <Buildein /> */}
      <Video />
      <Bussiness_any />
      <Hubs />
      <Story />
      {/* <Newbie /> */}
      {/* <Cards /> */}
      <Hero />
    </div>
  );
};

export default Body;
