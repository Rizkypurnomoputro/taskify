// app.js
import { getTasks, saveTasks } from "./storage.js";
import { renderTasks } from "./dom.js";

export function initApp() {
  const form = document.getElementById("todo-form");
  const input = document.getElementById("todo-input");
  const list = document.getElementById("todo-list");

  let tasks = getTasks();
  renderTasks(tasks, list);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = { title: input.value, done: false };
    tasks.push(task);
    saveTasks(tasks);
    renderTasks(tasks, list);
    input.value = "";
  });
  // user can delete tasks by clicking on them
  // list.addEventListener("click", (e) => {
  //   if (e.target.tagName === "LI") {
  //     const index = Array.from(list.children).indexOf(e.target);
  //     tasks.splice(index, 1);
  //     saveTasks(tasks);
  //     renderTasks(tasks, list);
  //   }
  // });
}

initApp();
