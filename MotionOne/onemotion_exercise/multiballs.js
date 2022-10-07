"use strict";

import { animate, stagger } from "https://cdn.skypack.dev/motion";

animate(".ball", { y: [0, -400, 0] }, { duration: 1.7, delay: stagger(0.2), repeat: 1, easeing: "none" }).finished.then(
  () => {
    animate(".ball", { x: [0, 10, 40, 70, 100, 70, 10, 0] }, { duration: 0.5, delay: stagger(0.1), repeat: 1 });
  }
);
