const balloon = document.getElementById("balloon");
const colors = ["red", "green", "blue"];
let colorIndex = 0;

const increase_size = () => {
  let currentWidth = balloon.offsetWidth;
  let currentHeight = balloon.offsetHeight;

  if (currentWidth + 10 > 420 || currentHeight + 10 > 420) {
    balloon.style.width = "200px";
    balloon.style.height = "200px";
    colorIndex = 0;
    balloon.style.backgroundColor = colors[colorIndex];
    return;
  }

  balloon.style.width = currentWidth + 10 + "px";
  balloon.style.height = currentHeight + 10 + "px";

  colorIndex = (colorIndex + 1) % colors.length;
  balloon.style.backgroundColor = colors[colorIndex];
};

const decrease_size = () => {
  let currentWidth = balloon.offsetWidth;
  let currentHeight = balloon.offsetHeight;

  if (currentWidth - 5 >= 200 && currentHeight - 5 >= 200) {
    balloon.style.width = currentWidth - 5 + "px";
    balloon.style.height = currentHeight - 5 + "px";
  }

  colorIndex = (colorIndex - 1 + colors.length) % colors.length;
  balloon.style.backgroundColor = colors[colorIndex];
};

balloon.addEventListener("click", () => {
  console.log("balloon was clicked!");
  increase_size();
});

balloon.addEventListener("mouseleave", () => {
  console.log("mouse left balloon!");
  decrease_size();
});
