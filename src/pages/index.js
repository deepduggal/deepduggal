import React, { useEffect } from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import { Typography } from 'rmwc/Typography';

import { StyleSheet, css } from 'aphrodite';
import VideoBackground from '../components/Home/VideoBackground';
import TwitterTimeline from '../components/TwitterTimeline';

import projects from "../data/projects";
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

function HomePage() {
  // useEffect(() => {
  //   ScrollTrigger.create({
  //     trigger: "#homePage",
  //     start: "top top",
  //     endTrigger: "#twitter",
  //     end: "bottom 50%+=100px",
  //     onToggle: self => console.log("toggled, isActive:", self.isActive),
  //     onUpdate: self => {
  //       console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
  //     }
  //   });
  //   let ctx = gsap.context(() => {
  //     let tl = gsap.timeline({
  //       // yes, we can add it to an entire timeline!
  //       scrollTrigger: {
  //         trigger: "#homePage",
  //         pin: true,   // pin the trigger element while active
  //         start: "top top", // when the top of the trigger hits the top of the viewport
  //         end: "+=500", // end after scrolling 500px beyond the start
  //         scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  //         snap: {
  //           snapTo: "labels", // snap to the closest label in the timeline
  //           duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
  //           delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
  //           ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
  //         }
  //       }
  //     });

  //     // add animations and labels to the timeline
  //     tl.addLabel("start")
  //       .addLabel("intro")
  //       .from("#intro", { scale: 0.3, rotation: 45, autoAlpha: 0 })
  //       .addLabel("skills")
  //       .from("#skills", { backgroundColor: "#28a92b" })
  //       .addLabel("projects")
  //       .to("#projects", { rotation: 360 })
  //       .addLabel("twitter")
  //       .to("#twitter", { rotation: 360 })
  //       .addLabel("end");
  //   });
  //   return () => ctx.revent();
  // }, []);

  return (
    <DefaultLayout>
      {/* Intro Section */}
      {/* Overflow hidden. Quick fix for <VideoBackground> overflowing */}
      <section id="intro">
        <VideoBackground src="/assets/videos/abstract-wireframe.mp4">
          {/* <Typography tag="div" use={"headline3"}>I make Websites & Apps.</Typography>
          <Typography tag="div" use={"headline5"}>More below.</Typography> */}
        </VideoBackground>
      </section>

      {/* Skills section */}
      <section id="#skills">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="#projects">
        <h1 className={css(styles.header)}><Typography use={"headline3"}>Work</Typography></h1>
        <Projects projects={projects} />
      </section>

      {/* Twitter Section */}
      <section id="#twitter">
        <TwitterTimeline />
      </section>
    </DefaultLayout>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: "2rem"
  }
});

export default HomePage;