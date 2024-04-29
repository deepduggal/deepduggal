import React from "react";
import { StyleSheet, css } from "aphrodite";
// import Navbar from "../components/Navigation/Navbar";
// import Footer from "../components/Footer";
import Navbar from "../components/hurry-up/navbar";

// Data
import navLinks from "../data/routes";

import PropTypes from "prop-types";

function DefaultLayout({ children }) {
  return (
    <div className={"animated fadeIn " + css(styles.defaultLayout)}>
      {/* Navigation (& Logo) */}
      {/* <Navbar navLinks={navLinks} /> */}
      <Navbar />
      {/* Main Content */}
      <main className={css(styles.main)}>{children}</main>
      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}

const styles = StyleSheet.create({
  defaultLayout: {
    position: "relative",
    height: "100%",
    width: "100%",
    // padding: "2rem"
  },
  main: {
    height: "100%",
    width: "100%",
  },
});

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
