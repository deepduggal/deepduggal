import React, { memo } from "react";
import { useScriptTag } from "../hooks/pages";
// import { Card } from "rmwc";

function CodepenEmbed({ className, height = 300, slugHash, userLink = "https://codepen.io/waxter013", defaultTab = "result", username = "waxter013" }) {
  useScriptTag("https://cpwebassets.codepen.io/assets/embed/ei.js");

  // Codepen embed styles
  const pStyles = {
    "height": `${height}px`,
    display: "flex",
    "boxSizing": "border-box",
    "alignItems": "center",
    "justifyContent": "center",
    "border": "2px solid",
    "margin": "1em 0",
    "padding": "1em"
  };

  return (
    <div className={className}>
      <p className="codepen" data-height={height} data-default-tab={defaultTab} data-slug-hash={slugHash} data-user={username} style={pStyles}>
        <span>See this <a href={`${userLink}/pen/${slugHash}`}>Pen</a> by Deep Duggal (<a href={userLink}>@waxter013</a>)
          on <a href="https://codepen.io">CodePen</a>.</span>
      </p>
    </div >
  );
}

export default memo(CodepenEmbed);