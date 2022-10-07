"use strict";

import { animate, scroll } from "https://cdn.skypack.dev/motion";

//animate(".box", { scale: 2 }, { duration: 2 });

// Progress bar representing gallery scroll
scroll(animate(".progress", { scaleX: [0, 1] }));

document.querySelectorAll("section").forEach((section) => {
  const header = section.querySelector("h2");
  scroll(animate(header, { y: [-400, 400] }), {
    target: header,
  });
});

/// timeline
/* const sequence = [
  [".ball", { x: 400 }, { duration: 2 }],
  [".ball", { rotate: 200 }, { duration: 2, at: 0 }],
  [".ball", { x: [400, "100vw"], y: [0, "-100vh"] }, { duration: 1.2, at: "+0.5" }],
  [".ball", { scale: 0 }, { duration: 1.5, at: "-1.2" }],
];
timeline(sequence); */
