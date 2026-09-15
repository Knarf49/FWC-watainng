function getCookie(name) {
  let match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  if (match) {
    return match[2];
  }
  return null;
}

let savedData = getCookie("todo");
const ft_list = document.getElementById("ft_list");

if (savedData) {
  let loadedList = JSON.parse(decodeURIComponent(savedData));
  console.log(loadedList);

  loadedList.forEach((taskTxt) => {
    let newTask = document.createElement("div");
    newTask.textContent = taskTxt;

    newTask.onclick = () => {
      if (confirm("remove this item?")) {
        newTask.remove();
        saveList();
      }
    };

    ft_list.appendChild(newTask);
  });
}

const saveList = () => {
  let tasks = [];
  const ft_list = document.getElementById("ft_list");

  for (let i = 0; i < ft_list.children.length; i++) {
    tasks.push(ft_list.children[i].textContent);
  }
  document.cookie = "todo=" + encodeURIComponent(JSON.stringify(tasks));
};

const newBtn = document.getElementById("newBtn");

newBtn.addEventListener("click", () => {
  let taskText = prompt("What the new task?");

  if (taskText && taskText.trim() !== "") {
    let newTask = document.createElement("div");
    newTask.textContent = taskText;

    newTask.onclick = () => {
      if (confirm("remove this item?")) {
        newTask.remove();
        saveList();
      }
    };

    ft_list.prepend(newTask);
    saveList();
  }
});
