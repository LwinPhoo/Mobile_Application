"use strict";
let n = null;
let prevN = null;

let currentAudio = null;
let omikuji_sound1 = new Audio("./sound/sound6.mp3");
let omikuji_sound2 = new Audio("./sound/sound5.mp3");
let omikuji_sound3 = new Audio("./sound/sound1.mp3");
let omikuji_sound4 = new Audio("./sound/sound2.mp3");
let omikuji_sound5 = new Audio("./sound/sound4.mp3");
let omikuji_sound6 = new Audio("./sound/sound7.mp3");
let resultSound = [
  omikuji_sound1,
  omikuji_sound2,
  omikuji_sound3,
  omikuji_sound4,
  omikuji_sound5,
  omikuji_sound6,
];
window.addEventListener(
  "DOMContentLoaded",
  function () {
    $("header").textillate({
      loop: false,
      minDisplayTime: 9000,
      initialDelay: 1000,
      autoStart: true,
      in: {
        effect: "fadeInLetBig",
        delayScale: 1.5,
        delay: 50,
        syns: false,
        shuffle: true,
      },
    });
    $(function () {
      ScrollReveal().reveal("#btn1", { duration: 9000 });
    });
    this.setTimeout(function () {
      let popMessage = "いらっしゃい! おみくじ引いてって!";
      this.window.alert(popMessage);
    }, "3000");
  },
  false
);

const btn1 = document.getElementById("btn1");
const omikujiText = document.getElementById("omikujiText");
btn1.addEventListener(
  "click",
  function () {
    let resultTextImage = [
      "./img/pdk.png",
      "./img/pk.png",
      "./img/ck.png",
      "./img/psk.png",
      "./img/sk.png",
      "./img/k.png",
    ];

    let resultMaxSpeed = [20, 15, 10, 5, 5, 5];
    let resultMaxSize = [35, 30, 20, 10, 20, 30];
    let resultMinSize = [20, 15, 10, 8, 10, 15];
    let resultImage = [
      "./img/star1.png",
      "./img/star.png",
      "./img/sakura_hanabira.png",
      "./img/snowflakes.png",
      "./img/sakura_hanabira.png",
      "./img/leaf.png",
    ];

    n = Math.floor(Math.random() * resultTextImage.length);
    while (n == prevN) {
      n = Math.floor(Mth.random() * resultTextImage.length);
    }
    prevN = n;

    omikujiTextImage.src = resultTextImage[n];
    omikujiTextImage.classList.add("omikujiPaper");
    omikujiTextImage.addEventListener(
      "animationend",
      function () {
        omikujiTextImage.classList.remove("omikujiPaper");
      },
      false
    );

    soundControl(resultSound[n]);
    // switch (n) {
    //   case 0:
    //     omikujiText.textContent = "Max Happy!!!";
    //     omikujiText.style.color = "red";
    //     omikujiText.style.fontSize = "40px";
    //     break;
    //   case 1:
    //     omikujiText.textContent = "Happy";
    //     omikujiText.style.color = "Gold";
    //     omikujiText.style.fontSize = "38px";
    //     break;
    //   case 2:
    //     omikujiText.textContent = "So sad";
    //     omikujiText.style.color = "blue";
    //     omikujiText.style.fontSize = "20px";
    //     break;
    // }
    $(document).snowfall("clear");
    $(document).ready(function () {
      $(document).snowfall({
        maxSpeed: resultMaxSpeed[n],
        minSpeed: 1,
        maxSize: resultMaxSize[n],
        minSize: resultMinSize[n],
        image: resultImage[n],
      });
    });
  },
  false
);
function soundControl(w_sound) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  w_sound.play();
  currentAudio = w_sound;
}
