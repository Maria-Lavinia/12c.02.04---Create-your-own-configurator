"use strict";
window.addEventListener("DOMContentLoaded", start);
let body;
let eyes;
let nose;
let paws;
async function start() {
  let response = await fetch("bear-white-01.svg");
  let mySvgData = await response.text();
  document.querySelector("#svgloc").innerHTML = mySvgData;
  body = document.querySelector("#body");
  paws = document.querySelector("#paws");
  eyes = document.querySelector("#eyes");
  nose = document.querySelector("#nose");
  init();
  //   body.style.fill = "pink";
}
let bodycolor = "white";
let eyescolor = "white";
let pawscolor = "white";
let nosecolor = "white";
function setColor(element, colorString) {
  console.log(element);
  element.style.fill = colorString;
}
function init() {
  console.log("init works");
  setColor(body, bodycolor);
  setColor(eyes, eyescolor);
  setColor(paws, pawscolor);
  setColor(nose, nosecolor);

  //   body.addEventListener("click", (event) => {
  //     setColor(event.target, bodycolor);
  //     console.log("I pressed body");
  //   });
  //   eyes.addEventListener("click", (event) => {
  //     setColor(event.target, eyescolor);
  //     console.log("I pressed eyes");
  //   });
  //   nose.addEventListener("click", (event) => {
  //     setColor(event.target, nosecolor);
  //     console.log("I pressed eyes");
  //   });
  //   paws.addEventListener("click", (event) => {
  //     setColor(event.target, pawscolor);
  //     console.log("I pressed eyes");
  //   });

  document.querySelectorAll(".color-selector-body").forEach((element) => {
    element.addEventListener("click", (event) => {
      //   bodycolor = event.target.style.backgroundColor;
      body.style.fill = event.target.style.backgroundColor;
      //   eyes.style.fill = event.target.style.backgroundColor;

      console.log(eyescolor);
    });
  });
  document.querySelectorAll(".color-selector-eyes").forEach((element) => {
    element.addEventListener("click", (event) => {
      //   bodycolor = event.target.style.backgroundColor;
      eyes.style.fill = event.target.style.backgroundColor;
      //   eyes.style.fill = event.target.style.backgroundColor;

      console.log(eyescolor);
    });
  });
  document.querySelectorAll(".color-selector-nose").forEach((element) => {
    element.addEventListener("click", (event) => {
      //   bodycolor = event.target.style.backgroundColor;
      nose.style.fill = event.target.style.backgroundColor;
      //   eyes.style.fill = event.target.style.backgroundColor;

      console.log(nosecolor);
    });
  });
  document.querySelectorAll(".color-selector-paws").forEach((element) => {
    element.addEventListener("click", (event) => {
      //   bodycolor = event.target.style.backgroundColor;
      paws.style.fill = event.target.style.backgroundColor;
      //   eyes.style.fill = event.target.style.backgroundColor;

      console.log(nosecolor);
    });
  });
}
