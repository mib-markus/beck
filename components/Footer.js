import PropTypes from "prop-types";

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: "none" } : {}}>
    <p className="copyright">
      &copy; mib-markus - {new Date().getFullYear()}. Built with:{" "}
      <a href="https://github.com/zeit/next.js">Next.js</a>
      <br />
      Designed by: <a href="https://html5up.net">HTML5 UP</a> and released for
      free under the <a href="https://html5up.net/license">Creative Commons</a>{" "}
      license.
    </p>
  </footer>
);

Footer.propTypes = {
  timeout: PropTypes.bool
};

export default Footer;
