const container = document.querySelector(".container");
const video = document.querySelector(".back video");
const choices = document.querySelector(".choices");
const continueBtn = document.querySelector("#continue-btn");
const skipBtn = document.querySelector("#skip-btn");

let shownChoices = false;

container.addEventListener("click", () => {
    if (!container.classList.contains("anim")) {
        container.classList.add("anim");
        // Set timeout so that video doesn't play until flipping is done
        const containerStyles = window.getComputedStyle(container);
        const duration = containerStyles['animationDuration'];
        const timeout = parseInt(duration.slice(0, -1));
        console.log(timeout);
        setTimeout(() => {
            video.play()
        }, timeout * 1000);
    }
})

video.addEventListener("timeupdate", () => {
    if (video.currentTime > 5 && !shownChoices) {
        shownChoices = true;
        video.pause();
        choices.style.visibility = "visible";
    }
})

continueBtn.addEventListener("click", () => {
    video.play();
    choices.style.visibility = "hidden";
})

skipBtn.addEventListener("click", () => {
    choices.style.visibility = "hidden";
    video.currentTime = 210;
    video.play();
})

video.addEventListener("ended", () => {
    container.classList.remove("anim");
    shownChoices = false;
})

const box = document.querySelector(".move-around");
let rotateAngle = 0;
let bounds = box.getBoundingClientRect();
const originalCenter = {
    x: bounds.x + box.clientWidth/2,
    y: bounds.y + box.clientHeight/2
};

document.addEventListener("mousedown", (event) => {
    rotateAngle += 90;
    const movement = {
        x: event.clientX - originalCenter.x,
        y: event.clientY - originalCenter.y
    };
    box.style.transform = `translate(${movement.x}px, ${movement.y}px) rotate(${rotateAngle}deg)`;
})