import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Navbar from '../components/Navigation/Navbar';
// import Footer from '../components/Footer';

// Data
import navLinks from "../data/routes";

function DefaultLayout({ children }) {
  return (
    <div className={"animated fadeIn " + css(styles.defaultLayout)}>
      {/* Navigation (& Logo) */}
      <Navbar navLinks={navLinks} />
      <main className={css(styles.main)}>
        {children}
      </main>
      {/*<Footer/>*/}
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
    width: "100%"
  }
});

export default DefaultLayout;