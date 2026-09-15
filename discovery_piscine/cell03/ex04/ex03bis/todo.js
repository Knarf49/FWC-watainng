function getCookie(name) {
  let match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  if (match) {
    return match[2];
  }
  return null;
}

let savedData = getCookie("todo");
const $ft_list = $("#ft_list");

const saveList = () => {
  let tasks = [];
  $ft_list.children().each(function () {
    tasks.push($(this).text());
  });
  document.cookie = "todo=" + encodeURIComponent(JSON.stringify(tasks));
};

const createTaskElement = (text) => {
  const $newTask = $("<div></div>").text(text);
  $newTask.on("click", function () {
    if (confirm("remove this item?")) {
      $(this).remove();
      saveList();
    }
  });
  return $newTask;
};

if (savedData) {
  let loadedList = JSON.parse(decodeURIComponent(savedData));
  console.log(loadedList);

  loadedList.forEach((taskTxt) => {
    $ft_list.append(createTaskElement(taskTxt));
  });
}

$("#newBtn").on("click", () => {
  let taskText = prompt("What the new task?");

  if (taskText && taskText.trim() !== "") {
    $ft_list.prepend(createTaskElement(taskText));
    saveList();
  }
});
