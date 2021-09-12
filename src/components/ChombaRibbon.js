import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

function ChombaRibbon({ projectName }) {
  return (
    <div className="top-ribbon">
      <h3 className="proj-name">{projectName}</h3>
      <ul className="nav-link">
        <li>
          <a href="https://twitter.com/chombazm">
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/chomba-chanda-bab8ab20b/">
            <LinkedInIcon />
          </a>
        </li>
        <li>
          <a href="https://github.com/chombazm/Zochita.git">
            <GitHubIcon />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ChombaRibbon;
