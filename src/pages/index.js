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
import { Sparkles } from "lucide-react";

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
      <section id="#projects" className="w-full bg-slate-950 text-slate-100 py-12 px-3 sm:px-6 lg:px-8 font-sans antialiased min-h-screen">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
          <Projects projects={projects} />
        </div>
      </section>

      {/* Skills section */}
      <section id="#skills" className={`w-full bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8 font-sans antialiased min-h-screen`}>
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Header Title Section */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" /> Technical Expertise
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
              Skills & Proficiency
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              Categorized breakdown of modern frameworks, programming languages, backend architecture, and engineering tools.
            </p>
          </div>

          <Skills />
        </div>
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
