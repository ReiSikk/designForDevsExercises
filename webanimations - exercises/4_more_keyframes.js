"use strict";

const animation = [
  { transform: "translate(81vw, 2vw)" },
  { transform: "translate(85vw, 20vw)" },
  { transform: "translate(42vw, 41vw)" },
  { transform: "translate(0vw, 20vw)" },
  { transform: "translate(81vw, 2vw)" },
];
const properties = {
  duration: 2500,
  iterations: Infinity,
};

const ball = document.querySelector("#ball");
ball.animate(animation, properties);
