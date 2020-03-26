import PropTypes from "prop-types";

import Main from "../components/Main";

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

IndexPage.propTypes = {
  route: PropTypes.object
};

export default IndexPage;
