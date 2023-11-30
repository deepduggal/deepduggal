import React from "react";
import { StyleSheet, css } from "aphrodite";
import { Elevation } from "@rmwc/elevation";

export default function VideoBackground({ src, alt, poster = "", children}) {
  return (
    <div className={css(styles.container)}>
      <Elevation z={10}>
        <video
          className={css(styles.video)}
          playsInline
          autoPlay
          muted // TODO: Not muted or autoplaying in safari
          loop
          poster={poster}
        >
          <source src={src} alt={alt} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Elevation>
      {children && <div className={css(styles.content)}>{children}</div>}
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100vh",
    width: "100%",
    overflow: "hidden",
    borderRadius: "1rem",
    // textAlign: "center",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center"
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    zIndex: -1,
    // display: 'block',
    // margin: 'auto',
    objectFit: "cover",
    objectPosition: "center",

    ':hover': {
      transform: "scale(1.2)",
    }
  },
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    zIndex: 1,
  },
});
