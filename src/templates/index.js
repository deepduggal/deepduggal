// The Default Template for any page.
import React from "react";
import { StyleSheet, css } from "aphrodite";
// import Navbar from "../components/Navigation/Navbar";
// import Footer from "../components/Footer";
import Navbar from "../components/hurry-up/navbar";
import Footer from "../components/hurry-up/footer";

// Data
import navLinks from "../data/routes";

import PropTypes from "prop-types";

function DefaultTemplate({ children }) {
  return (
    <div className={"animated fadeIn " + css(styles.defaultTemplate)}>
      {/* Navigation (& Logo) */}
      {/* <Navbar navLinks={navLinks} /> */}
      <Navbar />
      {/* Main Content */}
      <main className="min-h-full w-full">{children}</main>
      {/* Footer */}
      <Footer />
    </div>
  );
}

const styles = StyleSheet.create({
  defaultTemplate: {
    position: "relative",
    height: "100%",
    width: "100%",
    // padding: "2rem"
  }
});

DefaultTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultTemplate;
