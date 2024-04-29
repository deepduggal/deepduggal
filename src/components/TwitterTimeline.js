import React from "react";
import { StyleSheet, css } from "aphrodite";
import { Elevation } from "@rmwc/elevation";

export default function TwitterTimeline() {
  return (
    <Elevation tag="div" z={5} className={css(styles.timeline)}>
      <a
        className="twitter-timeline"
        href="https://twitter.com/DeepDuggalDev?ref_src=twsrc%5Etfw"
      >
        Tweets by DeepDuggalDev
      </a>
      
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </Elevation>
  );
}

const styles = StyleSheet.create({
  timeline: {
    width: "100%",
    height: "100%",
    padding: "2rem",
    overflowY: "hidden",
  },
});
