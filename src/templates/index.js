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
    <div className={"animated fadeIn bg-slate-950 text-slate-100 font-sans transition-colors duration-300 min-h-screen flex flex-col justify-between selection:bg-blue-500 selection:text-white" + css(styles.defaultTemplate)}>
      {/* Navigation (& Logo) */}
      {/* <Navbar navLinks={navLinks} /> */}
      <Navbar />
      {/* Main Content */}
      <main className="relative z-10 my-auto py-8 px-6 max-w-7xl mx-auto w-full">{children}</main>
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
