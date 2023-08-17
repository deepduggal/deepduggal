import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import Projects from '../components/Projects';
import { Typography } from 'rmwc/Typography';
// import { ChipSet, Chip } from 'rmwc/Chip';
import {StyleSheet, css} from 'aphrodite';
import VideoBackground from '../components/Home/VideoBackground';
import TwitterTimeline from '../components/TwitterTimeline';

import projects from "../data/projects";

// const skillsData = ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Expo', 'React Native', 'Express JS', 'MongoDB', 'Mongoose JS', 'Jest', 'React Native Testing Library'];

function HomePage() {
  return (
    <DefaultLayout>
      {/* Intro Section */}
      {/* Overflow hidden. Quick fix for <VideoBackground> overflowing */}
      <section> 
        <VideoBackground src="/assets/videos/abstract-wireframe.mp4">
          {/* <Typography tag="div" use={"headline3"}>I make Websites & Apps.</Typography>
          <Typography tag="div" use={"headline5"}>More below.</Typography> */}
        </VideoBackground>
      </section>
      {/* Skills section */}
      {/* <section>
        <ChipSet>
          {skillsData.map(label => <Chip key={label} label={label} />)}
        </ChipSet>
      </section> */}
      {/* Projects Section */}
      <section>
        <h1 className={css(styles.header)}><Typography use={"headline3"}>Work</Typography></h1>
        <Projects projects={projects}/>
      </section>
      <TwitterTimeline/>
    </DefaultLayout>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: "2rem"
  }
});

export default HomePage;