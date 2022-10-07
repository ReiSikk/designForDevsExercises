"use strict";

import { animate, timeline } from "https://cdn.skypack.dev/motion";

const sequence = [
  [".ball", { x: 400 }, { duration: 2 }],
  [".ball", { rotate: 200 }, { duration: 2, at: 0 }],
  [".ball", { x: [400, "100vw"], y: [0, "-100vh"] }, { duration: 1.2, at: "+0.5" }],
  [".ball", { scale: 0 }, { duration: 1.5, at: "-1.2" }],
];
timeline(sequence);
//animate(".ball", { x: 400 }, { duration: 2 });
//animation 2
//animate(".ball", { rotate: 200 }, { duration: 2 });

//pop the ball animation
//animate(".ball", { scale: 0 }, { duration: 0.15, delay: 2 });
