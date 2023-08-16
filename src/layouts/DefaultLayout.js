import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// Data
import navLinks from "../data/routes";

function DefaultLayout({children}) {
  return (
    <div className={"animated fadeIn " + css(styles.defaultLayout)}>
        <Navbar navLinks={navLinks}/>
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
        width: "100%"
    },
    main: {
        height: "100%",
        width: "100%"
    }
});

export default DefaultLayout;