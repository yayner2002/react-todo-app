import React from "react";
import { matchRoutes } from "react-router-dom";

const About = (props) => {
  console.log(matchRoutes());
  return <div>hello from about page</div>;
};
export default About;
