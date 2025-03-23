import React from "react";
import gitHub from "./../../img/icons/gitHub-black.svg";

export const BtnGitgub = ({ link }) => {
  return (
    <div>
      {link.includes("github") ? (
        <a href={link} target="_blank" className="btn-outline" rel="noreferrer">
          <img src={gitHub} alt="" />
          GitHub repo
        </a>
      ) : (
        <a href={link} target="_blank" className="btn-outline" rel="noreferrer">
          Visit site
        </a>
      )}
    </div>
  );
};
