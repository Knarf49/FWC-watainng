const randomBtn = $("#random_btn");
const getRandomHexColor = () => {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
  );
};
const randomBtnHandler = () => {
  $("body").css("backgroundColor", getRandomHexColor());
};

randomBtn.click(() => {
  console.log("button was clicked!");
  randomBtnHandler();
});
