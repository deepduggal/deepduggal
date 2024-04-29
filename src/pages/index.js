import React /* , { useEffect } */ from "react";
import { Typography } from "@rmwc/typography";
import { StyleSheet, css } from "aphrodite";
import DefaultLayout from "../layouts/DefaultLayout";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

import VideoBackground from "../components/Home/VideoBackground";
import TwitterTimeline from "../components/TwitterTimeline";
import Hero from "../components/hurry-up/hero";

import projects from "../data/projects";

// TODO: Move. Need a place for reusable css styles
const mediaQueries = {
  sm: "@media all and (min-width: 0px)",
  md: "@media all and (min-width: 768px)",
  lg: "@media all and (min-width: 1024px)",
};
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
      <Hero />
      {/* Intro Section */}
      {/* Overflow hidden. Quick fix for <VideoBackground> overflowing */}
      {/* <section id="intro" className={css(styles.section)}>
        <VideoBackground src="/assets/videos/abstract-wireframe.mp4">
        </VideoBackground>
      </section> */}

      {/* Skills section */}
      <section id="#skills" className={css(styles.section)}>
        <Typography
            use="headline3"
            tag="h1"
            className={css(styles.sectionHeader)}
          >
            Skills
        </Typography>
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="#projects" className={css(styles.section)}>
        <Typography
          use="headline3"
          tag="h1"
          className={css(styles.sectionHeader)}
        >
          Work
        </Typography>
        <Projects projects={projects} />
      </section>

      {/* Twitter Section */}
      {/* <section id="#twitter" className={css(styles.section)}>
        <TwitterTimeline />
      </section> */}
    </DefaultLayout>
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    margin: "0 1rem", // Adjusted projects header for border-radius of projects
    marginBottom: "2rem", // For section headers (not just projects header, but that was the only one when I styled it)
  },
  // Sections of this page
  section: {
    // TODO: Side padded section, but should be page padding?
    [mediaQueries.sm]: {
      marginBottom: "2rem",
      padding: "0 1rem",
    },
    [mediaQueries.md]: {
      padding: "0 2rem",
    },
  },
});

export default HomePage;
