"use strict";

window.addEventListener("DOMContentLoaded", screen);
let body;
let eyes;
let nose;
let paws;
const features = {
  hat1: false,
  hat2: false,
  hat3: false,
  bow1: false,
  bow2: false,
  bow3: false,
  glasses1: false,
  glasses2: false,
  glasses3: false,
};
function screen() {
  document.querySelector("#screen").classList.remove("hidden");
  document.querySelector("button").addEventListener("click", hidescreen);
  function hidescreen() {
    document.querySelector("#screen").classList.add("hidden");
  }
  start();
}
async function start() {
  let response = await fetch("bear-white-01.svg");
  let mySvgData = await response.text();
  document.querySelector("#svgloc").innerHTML = mySvgData;
  body = document.querySelector("#body");
  paws = document.querySelector("#paws");
  eyes = document.querySelector("#eyes");
  nose = document.querySelector("#nose");
  init();
  startfeatures();
}
function startfeatures() {
  document.querySelectorAll(".option").forEach((option) => option.addEventListener("click", toggleOption));
}

function toggleOption(event) {
  const target = event.currentTarget;
  console.log(target);
  const feature = target.dataset.feature;
  console.log(feature);

  if (features[feature] === false) {
    // console.log(features[feature]);
    console.log("it is true");
    features[feature] = true;
    console.log(features[feature]);
  } else if (features[feature] === true) {
    console.log(features[feature]);
    console.log("it is false");
    features[feature] = false;
  }
  if (features[feature]) {
    // console.log(features[feature]);
    // feature added

    console.log(`Feature ${feature} is turned on!`);
    target.classList.add("chosen");
    document.querySelector(`#product-preview [data-feature="${feature}"]`).classList.remove("hide");
    const elem = document.createElement("img");
    elem.id = `${feature}created`;
    elem.src = `${feature}.png`;
    // console.log(elem.src);
    document.querySelector("#selected ul").append(elem);
    elem.style.height = "8vw";

    //flip animation

    const start = target.querySelector("img").getBoundingClientRect();
    const end = elem.getBoundingClientRect();

    const xdiff = start.x - end.x;
    const ydiff = start.y - end.y;
    elem.style.setProperty("--xdiff", xdiff);
    elem.style.setProperty("--ydiff", ydiff);

    elem.classList.add("animate-feature-in");
    elem.addEventListener("animationend", doneAniamtingIn);

    function doneAniamtingIn() {
      elem.classList.remove("animate-feature-in");
      elem.removeEventListener("animationend", doneAniamtingIn);
    }

    // animatebox(feature);

    // TODO: More code
  } else {
    console.log(features[feature]);
    // feature removed
    console.log(`Feature ${feature} is turned off!`);
    target.classList.remove("chosen");
    document.querySelector(`#product-preview [data-feature="${feature}"]`).classList.add("hide");
    console.log("TARGET", target);

    const elem = document.querySelector(`#selected ul img#${feature}created`);

    const start = elem.getBoundingClientRect();
    const end = target.querySelector("img").getBoundingClientRect();

    const xdiff = end.x - start.x;
    const ydiff = end.y - start.y;

    elem.style.setProperty("--xdiff", xdiff);
    elem.style.setProperty("--ydiff", ydiff);

    elem.classList.add("animate-feature-out");
    elem.addEventListener("animationend", doneAniamtingOut);

    function doneAniamtingOut() {
      elem.classList.remove("animate-feature-out");
      elem.removeEventListener("animationend", doneAniamtingOut);
      elem.remove();
    }

    // returnbox(feature);
    // TODO: More code
  }
}
let bodycolor = "white";
let eyescolor = "white";
let pawscolor = "white";
let nosecolor = "white";
let chosen = false;
let other;
function setColor(element, colorString) {
  console.log(element);
  element.style.fill = colorString;
  console.log(colorString);
}
function init() {
  console.log("init works");
  setColor(body, bodycolor);
  setColor(eyes, eyescolor);
  setColor(paws, pawscolor);
  setColor(nose, nosecolor);

  body.addEventListener("mousedown", (event) => {
    setColor(event.target, bodycolor);
    console.log("I pressed body");
    if (chosen === false) {
      event.target.style.stroke = "#5e3d2a";

      event.target.style.strokeWidth = "3px";
      event.target.style.animation = "none";
      event.target.style.strokeDasharray = "0";

      chosen = true;
      console.log(chosen);
      other = event.target;
      console.log(other);
    } else {
      if (event.target != other) {
        other.style.stroke = "";
        event.target.style.stroke = "#5e3d2a";
        event.target.style.strokeWidth = "3px";
        other = event.target;
      }
    }
    // document.querySelector("#eyecolors").style.cursor = "default";
    // document.querySelector("#nosecolors").style.cursor = "default";
    // document.querySelector("#pawscolors").style.cursor = "default";

    // document.querySelector("#eyecolors").style.filter = "grayscale(100%)";
    // document.querySelector("#nosecolors").style.filter = "grayscale(100%)";
    // document.querySelector("#pawscolors").style.filter = "grayscale(100%)";
  });
  eyes.addEventListener("mousedown", (event) => {
    setColor(event.target, eyescolor);
    console.log("I pressed eyes");

    console.log(other);
    console.log(chosen);
    if (chosen === false) {
      event.target.style.stroke = "#5e3d2a";

      event.target.style.strokeWidth = "3px";
      event.target.style.animation = "none";
      event.target.style.strokeDasharray = "0";
      chosen = true;
      console.log(chosen);
      other = event.target;
      console.log(other);
    } else {
      if (event.target != other) {
        other.style.stroke = "";
        event.target.style.stroke = "#5e3d2a";
        event.target.style.strokeWidth = "3px";
        other = event.target;
      }
    }

    // document.querySelector("#bodycolors").style.cursor = "default";
    // document.querySelector("#nosecolors").style.cursor = "default";
    // document.querySelector("#pawscolors").style.cursor = "default";

    // document.querySelector("#bodycolors").style.filter = "grayscale(100%)";
    // document.querySelector("#nosecolors").style.filter = "grayscale(100%)";
    // document.querySelector("#pawscolors").style.filter = "grayscale(100%)";
  });
  nose.addEventListener("mousedown", (event) => {
    setColor(event.target, nosecolor);
    console.log("I pressed nose");
    console.log(other);
    console.log(chosen);
    if (chosen === false) {
      event.target.style.stroke = "#5e3d2a";

      event.target.style.strokeWidth = "3px";
      event.target.style.animation = "none";
      event.target.style.strokeDasharray = "0";
      chosen = true;
      console.log(chosen);
      other = event.target;
      console.log(other);
    } else {
      if (event.target != other) {
        other.style.stroke = "";
        event.target.style.stroke = "#5e3d2a";
        event.target.style.strokeWidth = "3px";
        event.target.style.animation = "none";
        event.target.style.strokeDasharray = "0";
        other = event.target;
      }
    }
  });
  paws.addEventListener("mousedown", (event) => {
    setColor(event.target, pawscolor);
    console.log("I pressed paws");
    console.log(other);
    console.log(chosen);
    if (chosen === false) {
      event.target.style.stroke = "#5e3d2a";

      event.target.style.strokeWidth = "3px";
      event.target.style.animation = "none";
      event.target.style.strokeDasharray = "0";
      chosen = true;
      console.log(chosen);
      other = event.target;
      console.log(other);
    } else {
      if (event.target != other) {
        other.style.stroke = "";
        event.target.style.stroke = "#5e3d2a";
        event.target.style.strokeWidth = "3px";
        other = event.target;
      }
    }
  });
  let bodycolors = document.querySelectorAll(".color-selector-body");
  let chosencolor = false;
  let othercolor;
  bodycolors.forEach((element) => {
    element.addEventListener("click", (event) => {
      console.log(event.target);
      bodycolor = event.target.style.backgroundColor;
      console.log("I setted the color for body");
      if (chosencolor === false) {
        event.target.style.border = "solid #5e3d2a 3px";
        chosencolor = true;
        othercolor = event.target;
      } else {
        if (event.target != othercolor) {
          othercolor.style.border = "";
          event.target.style.border = "solid #5e3d2a 3px";
          othercolor = event.target;
        }
      }
      //   console.log()
      //   event.target.style.stroke = "black";
      //   body.style.fill = event.target.style.backgroundColor;
      // eyes.style.fill = event.target.style.backgroundColor;

      //   console.log(eyescolor);
    });
  });
  document.querySelectorAll(".color-selector-eyes").forEach((element) => {
    element.addEventListener("click", (event) => {
      eyescolor = event.target.style.backgroundColor;
      console.log("I setted the color for eyes");
      if (chosencolor === false) {
        event.target.style.border = "solid #5e3d2a 3px";
        chosencolor = true;
        othercolor = event.target;
      } else {
        if (event.target != othercolor) {
          othercolor.style.border = "";
          event.target.style.border = "solid #5e3d2a 3px";
          othercolor = event.target;
        }
      }
      //   eyes.style.fill = event.target.style.backgroundColor;
      //   eyes.style.fill = event.target.style.backgroundColor;

      //   console.log(eyescolor);
    });
  });
  document.querySelectorAll(".color-selector-nose").forEach((element) => {
    element.addEventListener("click", (event) => {
      nosecolor = event.target.style.backgroundColor;
      if (chosencolor === false) {
        event.target.style.border = "solid #5e3d2a 3px";
        chosencolor = true;
        othercolor = event.target;
      } else {
        if (event.target != othercolor) {
          othercolor.style.border = "";
          event.target.style.border = "solid #5e3d2a 3px";
          othercolor = event.target;
        }
      }
      //   nose.style.fill = event.target.style.backgroundColor;
      //   eyes.style.fill = event.target.style.backgroundColor;

      //   console.log(nosecolor);
    });
  });
  document.querySelectorAll(".color-selector-paws").forEach((element) => {
    element.addEventListener("click", (event) => {
      pawscolor = event.target.style.backgroundColor;
      if (chosencolor === false) {
        event.target.style.border = "solid #5e3d2a 3px";
        chosencolor = true;
        othercolor = event.target;
      } else {
        if (event.target != othercolor) {
          othercolor.style.border = "";
          event.target.style.border = "solid #5e3d2a 3px";
          othercolor = event.target;
        }
      }
      //   paws.style.fill = event.target.style.backgroundColor;
      //   eyes.style.fill = event.target.style.backgroundColor;

      //   console.log(nosecolor);
    });
  });
}
