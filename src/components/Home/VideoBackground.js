import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function VideoBackground({src, alt, poster="", children}) {
  return (
    <div className={css(styles.container)}>
      <video className={css(styles.video)} playsInline autoPlay muted="muted" loop="loop" poster={poster}>
        <source src={src} alt={alt} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      <div className={css(styles.content)}>
        {children}
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100vh",
    width: "100vw",
    overflow: 'hidden',
    // textAlign: "center",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center"
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    zIndex: -1,
    // display: 'block',
    // margin: 'auto',
    objectFit: 'cover',
    objectPosition: 'center'
  },
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    zIndex: 1
  }
});