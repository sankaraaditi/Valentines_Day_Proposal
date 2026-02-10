const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");

// Make NO button impossible to click
function moveButton() {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);

    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

// Extra safety: even if he somehow clicks NO
noButton.onclick = () => moveButton();

// YES button action
function nextPage() {
    launchHearts();

    setTimeout(() => {
        document.body.innerHTML = `
            <div style="
                height:100vh;
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:center;
                font-family:Arial;
                text-align:center;
            ">
                <h1>YAYYYYY 😭💖</h1>
                <h2>I knew you’d say yes 🥰</h2>
                <p>Happy Valentine’s Day, my favourite person 🐱💘</p>
            </div>
        `;
    }, 1200);
}

// HEART CONFETTI ✨
function launchHearts() {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement("div");
        heart.innerText = "💖";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = Math.random() * 20 + 20 + "px";
        heart.style.animation = "floatUp 2s ease-out forwards";

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 2000);
    }
}

// Add animation
const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
    to {
        transform: translateY(-120vh);
        opacity: 0;
    }
}`;
document.head.appendChild(style);

