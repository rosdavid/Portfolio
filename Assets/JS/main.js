//HAMBURGUER MENU

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

//TYPEWRITER EFFECT

document.addEventListener("DOMContentLoaded", function (event) {
  var dataText = ["Frontend Developer", "UI/UX Designer"];

  function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
      document.querySelector(".section__text__p2").innerHTML =
        text.substring(0, i + 1) +
        '<span class="typewriter" aria-hidden="true"></span>';

      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    } else if (typeof fnCallback == "function") {
      setTimeout(fnCallback, 700);
    }
  }

  function StartTextAnimation(i) {
    if (typeof dataText[i] == "undefined") {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 500);
    } else if (i < dataText[i].length) {
      typeWriter(dataText[i], 0, function () {
        StartTextAnimation(i + 1);
      });
    }
  }

  StartTextAnimation(0);
});

//LINKS

//Social Links
function openLinkedIn() {
  window.open(
    "https://www.linkedin.com/in/david-ros-ferrer-40b2a4282/",
    "_blank"
  );
}

function openGithub() {
  window.open("https://github.com/rosdavid/", "_blank");
}

//Project One
function openGithubOne() {
  window.open("https://github.com/rosdavid/liquoly/", "_blank");
}

function openProjectOne() {
  window.open("http://liquoly.com/", "_blank");
}

//Project Two
function openGithubTwo() {
  window.open("https://github.com/rosdavid/el-pernilet/", "_blank");
}

function openProjectTwo() {
  window.open("https://elpernilet.com/", "_blank");
}

//Project Three
function openGithubThree() {
  window.open("https://github.com/rosdavid/portfolio/", "_blank");
}

function openProjectThree() {
  window.open("https://davidros.dev/", "_blank");
}

//REVEAL EFFECT

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 100;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
