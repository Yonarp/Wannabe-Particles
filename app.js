const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d'); //---> we get al 2d animations of canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let numberOfParticles = 400;
const particlesArray = [];

const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
gradient.addColorStop('0.2', 'red');
gradient.addColorStop('0.4', 'blue');
gradient.addColorStop('0.6', 'green');

let hue = gradient;




class Particles {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = (Math.random() * 3) + 2;
        this.speedX = (Math.random() * 3) - 1.5;
        this.speedY = (Math.random() * 3) - 1.5;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;

        ctx.fill();
    }

    update() {
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
}

function init() {
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particles());
    }
}

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height)
        /*    ctx.fillStyle = 'rgba(255,255,255,0.01)'
           ctx.fillRect(0, 0, canvas.width, canvas.height);
        */
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
    requestAnimationFrame(animate); // ---> adjust to screen refresh rate
}

init();
animate();