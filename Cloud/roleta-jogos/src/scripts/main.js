const canvas = document.getElementById('rouletteCanvas');
const ctx = canvas.getContext('2d');

const wheel = {
    radius: 200,
    segments: 12,
    rotation: 0,
    speed: 0,
    isSpinning: false,
};

const ball = {
    radius: 10,
    angle: 0,
    speed: 0,
};

function drawWheel() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(wheel.rotation);

    for (let i = 0; i < wheel.segments; i++) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, wheel.radius, (i * 2 * Math.PI) / wheel.segments, ((i + 1) * 2 * Math.PI) / wheel.segments);
        ctx.fillStyle = i % 2 === 0 ? '#FF5733' : '#33FF57';
        ctx.fill();
        ctx.stroke();
    }

    ctx.restore();
}

function drawBall() {
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(ball.angle);
    ctx.beginPath();
    ctx.arc(wheel.radius - ball.radius, 0, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.restore();
}

function update() {
    if (wheel.isSpinning) {
        wheel.rotation += wheel.speed;
        ball.angle += ball.speed;

        wheel.speed *= 0.99; // Friction
        ball.speed *= 0.99; // Friction

        if (wheel.speed < 0.01) {
            wheel.isSpinning = false;
            wheel.speed = 0;
            ball.speed = 0;
        }
    }

    drawWheel();
    drawBall();
    requestAnimationFrame(update);
}

function spinWheel() {
    wheel.isSpinning = true;
    wheel.speed = Math.random() * 0.1 + 0.1; // Random speed
    ball.speed = Math.random() * 0.05 + 0.05; // Random ball speed
}

document.getElementById('spinButton').addEventListener('click', spinWheel);
update();