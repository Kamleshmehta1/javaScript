const toggles = document.querySelectorAll(".toggle");
console.log(toggles);

const good = document.querySelector("#good");
console.log(good);
const cheap = document.querySelector("#cheap");
console.log(cheap);
const fast = document.querySelector("#fast");
console.log(fast);

toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => {
    console.log(e);
    console.log(e.target);
    transitionFunc(e.target);
  })
);

function transitionFunc(theClickedOne) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === theClickedOne) {
      fast.checked = false;
    }
    if (cheap === theClickedOne) {
      good.checked = false;
    }
    if (fast === theClickedOne) {
      cheap.checked = false;
    }
  }
}
