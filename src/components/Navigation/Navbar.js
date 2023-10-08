import React from 'react';
import Logo from '../Logo';
import { StyleSheet, css } from 'aphrodite';
import SocialLinks from '../SocialLinks';
// import NavLink from './NavLink';


function Navbar({ navLinks }) {
  return (
    <nav className={css(styles.nav)}>
      <Logo>Deep Duggal</Logo>
      <SocialLinks />
      {/*<div className={css(styles.links)}>*/}
      {/*{navLinks.map(({name, to}) => {*/}
      {/*return (*/}
      {/*<NavLink href={to}>{name}</NavLink>*/}
      {/*);*/}
      {/*})}*/}
      {/*</div>*/}
    </nav>
  );
}

const styles = StyleSheet.create({
  nav: {
    width: "100%",
    padding: "2rem"
  },
  links: {
    height: "100%",
    float: "right"
  }
});

export default Navbar;