import React from "react";
import App from "next/app";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

export default class MyApp extends (App, React.Component) {
  constructor(props) {
    super(props);
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: "",
      loading: "is-loading"
    };
    this.handleOpenArticle = this.handleOpenArticle.bind(this);
    this.handleCloseArticle = this.handleCloseArticle.bind(this);
  }
  
  
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: "" });
    }, 100);
  }
  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  handleOpenArticle(article) {
    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article
    });

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      });
    }, 325);

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout
      });
    }, 350);
  }

  handleCloseArticle() {
    this.setState({
      articleTimeout: !this.state.articleTimeout
    });

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      });
    }, 325);

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: ""
      });
    }, 350);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <title>mib-markus</title>
        <Component {...pageProps} />
        <div
        className={`body ${this.state.loading} ${
          this.state.isArticleVisible ? "is-article-visible" : ""
        }`}
      >
          <div id="wrapper">
            <Header
              onOpenArticle={this.handleOpenArticle}
              timeout={this.state.timeout}
            />
            <Main
              isArticleVisible={this.state.isArticleVisible}
              timeout={this.state.timeout}
              articleTimeout={this.state.articleTimeout}
              article={this.state.article}
              onCloseArticle={this.handleCloseArticle}
            />
            <Footer timeout={this.state.timeout} />
          </div>
          <div id="bg" />
      </div>
      </React.Fragment>
    );
  }
}
