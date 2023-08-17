import React, {memo} from 'react';
import {StyleSheet, css} from 'aphrodite';

const projectStyles = StyleSheet.create({
  project: {
    '@media all and (min-width: 0px)': {
      position: "relative",
      minHeight: "calc(350px - 1rem)",
      maxHeight: "calc(90vh - 2rem)",
      margin: "0 1rem 1rem 1rem",
      width: "calc(100% - 2rem)",
      flex: '1 1 auto',
    },
    '@media all and (min-width: 768px)': {
      width: "calc(50% - 2rem)",
      // margin: '0 0 1rem 0',
    }
  },
  projectImg: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    zIndex: "-1",
    objectFit: "cover",
    objectPosition: "center center"
  },
  projectName: {
    position: "absolute",
    margin: 0,
    bottom: "1rem",
    left: "1rem",
    zIndex: 1
  }
});

const Project = memo(function ({name, img, alt, liveUrl}) {
  return (
    <a className={css(projectStyles.project)} href={liveUrl}>
      <img className={css(projectStyles.projectImg)} src={img} alt={alt} />
    </a>
  )
});

function Projects({projects}) {
  return (
    <section className={css(projectsContainer.container)}>
      {projects.map((data, id) => {
        return (
          <Project {...data} key={id}/>
        );
      })}
    </section>
  );
}

const projectsContainer = StyleSheet.create({
  container: {
    '@media all and (min-width: 0px)': {
        // height: "100%"
        width: "100%",
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "center",
    },
    '@media all and (min-width: 768px)': {
      flexDirection: 'row',
      justifyContent: "space-evenly",
      margin: '0 1rem',
      width: 'calc(100% - 2rem)',
    }
  }
});

export default Projects;