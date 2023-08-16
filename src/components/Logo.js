import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import { Typography } from 'rmwc/Typography';

function Logo({href='#'}) {
  return (
    <a href={href} className={css(styles.logo)}>
      <Typography use="headline3">Deep Duggal</Typography>
      <br/>
      <Typography use="headline5">Front End Engineer</Typography>
    </a>
  );
}

const styles = StyleSheet.create({
  logo: {
    textDecoration: "none",
    color: "#111111",
    ":hover": {
      color: "#999999",
      transition: "color 0.2s"
    }
  }
});

export default Logo;