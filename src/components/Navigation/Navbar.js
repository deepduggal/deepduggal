import React from 'react';
import Logo from '../Logo';
import {StyleSheet, css} from 'aphrodite';
import { SocialIcon } from 'react-social-icons';
// import NavLink from './NavLink';

function Navbar({navLinks}) {
  return (
    <nav className={css(styles.nav)}>
      <Logo>Deep Duggal</Logo>
      <div>
        <SocialIcon url="https://linkedin.com/in/deepduggal" />
        &nbsp;&nbsp;
        <SocialIcon url="https://github.com/deepduggal" />
        &nbsp;&nbsp;
        <SocialIcon url="https://twitter.com/DeepDuggalDev" />
      </div>
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