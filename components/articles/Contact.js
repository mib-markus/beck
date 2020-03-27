import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import { loadCSS } from "fg-loadcss";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import Icon from "@material-ui/core/Icon";

export default function Intro() {
//   React.useEffect(() => {
//     loadCSS(
//       "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
//       document.querySelector("#font-awesome-css")
//     );
//   }, []);

  return (
    <div>
      <h2 className="major">Contact</h2>
      <form method="post" action="#">
        <div className="field half first">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="field half">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="4"></textarea>
        </div>
        <ul className="actions">
          <li>
            <input type="submit" value="Send Message" className="special" />
          </li>
          <li>
            <input type="reset" value="Reset" />
          </li>
        </ul>
      </form>
      <ul className="icons">
        <li>
          <a href="https://de.linkedin.com/in/markus-beck?trk=people-guest_people_search-card">
            {/* <Icon className="fab fa-linkedin" style={{ fontSize: 38 }} /> */}
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href="https://github.com/mib-markus">
          {/* <Icon className="fab fa-github" style={{ fontSize: 38 }} /> */}
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </div>
  );
}
