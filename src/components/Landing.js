import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import { Typography } from '@rmwc/typography'

function Landing() {
  return (
    <section className={css(styles.landing)}>
      <Typography use="headline5">Full-Stack Developer</Typography>
      {/* <br/><br/> */}
      {/* <Typography className={css(styles.skills)} use="body1">HTML · CSS · ES6 JavaScript · React · Redux · Immutable.js · GraphQL · MongoDB · Express.js · Hapi.js · NPM · Node.js · Vue.js · Git · Pug · SASS · Bootstrap · jQuery · GSAP · JSON · AJAX · Python · Java · SQL · Linux · Cross-Browser Compatibility · Responsive Web Development · Web Performance Optimization */}
      {/* </Typography> */}
    </section>
  )
}

const styles = StyleSheet.create({
  landing: {
    padding: '4rem',
    backgroundColor: '#111111',
    color: '#ffffff'
  },
  skills: {
    fontStyle: 'italic',
    wordSpacing: '0.125rem'
  }
})

export default Landing
