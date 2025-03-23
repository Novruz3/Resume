import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const Project = ({ title, img, index }) => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <NavLink
      to={`/project/${index}`}
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <li className="project">
        <img src={img} alt={title} className="project__img" />
        <h3 className="project__title">{title}</h3>
      </li>
    </NavLink>
  );
};
