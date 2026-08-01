// =============================
// Floating Hearts Animation
// =============================

const hearts = document.querySelector(".hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (15 + Math.random() * 25) + "px";

    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);

}

setInterval(createHeart, 250);


// =============================
// Open My Heart Button
// =============================

const welcome = document.getElementById("welcome");
const letter = document.getElementById("letter");

document.getElementById("openBtn").addEventListener("click", () => {

    welcome.style.opacity = "0";
    welcome.style.transition = "1s";

    setTimeout(() => {

        welcome.style.display = "none";

        letter.style.display = "flex";

        letter.style.opacity = "0";

        setTimeout(() => {

            letter.style.transition = "1s";

            letter.style.opacity = "1";

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 100);

    }, 900);

});

const surpriseBtn=document.getElementById("surpriseBtn");

const questionPage=document.getElementById("questionPage");

const finalPage=document.getElementById("finalPage");

surpriseBtn.onclick=()=>{

letter.style.display="none";

questionPage.style.display="flex";

window.scrollTo(0,0);

};


// BACK

backBtn.onclick=()=>{

letter.style.display="none";

welcome.style.display="flex";

};


// YES

document.getElementById("yesBtn").onclick=()=>{

questionPage.style.display="none";

finalPage.style.display="flex";

celebrate();

};


// NO BUTTON

const noBtn=document.getElementById("noBtn");

const choice=document.querySelector(".choiceButtons");

noBtn.addEventListener("mouseenter", moveNoButton);

noBtn.addEventListener("touchstart", function(e){

    e.preventDefault();

    moveNoButton();

});

function moveNoButton(){

    const container = document.querySelector(".choiceButtons");

    const maxX = container.clientWidth - noBtn.offsetWidth;

    const maxY = container.clientHeight - noBtn.offsetHeight;

    const x = Math.random() * maxX;

    const y = Math.random() * maxY;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    noBtn.style.transform =
`rotate(${Math.random()*20-10}deg)`;

}

function celebrate() {

    const duration = 5000;
    const end = Date.now() + duration;

    (function frame() {

        confetti({
            particleCount: 4,
            angle: 60,
            spread: 70,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 4,
            angle: 120,
            spread: 70,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }

    })();

}
// =============================
// Back to Home from Final Page
// =============================

const finalBackBtn = document.getElementById("finalBackBtn");

finalBackBtn.addEventListener("click", () => {

    // Hide Final Page
    finalPage.style.display = "none";

    // Hide Other Pages (just to be safe)
    questionPage.style.display = "none";
    letter.style.display = "none";

    // Show Home Page
    welcome.style.display = "flex";
    welcome.style.opacity = "1";

    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

const loveSong = document.getElementById("loveSong");

yesBtn.addEventListener("click", () => {

    celebrate();

    questionPage.style.display = "none";
    finalPage.style.display = "flex";

    loveSong.currentTime = 0;
    loveSong.play();

});

finalBackBtn.addEventListener("click", () => {

    loveSong.pause();
    loveSong.currentTime = 0;

    showPage(welcome);

});