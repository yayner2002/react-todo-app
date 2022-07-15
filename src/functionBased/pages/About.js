import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import SinglePage from "./SinglePage";

const About = () => {
  return (
    <div className="about__content">
      <ul className="about__list">
        <li>
          <Link to="about-app">About App</Link>
        </li>
        <li>
          <Link to="about-author">About Author</Link>
        </li>
      </ul>
      <Routes>
        <Route path=":slug" element={<SinglePage  />}/>
      </Routes>
    </div>
  );
};
export default About;
