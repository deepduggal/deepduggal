import React, {PureComponent} from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import Projects from '../components/Projects';
import { Typography } from 'rmwc/Typography';
import {StyleSheet, css} from 'aphrodite';

// Data
import projects from "../data/projects";

class HomePage extends PureComponent {
  render () {
    return (
      <DefaultLayout>
        <h1 className={css(styles.header)}><Typography use={"headline3"}>Work</Typography></h1>
        <Projects projects={projects}/>
      </DefaultLayout>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    padding: "2rem"
  }
});

export default HomePage;