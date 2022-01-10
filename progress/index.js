const prev = document.getElementById("prev");
const next = document.getElementById("next");
const progress = document.getElementById("progress");
const circle = document.querySelectorAll(".circle");

console.log(prev);
console.log(next);
console.log(circle);

let currentActive = 1;
let numberOfCircles = circle.length;

console.log("total number of circles: ", numberOfCircles);

next.addEventListener("click", () => {
    currentActive++;
    if (currentActive > numberOfCircles) {
        currentActive = numberOfCircles
    }
    console.log(currentActive);
    updateCSS();
})

prev.addEventListener("click", () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1
    }
    console.log(currentActive);
    updateCSS();
})

function enableDisable() {
    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === numberOfCircles) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}

function updateCSS() {
    for (var i = 0; i < numberOfCircles; i++) {
        const circ = circle[i];
        if (i < currentActive) {
            circ.classList.add("active")
        } else {
            circ.classList.remove("active");
        }
    }
    const activexyx = document.querySelectorAll(".active");
    const widthxyz = (activexyx.length - 1) / (circle.length - 1) * 100

    progress.style.width = widthxyz + "%"
    enableDisable()
}