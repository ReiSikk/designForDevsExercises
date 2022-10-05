"use strict";

const ball = document.querySelector("#ball");

// Create keyframes and properties for falling and zoom
const falling_properties = {
  duration: 1000,
  iterations: Infinity,
  direction: "alternate",
  easing: "ease-in-out",
  animation: "falling_anim",
};
const zoom_properties = {
  duration: 500,
  iterations: 1,
  fill: "forwards",
  //composites default value is replace where the actively animating property's value simply replaces any previous set value
  // "add" does so that both animation will be seen as the browser on the fly figures out the appropriate transformation at a given point
  composite: "add",
};
const falling = [{ transform: "translateY(-20vw)" }, { transform: "translateY(65vw)" }];
const zoom = [{ transform: "scale(1)" }, { transform: "scale(0)" }];

// register click
document.querySelector("#ball").addEventListener("mousedown", ballClicked);
const falling_anim = ball.animate(falling, falling_properties);
console.log(falling_properties.animation);

/* const ball = document.querySelector("#ball");
const animation = ball.animate(keyframes, properties); */
// start falling animation

function ballClicked() {
  console.log("Ball clicked!");
  // pause falling animation
  falling_anim.pause();
  falling_properties.animation = "";
  // start zoom-animation
  const zoom_anim = ball.animate(zoom, zoom_properties);
  // restart fall
  zoom_anim.onfinish = (event) => {
    zoom_anim.cancel();
    // cancel the falling anim so it restarts from it's initial start
    falling_anim.cancel();
    //play the falling_anim
    falling_anim.play();
  };
}
