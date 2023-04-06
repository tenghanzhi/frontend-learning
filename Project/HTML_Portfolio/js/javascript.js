// Carousel --------------------------------------------------------------
window.onload = function () {
  var imgList = document.getElementById("imgList");
  var imgArr = document.getElementsByClassName("carousel-img");
  imgList.style.width = 920 * imgArr.length + "px";

  var navDiv = document.getElementById("navDiv");
  var outer = document.getElementById("outer");
  navDiv.style.left = (outer.offsetWidth - navDiv.offsetWidth) / 2 + "px";

  var index = 0;
  var allA = document.getElementsByClassName("navDiv");
  allA[index].style.backgroundColor = "#999999";

  for (var i = 0; i < allA.length; i++) {
    allA[i].num = i;
    allA[i].onclick = function () {
      clearInterval(timer);
      index = this.num;
      setA();
      move(imgList, "left", -920 * index, 100, function () {
        autoChange();
      });
    };
  }

  autoChange();

  function setA() {
    if (index >= imgArr.length - 1) {
      index = 0;
      imgList.style.left = 0;
    }

    for (var i = 0; i < allA.length; i++) {
      allA[i].style.backgroundColor = "";
    }
    allA[index].style.backgroundColor = "white";
  }

  var timer;
  function autoChange() {
    timer = setInterval(function () {
      index++;
      index %= imgArr.length;
      move(imgList, "left", -920 * index, 50, function () {
        setA();
      });
    }, 3000);
  }
  // Snake -----------------------------------------------------------------
  canv = document.getElementById("gc");
  ctx = canv.getContext("2d");
  document.addEventListener("keydown", keyPush);
  setInterval(game, 1000 / 8);

  px = py = 10;
  gs = tc = 20;
  ax = ay = 15;
  xv = yv = 0;
  trail = [];
  tail = 5;
  function game() {
    px += xv;
    py += yv;
    if (px < 0) {
      px = tc - 1;
    }
    if (px > tc - 1) {
      px = 0;
    }
    if (py < 0) {
      py = tc - 1;
    }
    if (py > tc - 1) {
      py = 0;
    }
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canv.width, canv.height);

    ctx.fillStyle = "rgb(234, 234, 234)";
    for (var i = 0; i < trail.length; i++) {
      ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
      if (trail[i].x == px && trail[i].y == py) {
        tail = 5;
      }
    }
    trail.push({ x: px, y: py });
    while (trail.length > tail) {
      trail.shift();
    }

    if (ax == px && ay == py) {
      tail++;
      ax = Math.floor(Math.random() * tc);
      ay = Math.floor(Math.random() * tc);
    }
    ctx.fillStyle = "grey";
    ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);
  }
  function keyPush(evt) {
    switch (evt.keyCode) {
      case 65:
        xv = -1;
        yv = 0;
        break;
      case 87:
        xv = 0;
        yv = -1;
        break;
      case 68:
        xv = 1;
        yv = 0;
        break;
      case 83:
        xv = 0;
        yv = 1;
        break;
    }
  }
};
// Calculator ------------------------------------------------------------
function dis(val) {
  document.getElementById("result").value += val;
}
function solve() {
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
}
function clr() {
  document.getElementById("result").value = "";
}