import React, { memo, useEffect, useRef } from "react";
import { StyleSheet, css } from "aphrodite";
import { Elevation } from "@rmwc/elevation";
import gsap from "gsap";
import '../animations/gradient.css'

import PropTypes from "prop-types";

// TODO: Move. Need a place for reusable css styles
const mediaQueries = {
  sm: "@media all and (min-width: 0px)",
  md: "@media all and (min-width: 768px)",
  lg: "@media all and (min-width: 1024px)",
};

// TODO: Use flexbox well, and avoid media queries?
const projectStyles = StyleSheet.create({
  project: {
    [mediaQueries.sm]: {
      minHeight: "calc(350px - 1rem)",
      maxHeight: "calc(90vh - 2rem)",
      width: "calc(100% - 2rem)",
      margin: '0 1rem 1rem 1rem',
      // maxHeight: '100vh', // Limit height @todo on mobile, bc it'll look good.
      // transition: 'transform .2s ease-in-out',
      // // transform: 'scale(1.2)',

      // ':hover > img': {
      //   // animation: 'pulse 1s infinite',
      //   transform: 'scale(1.1)',
      //   transition: 'transform .2s ease-in-out',
      // },
      // ':not(:hover) > img': {
      //   transform: 'scale(1.0)',
      //   transition: 'transform .2s ease-in-out',
      // }
    },
    [mediaQueries.md]: {
      width: "calc(50% - 2rem)",
      // margin: '0 0 1rem 0',
    },
  },
  projectImg: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    zIndex: "-1",
    objectFit: "cover",
    objectPosition: "center center",
    ":hover": {
      // TODO: Put the animation's here. Issue: Hover on img is not triggering animation.
    },
  },

  projectName: {
    position: "absolute",
    margin: 0,
    bottom: "1rem",
    left: "1rem",
    zIndex: 1,
  },
});

// Hover Animations
const ZoomIn = (el) => gsap.to(el, { transform: "scale(1.2)" });
const ZoomOut = (el) => gsap.to(el, { transform: "initial" });

const Project = memo(function Project({ name, img, alt, liveUrl }) {
  const projectImgRef = useRef(null);

  return (
    <Elevation
      className={`project gradient-border flex relative justify-evenly rounded-xl overflow-hidden ${css(projectStyles.project)}`}
      z={10}
      key={name}
      tag="a"
      href={liveUrl}
    >
      <img
        ref={projectImgRef}
        onFocus={() => ZoomIn(projectImgRef.current)}
        onBlur={() => ZoomOut(projectImgRef.current)}
        className={"projectImg " + css(projectStyles.projectImg)}
        src={img}
        alt={alt}
      />
      <div class="bg-neutral-900 absolute p-4 bottom-0 text-neutral-100 bg-opacity-90 w-full">
        <h3 class="font-bold text-2xl mb-2">{name}</h3>
        <p class="text-neutral-300">{alt}</p>
      </div>
    </Elevation>
  );
});

Project.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  liveUrl: PropTypes.string.isRequired,
};

// Comonent for displaying projects
function Projects({ projects }) {
  // Floating animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".project", {
        duration: 1.5,
        y: -20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.25,
        scrollTrigger: {
          trigger: ".projects",
          start: "top bottom",
          toggleActions: "play pause play pause",
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className={"projects " + css(projectsContainer.container)}>
      {projects.map((data) => {
        return <Project {...data} key={data.name} />;
      })}
    </section>
  );
}

Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      liveUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const projectsContainer = StyleSheet.create({
  container: {
    [mediaQueries.sm]: {
      // height: "100%"
      width: "100%",
      display: "flex",
      flexFlow: "column wrap",
      justifyContent: "center",
    },
    [mediaQueries.md]: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      margin: "0 1rem",
      width: "calc(100% - 2rem)",
    },
  },
});

export default Projects;
