import React from "react";
import { FeaturedProject } from "../FeaturedProject";

const Featured = () => {
  return (
    <section>
      <FeaturedProject float={"left"} />
      <FeaturedProject float={"right"} />
      <FeaturedProject float={"left"} />
      <FeaturedProject float={"right"} />
    </section>
  );
};

export default Featured;
