import PropTypes from "prop-types";
import Link from "next/link";

const Header = props => (
  <header id="header" style={props.timeout ? { display: "none" } : {}}>
    <Link href="https://github.com/mib-markus">
      <img
        className="logo"
        src="/beck/images/LogoMakr_9xm1vx.png"
        alt=""
      />
    </Link>
    <div className="content">
      <div className="inner">
        <h1>Markus Beck</h1>
        <br />
        <br />
        <h4>
          My Passions are Event Storming & <br />
          <br />
          Designing Event Streaming Systems.
          <br />
          <br />
          <br />
          <br />I ❤ coding as a Cloud Solution Architect.
        </h4>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="#intro"
            onClick={() => {
              props.onOpenArticle("intro");
            }}
          >
            Intro
          </a>
        </li>
        <li>
          <a
            href="#work"
            onClick={() => {
              props.onOpenArticle("work");
            }}
          >
            Work
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={() => {
              props.onOpenArticle("about");
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => {
              props.onOpenArticle("contact");
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool
};

export default Header;
