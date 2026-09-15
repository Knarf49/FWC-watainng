const operate = () => {
  const val1 = $("#inp1").val();
  const val2 = $("#inp2").val();
  const opt = $("#opt").val();
  
  const inp1 = Number(val1);
  const inp2 = Number(val2);

  if (
    !Number.isInteger(inp1) ||
    !Number.isInteger(inp2) ||
    val1 === "" ||
    val2 === "" ||
    inp1 < 0 ||
    inp2 < 0
  ) {
    alert("Error :(");
    return;
  }

  if ((opt === "mod" || opt === "divide") && inp2 === 0) {
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

$("#submit_btn").on("click", () => {
  operate();
});

setInterval(() => {
  alert("Please, use me...");
}, 30000);
