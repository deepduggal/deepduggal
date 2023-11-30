import React, { PureComponent } from "react";
import { StyleSheet, css } from "aphrodite";

class Footer extends PureComponent {
  render() {
    return (
      <div className={css(styles.footer)}>
        <h3>Website by &copy; Deep Duggal</h3>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    padding: "2rem 4rem",
    backgroundColor: "#111111",
    color: "#ffffff",
    textAlign: "right",
    // position: "absolute",
    // bottom: 0,
    // left: 0,
    width: "100%",
  },
});

export default Footer;
