const cursor = document.querySelector(".cursor");
const cursorF = document.querySelector(".cursor-f");
const cursorBtn = document.querySelector(".page2-img");
function cursorHover() {
  window.addEventListener("mousemove", function (e) {
    cursor.animate(
      {
        left: e.pageX + "px",
        top: e.pageY + "px",
      },
      { duration: 200, fill: "forwards" }
    );
    cursorF.animate(
      {
        left: e.pageX + "px",
        top: e.pageY + "px",
      },
      { duration: 200, fill: "forwards" }
    );
    cursorBtn.animate(
      {
        left: e.pageX + "px",
        top: e.pageY + "px",
      },
      { duration: 300, fill: "forwards" }
    );
  });
}
function h1Hover() {
  const page1h1 = document.querySelectorAll(".page1-h1").forEach((e) => {
    e.addEventListener("mouseenter", function () {
      cursor.style.backgroundColor = "#abf03d";
      cursor.style.scale = "4";
    });
    e.addEventListener("mouseleave", function () {
      cursor.style.backgroundColor = "transparent";
      cursor.style.scale = "1";
    });
  });
}
function ankerHover() {
  const anker = document.querySelectorAll(".link").forEach((e) => {
    e.addEventListener("mouseenter", function () {
      cursor.style.backgroundColor = "#abf03d";
      cursor.style.scale = "2";
    });
    e.addEventListener("mouseleave", function () {
      cursor.style.backgroundColor = "transparent";
      cursor.style.scale = "1";
    });
  });
}
function textRotate() {
  const text = document.querySelector(".text p");
  text.innerHTML = text.innerText
    .split("")
    .map(
      (char, i) =>
        `<span style="transform:rotate(${i * 8.3}deg)">${char}</span>`
    )
    .join("");
}
function movementOfLine() {
  const moveRight = document.querySelector("#start-line-2");
  const moveLeft = document.querySelectorAll(".page3 h1").forEach((e) => {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const newX = -1200 + scrollY * 0.2;
      const newX2 = 1200 + scrollY * 0.2;
      e.style.transform = `translateX(${newX + 100}px)`;
      moveRight.style.transform = `translateX(${-(newX2 + 100)}px)`;
    });
  });
}
function line() {
  const container = document.querySelector(".line-section");

  for (let i = 0; i <= 22; i++) {
    const element = document.createElement("div");
    element.className = "line-1 hr-line";
    element.style.border = `${i++}px solid #717b60`;
    element.style.marginTop = "50px";
    element.style.transition = "1s";
    container.appendChild(element);
  }
}
function lineSpread() {
  const line = document.querySelectorAll(".hr-line");
  window.addEventListener("scroll", function () {
    const scrollY = Math.floor(this.window.scrollY);
    if (scrollY >= 1240) {
      line.forEach((e) => {
        e.style.transform = "translateX(0px)";
      });
    } else {
      line.forEach((e) => {
        e.style.transform = "translateX(-100%)";
      });
    }
  });
}
function noHover() {
  const no = document.querySelector(".page2");
  no.addEventListener("mouseenter", function () {
    // cursorBtn.style.display = "block";
    cursorBtn.style.scale = "1";
    cursorBtn.style.duration = "1";
    cursor.style.scale = "0";
  });
  no.addEventListener("mouseleave", function () {
    // cursorBtn.style.display = "none";
    cursorBtn.style.scale = "0";
    cursorBtn.style.duration = "1";
    cursor.style.scale = "1";
  });
}
function ludoMove() {
  const page = document.querySelector(".ruleBook");
  window.addEventListener("scroll", function () {
    const scrollY = this.window.scrollY;
    console.log(Math.floor(scrollY));
    const newY = -(scrollY * 0.2) + 600;
    console.log(newY);
    page.style.transform = `translateY(${newY}px)`;
  });
}
function wordHover() {
  const h1 = document.querySelector(".elem:nth-child(1)");
  const h2 = document.querySelector(".elem:nth-child(2)");
  const h3 = document.querySelector(".elem:nth-child(3)");
  const img1 = document.getElementById("ready-img-1");
  const img2 = document.getElementById("ready-img-2");
  const img3 = document.getElementById("ready-img-3");

  h1.addEventListener("mouseenter", function () {
    img1.style.scale = "1";
  });
  h1.addEventListener("mouseleave", function () {
    img1.style.scale = "0";
  });
  h2.addEventListener("mouseenter", function () {
    img2.style.scale = "1";
  });
  h2.addEventListener("mouseleave", function () {
    img2.style.scale = "0";
  });
  h3.addEventListener("mouseenter", function () {
    img3.style.scale = "1";
  });
  h3.addEventListener("mouseleave", function () {
    img3.style.scale = "0";
  });
}
cursorHover();
h1Hover();
ankerHover();
textRotate();
movementOfLine();
line();
lineSpread();
noHover();
ludoMove();
wordHover();
