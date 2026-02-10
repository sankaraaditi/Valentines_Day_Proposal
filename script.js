const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const bgMusic = document.getElementById("bgMusic");

// NO button impossible to click
function moveButton() {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);

    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}
noButton.onclick = () => moveButton();

// YES button action
function nextPage() {
    bgMusic.play();
    launchHearts();

    setTimeout(() => startCountdown(3), 500);
}

// HEART CONFETTI
function launchHearts() {
    for (let i = 0; i < 35; i++) {
        const heart = document.createElement("div");
        heart.innerText = "💖";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = Math.random() * 20 + 20 + "px";
        heart.style.animation = "floatUp 2.2s ease-out forwards";

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 2200);
    }
}

// ANIMATION
const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
    to {
        transform: translateY(-120vh);
        opacity: 0;
    }
}`;
document.head.appendChild(style);

// COUNTDOWN
function startCountdown(seconds) {
    document.body.innerHTML = `
        <div style="height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center; font-family:Arial; text-align:center;">
            <h1>Counting down…</h1>
            <h2 id="countdown">${seconds}</h2>
        </div>
    `;

    const countdownEl = document.getElementById("countdown");

    const interval = setInterval(() => {
        seconds--;
        if (seconds > 0) {
            countdownEl.textContent = seconds;
        } else {
            clearInterval(interval);
            showFinalMessage();
        }
    }, 1000);
}

// FINAL MESSAGE
function showFinalMessage() {
    document.body.innerHTML = `
        <div style="
            height:100vh;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            font-family:Arial;
            text-align:center;
            background-color:#fff0f6;
        ">
            <h1>YAYYYYY 😭💖</h1>
            <h2>u had no choice my sweety cat 🐱💘</h2>
            <p>To being my Valentine forever in this life and the one after 💘🐱</p>
        </div>
    `;
}


