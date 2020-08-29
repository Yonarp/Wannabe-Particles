"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d'); //---> we get al 2d animations of canvas

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var numberOfParticles = 400;
var particlesArray = [];
var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
gradient.addColorStop('0.2', 'red');
gradient.addColorStop('0.4', 'blue');
gradient.addColorStop('0.6', 'green');
var hue = gradient;

var Particles =
/*#__PURE__*/
function () {
  function Particles() {
    _classCallCheck(this, Particles);

    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 3 + 2;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
  }

  _createClass(Particles, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    }
  }, {
    key: "update",
    value: function update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
        this.speedX = -this.speedX;
      }

      if (this.y + this.radius > canvas.width || this.y - this.radius < 0) {
        this.speedY = -this.speedY;
      }

      this.draw();
    }
  }]);

  return Particles;
}();

function init() {
  for (var i = 0; i < numberOfParticles; i++) {
    particlesArray.push(new Particles());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  /*    ctx.fillStyle = 'rgba(255,255,255,0.01)'
     ctx.fillRect(0, 0, canvas.width, canvas.height);
  */

  for (var i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
  }

  requestAnimationFrame(animate); // ---> adjust to screen refresh rate
}

init();
animate();