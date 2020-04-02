import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div>
      <h2 className="major">Contact</h2>
      <p>Contact me over following platforms:</p>
      <ul className="icons">
        <li>
          <a href="https://de.linkedin.com/in/markus-beck?trk=people-guest_people_search-card">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href="https://github.com/mib-markus">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
      <span className="image main">
        <img src="/images/LogoMakr_9xm1vx.png" alt="" />
        <p className="copyright">
          &copy; mib-markus - {new Date().getFullYear()}.
        </p>
      </span>

    </div>
  );
}
