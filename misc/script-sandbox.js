const frontSandbox = document.querySelector("#front-sandbox");

let bounds = frontSandbox.getBoundingClientRect();
const originalCenter = {
    x: bounds.x + frontSandbox.clientWidth/2,
    y: bounds.y + frontSandbox.clientHeight/2
};

document.addEventListener("mousedown", (event) => {
    // console.log(event.clientX, event.clientY);
    const movement = {
        x: event.clientX - originalCenter.x,
        y: event.clientY - originalCenter.y
    };
    frontSandbox.style.transform = `translate(${movement.x}px, ${movement.y}px)`;
})