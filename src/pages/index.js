import React, {PureComponent} from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import Projects from '../components/Projects';
import { Typography } from 'rmwc/Typography';
import {StyleSheet, css} from 'aphrodite';
import VideoBackground from '../components/Home/VideoBackground';
import TwitterTimeline from '../components/TwitterTimeline';

import projects from "../data/projects";

class HomePage extends PureComponent {
  render () {
    return (
      <DefaultLayout>
        {/* Intro Section */}
        {/* Overflow hidden. Quick fix for <VideoBackground> overflowing */}
        <section style={{overflow: 'hidden'}}> 
          <VideoBackground src="/assets/videos/abstract-wireframe.mp4">
            {/* <Typography tag="div" use={"headline1"}>I make Websites & Apps.</Typography>
            <Typography tag="div" use={"headline3"}>See my work below.</Typography> */}
          </VideoBackground>
        </section>
        {/* Projects Section */}
        <section>
          <h1 className={css(styles.header)}><Typography use={"headline3"}>Work</Typography></h1>
          <Projects projects={projects}/>
        </section>
        <TwitterTimeline/>
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