import React /* , { useEffect } */ from "react";
import { StyleSheet, css } from "aphrodite";
import DefaultTemplate from "../templates/index.js";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

// import VideoBackground from "../components/Home/VideoBackground";
// import TwitterTimeline from "../components/TwitterTimeline";
import Hero from "../components/hurry-up/hero";
import HeaderSectionWithStats from "../components/marketing/HeaderSectionWithStats";
import LogosSection from "../components/marketing/LogosSection";
import TestimonialSection from "../components/marketing/TestimonialSection";

import projects from "../data/projects";
import ContactForm from "../components/ContactForm";
import { Icon } from "rmwc";

// TODO: Move. Need a place for reusable css styles
const mediaQueries = {
  sm: "@media all and (min-width: 0px)",
  md: "@media all and (min-width: 768px)",
  lg: "@media all and (min-width: 1024px)",
};
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

const sectionStyle = 'mb-8 px-4 md:px-8';

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
    <DefaultTemplate>
      <Hero />
      <LogosSection />
      <HeaderSectionWithStats />

      {/* Intro Section */}
      {/* Overflow hidden. Quick fix for <VideoBackground> overflowing */}
      {/* <section id="intro" className={css(styles.section)}>
        <VideoBackground src="/assets/videos/abstract-wireframe.mp4">
        </VideoBackground>
      </section> */}

      {/* Projects Section */}
      <section id="#projects" className={`${sectionStyle} my-8 md:my-16`}>
        <h1 className='mx-3 my-12 text-5xl font-bold uppercase text-center'>Work</h1>
        <div className="text-center mb-10 p-4"><Icon className='text-4xl' icon="construction"/></div>
        <Projects projects={projects} />
      </section>

      {/* Skills section */}
      <section id="#skills" className={`${sectionStyle} bg-brand-blue py-8 lg:py-16`}>
        <h1 className='mx-3 my-12 text-5xl font-bold uppercase text-center text-neutral-100'>Skills</h1>
        <div className="text-center mb-10 p-4"><Icon className='text-white text-4xl' icon="psychology"/></div>
        <Skills />
      </section>

      <TestimonialSection />

      {/* Contact Section */}
      {/* <section id="contactForm" className="p-8">
        <ContactForm />
      </section> */}

      {/* Twitter Section */}
      {/* <section id="#twitter" className={css(styles.section)}>
        <TwitterTimeline />
      </section> */}
    </DefaultTemplate>
  );
}


const styles = StyleSheet.create({
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
