const operate = () => {
  val1 = document.getElementById("inp1").value;
  val2 = document.getElementById("inp2").value;
  opt = document.getElementById("opt").value;
  inp1 = Number(val1);
  inp2 = Number(val2);
  //   console.log(typeof inp1, typeof inp2);

  if (
    !Number.isInteger(inp1) ||
    !Number.isInteger(inp2) ||
    val1 == "" ||
    val2 == "" ||
    inp1 < 0 ||
    inp2 < 0
  ) {
    alert("Error :(");
    return;
  }

  if ((opt == "mod" || opt == "divide") && inp2 == 0) {
    console.log("It’s over 9000!");
    alert("It’s over 9000!");
    return;
  }
  let res;
  switch (opt) {
    case "plus":
      res = inp1 + inp2;
      break;
    case "minus":
      res = inp1 - inp2;
      break;
    case "multiply":
      res = inp1 * inp2;
      break;
    case "divide":
      res = inp1 / inp2;
      break;
    case "mod":
      res = inp1 % inp2;
      break;
  }

  alert(res);
  console.log(res);
};

submitBtn = document.getElementById("submit_btn");
submitBtn.addEventListener("click", () => {
  operate();
});

setInterval(() => {
  alert("Please, use me...");
}, 30000);
