// window.addEventListener("load", () => {
const sounds = document.querySelectorAll(".sound");
const pads = document.querySelectorAll(".pads div");
const keysArray = [32, 80, 68, 79, 87, 75];
const specialAudio1 = document.querySelector(".Special1 audio");
const specialAudio2 = document.querySelector(".Special2");

//play sounds
//>> with click
pads.forEach((pad, index) => {
  pad.addEventListener("click", function () {
    sounds[index].play();
    sounds[index].currentTime = 0;
  });
});

//>> with keys = space, d, p, o, w, k
document.addEventListener("keydown", function (e) {
  let k = keysArray.indexOf(e.keyCode);
  sounds[k].play();
  sounds[k].currentTime = 0;
});

// class toggle function
toggle = (pad) => {
  pad.classList.toggle("padPlay");
  setTimeout(function () {
    pad.classList.toggle("padPlay");
  }, 5);
};

//Use of pad class toggle function
sounds.forEach((sound) => {
  sound.addEventListener("playing", function () {
    let x = sound.parentElement;
    toggle(x);
  });
});

//background color change with beatCount + Special Audios
let beatCount = -1;
let specialCount = -1;

document.addEventListener("keyup", function () {
  if (beatCount < 20) {
    beatCount++;
  } else {
    beatCount--;
  }
  specialCount++;
  console.log(beatCount);
  console.log(specialCount);
  //Color bg
  const hue = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--hue")
  );
  document.documentElement.style.setProperty("--hue", hue + beatCount * 0.4);

  //Special Audios + rocketMove
  if (specialCount == 16 || specialCount == 32 || specialCount == 48) {
    sounds[6].play();
  }

  if (specialCount == 64) {
    sounds[7].play();
    setTimeout(function () {
      rocketMove();
    }, 9000);
  }

  //rocketMove function
  rocketMove = () => {
    let image = document.querySelector(".imgchild");
    image.classList.add("rocketMove");
    setTimeout(function () {
      image.classList.remove("rocketMove");
    }, 5000);
  };

  //Reset color and special
  if (specialCount == 82) {
    beatCount = -1;
    specialCount = -1;
  }
});
