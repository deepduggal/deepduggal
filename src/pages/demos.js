import React from 'react'
import CodepenEmbed from '../components/CodepenEmbed'
import { StyleSheet, css } from 'aphrodite'
import { Typography } from '@rmwc/typography'
import DefaultLayout from '../layouts/DefaultLayout'

// TODO: Move. Need a place for reusable styles
const mediaQueries = {
  sm: '@media all and (min-width: 0px)',
  md: '@media all and (min-width: 768px)',
  lg: '@media all and (min-width: 1024px)'
}

// TODO: Pass down styles (as className={css(styles.demo)}) from demos page to <CodepenEmbed>
function DemosPage() {
  return (
    <DefaultLayout>
      <Typography tag="h1" use="headline1">Demos</Typography>
      <Typography tag="h6" use="subtitle1">Small things I&rsquo;ve made.</Typography>
      <div className={css(styles.demosContainer)}>
        <CodepenEmbed className={css(styles.demo)} height="564" slugHash="qrNWNy" />
        <CodepenEmbed className={css(styles.demo)} height="564" slugHash="xRBbKZ" />
        <CodepenEmbed className={css(styles.demo)} height="564" slugHash="aWXggZ" />
        <CodepenEmbed className={css(styles.demo)} height="564" slugHash="OpVrdR" />
      </div>
    </DefaultLayout>
  )
}

const styles = StyleSheet.create({
  demosContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },
  demo: {
    margin: '0 auto',
    boxSizing: 'border-box',

    [mediaQueries.sm]: {
      flex: '100%',
      padding: '2rem'
    },
    [mediaQueries.md]: {
      flex: '50%'
    },
    [mediaQueries.lg]: {
      flex: '25%'
    }
  }
})

export default DemosPage
