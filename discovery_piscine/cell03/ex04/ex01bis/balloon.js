const $balloon = $("#balloon");
const colors = ["red", "green", "blue"];
let colorIndex = 0;

const increase_size = () => {
  let currentWidth = $balloon.width();
  let currentHeight = $balloon.height();

  if (currentWidth + 10 > 420 || currentHeight + 10 > 420) {
    $balloon.css({ width: "200px", height: "200px", backgroundColor: "red" });
    colorIndex = 0;
    return;
  }

  $balloon.css({
    width: currentWidth + 10 + "px",
    height: currentHeight + 10 + "px",
  });

  colorIndex = (colorIndex + 1) % colors.length;
  $balloon.css("backgroundColor", colors[colorIndex]);
};

const decrease_size = () => {
  let currentWidth = $balloon.width();
  let currentHeight = $balloon.height();

  if (currentWidth - 5 >= 200 && currentHeight - 5 >= 200) {
    $balloon.css({
      width: currentWidth - 5 + "px",
      height: currentHeight - 5 + "px",
    });
  }

  colorIndex = (colorIndex - 1 + colors.length) % colors.length;
  $balloon.css("backgroundColor", colors[colorIndex]);
};

$balloon.on("click", () => {
  console.log("balloon was clicked!");
  increase_size();
});

$balloon.on("mouseleave", () => {
  console.log("mouse left balloon!");
  decrease_size();
});
