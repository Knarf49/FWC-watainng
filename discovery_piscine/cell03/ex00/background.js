randomBtn = document.getElementById("random_btn");
const getRandomHexColor = () => {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
  );
};
const randomBtnHandler = () => {
  document.body.style.backgroundColor = getRandomHexColor();
};
randomBtn.addEventListener("click", () => {
  console.log("button was clicked!");
  randomBtnHandler();
});
